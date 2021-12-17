import {expect} from 'chai';
import ChapterFileBuilder from '../chapterFileBuilder.js';

describe('add chapter to file', function() {
    it('should add a chapter to the list of chapters', function() {
        const chapterFileBuilder = new ChapterFileBuilder();
        chapterFileBuilder.addChapter(0, 'title 1', 'image 1');
        chapterFileBuilder.addChapter(10, 'title 2', 'image 2');
        let expected = {
            chapters: [{
                "time": 0,
                "title": 'title 1',
                "image": 'image 1'
            },
            {
                "time": 10,
                "title": 'title 2',
                "image": 'image 2'
            }],
            version: '1.0.0'
        }
        expect(JSON.stringify(chapterFileBuilder.chapterJson)).to.be.equal(JSON.stringify(expected));
    });
});