import util from 'util';
import { exec } from "child_process";
import Timecode from 'smpte-timecode'
import Utility from './utility.js';

class YouTubeManager {

    async getDescription(url) {
        const execute = util.promisify(exec);
        const { stdout, stderr } = await execute(` youtube-dl ${url} --get-description --skip-download --youtube-skip-dash-manifest`, { maxBuffer: 2000 * 1024 });
        // console.log('stdout:', stdout);
        return stdout;
    }

    async getVideoUrl(url) {
        try {
            const execute = util.promisify(exec);
            const { stdout, stderr } = await execute(`youtube-dl --youtube-skip-dash-manifest -g ${url}`, { maxBuffer: 2000 * 1024 });
            // console.log('stdout:', stdout);
            let videoUrl = this.parseOutVideoUrl(stdout);
            return videoUrl;
        } catch (err) {
            console.error(err);
            process.exit()
        };
    };

    async getVideoFile(video_url, outputVideoFileName, screenShotSeconds) {
        console.log('starting video download');
        var startTimeCode = new Utility().toHHMMSS(screenShotSeconds.toString());
        var endTimeCode = new Utility().toHHMMSS((screenShotSeconds + 1).toString());
        let execString = `ffmpeg -ss ${startTimeCode} -i "${video_url}" -t 1 -ss 1 -c:v libx264 -c:a aac ${outputVideoFileName}.mkv`
        // console.log(execString);
        const execute = util.promisify(exec);
        await execute(execString);
      };

      async getScreenshotFromVideo(outputVideoFileName) {
        console.log('starting screenshot grab');
            const execute = util.promisify(exec);
            const execString = `ffmpeg -ss 00:00 -i "${outputVideoFileName}.mkv" -vframes 1 -q:v 2 ${outputVideoFileName}.jpg`;
            await execute(execString);     
    };

    async execShellCommand(cmd) {
        const aExec = exec;
        return new Promise((resolve, reject) => {
            aExec(cmd, (error, stdout, stderr) => {
                if (error) {
                        console.warn(error);
                    }
                resolve(stdout? stdout : stderr);
            });
        });
    }

    parseOutVideoUrl(url) {
        console.log('starting url parsing');
        let videoAndAudioUrls = url.split(/\r?\n/);
        if (videoAndAudioUrls.length > 0) {
            return videoAndAudioUrls[0];
        }
        return null;
    }

    parseChaptersFromDescription(description) {
        const regex = /(?<time>\d{1,2}:\d{1,2}:\d{1,2}|\d{1,2}:\d{1,2})\)?\s(\-)?(\s)?(?<chapterTitle>.*)/gm;
        let m;
        let chapters = [];
        while ((m = regex.exec(description)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                if (match != undefined && groupIndex != 0) {
                    chapters.push(match);
                    // console.log(`Found match, group ${groupIndex}: ${match}`);
                }
            });
        }
        var chaptersArr = [];

        for (let i = 0; i < chapters.length; i += 2) {
            chaptersArr.push({ 
                [chapters[i]]: chapters[i + 1]
            });
        }

        return chaptersArr;
    }


}

export default YouTubeManager;
