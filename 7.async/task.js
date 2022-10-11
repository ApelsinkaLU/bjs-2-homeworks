/*jshint esversion: 7 */

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('ID не передан');
        } else if (this.alarmCollection.some((e) => e.id == id)) {
            return console.error('Такой звонок уже есть');
        } else {
            this.alarmCollection.push({id: id, time: time, callback: callback});
        }
    } 

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter((i) => i.id !== id);
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    } 

    start() {
        let checkClock = alarm => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                return alarm.callback;
            }
        };

        if (this.timerId === null) {
            let newInterval = () => this.alarmCollection.forEach(checkClock);
            this.timerId = setInterval(newInterval, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            this.timerId = null;
            clearInterval(this.timerId);
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((e) => console.log(e.id, e.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}