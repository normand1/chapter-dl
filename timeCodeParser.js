
class TimeCodeParser {

    secondsFromTimeCode(timeCode) {
        var a = timeCode.split(':'); // split it at the colons
        var seconds = 0;
        if (a.length == 3) {
             seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);  
        } else if (a.length == 2) {
            seconds = (+a[0]) * 60 + (+a[1]);  
        } else {
            seconds = a[0];  
        }
        
        return seconds;

    }

}

export default TimeCodeParser;
