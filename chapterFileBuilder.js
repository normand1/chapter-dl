import { version } from "chai";

class ChapterFileBuilder {
    chapterJson = {
        chapters: [],
        version: '1.0.0'
    };

    addChapter(time, title, image) {
        this.chapterJson.chapters.push ({
            "time": time,
            "title": title,
            "image": image
        });
    }
}

export default ChapterFileBuilder;