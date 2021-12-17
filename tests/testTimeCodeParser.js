import {expect} from 'chai';
import TimeCodeParser from '../timeCodeParser.js';

describe('secondsFromTimeCode()', function () {
    it('should return a timeCode from mm:ss', function() {
        let timeCodeParser = new TimeCodeParser();
        let seconds = timeCodeParser.secondsFromTimeCode('00:10');
        expect(seconds).to.be.equal(10);
    });

    it('should return a timeCode from mm:ss 2', function() {
        let timeCodeParser = new TimeCodeParser();
        let seconds = timeCodeParser.secondsFromTimeCode('01:59');
        expect(seconds).to.be.equal(119);
    });
});