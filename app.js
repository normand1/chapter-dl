// youtube-dl --youtube-skip-dash-manifest -g  "https://youtu.be/AjELuCHzBnI"   

import YouTubeManager from './youTubeManager.js'
import TimeCodeParser from './timeCodeParser.js'
import Utility from './utility.js';
import ChapterFileBuilder from './chapterFileBuilder.js';
import fs from "fs";

const youTubeManager = new YouTubeManager();
const youtubeUrl = 'https://youtu.be/efp-2AHox1U';
const outputVideoFileName = new Utility().buildNiceURI(youtubeUrl);

const descriptionText = await youTubeManager.getDescription(youtubeUrl);
const chapters = youTubeManager.parseChaptersFromDescription(descriptionText);
// console.log(chapters);

const videoUrl = await youTubeManager.getVideoUrl(youtubeUrl);
let timeCodeParser = new TimeCodeParser();
const chapterFileBuilder = new ChapterFileBuilder();

await Promise.all(chapters.map(async (chapter, index) => {
    const aIndex = index;
    const timeCodeString = Object.keys(chapter)[0];
    var seconds = timeCodeParser.secondsFromTimeCode(timeCodeString);    
    const chapterDescription = Object.values(chapter)[0];
    const nameTemplate = `${outputVideoFileName}${aIndex}`;
    // console.log(chapterDescription);
    
    await youTubeManager.getVideoFile(videoUrl, nameTemplate, seconds);
    console.log(`finished getting video ${nameTemplate}`);
    await youTubeManager.getScreenshotFromVideo(`${nameTemplate}`);
    console.log(`finished getting screenshot ${nameTemplate}`);
    chapterFileBuilder.addChapter(seconds, chapterDescription, nameTemplate);
}));

let data = JSON.stringify(chapterFileBuilder.chapterJson);
fs.writeFileSync(`${outputVideoFileName}.json`, data);

