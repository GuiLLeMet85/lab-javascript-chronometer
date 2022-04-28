class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalID = null;
    }

    start(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++;
        }, 1000);
    }


    getMinutes() {
        return Math.floor(this.currentTime/60);
    }

    getSeconds() {
        return Math.floor(this.currentTime%60);
    }

    computeTwoDigitNumber(value) {
        const stringNumber = value.toString();
        
        if(stringNumber.length === 1) {
            return `0${stringNumber}`
          } else {
            return stringNumber;
          }
    }

    stop() {
        clearInterval (this.intervalID);
    }
    
    reset() {
        this.currentTime = 0;

    }

    split() {
        // return a string where the time since the start is formatted as "mm:ss". 
        //Internally, the split method can make usage of previously declared methods such as getMinutes, getSeconds, and computeTwoDigitNumber.
        const minutes = this.computeTwoDigitNumber(this.getMinutes())
        const seconds = this.computeTwoDigitNumber(this.getSeconds())
        return `${minutes}:${seconds}`
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}