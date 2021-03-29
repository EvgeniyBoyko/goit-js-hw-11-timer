class Timer {
    constructor({ targetDate, selector }) {
        this.targetDate = new Date(targetDate);
        this.days = document.querySelector(`${selector} .value[data-value="days"]`);
        this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
        this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
        this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);
    };

    pad(value) {
    return value < 10 ? `0${value}` : value;
    };

    curentTime() {
    const startTime = Date.now();
    this.getTimeComproments(startTime);
    };

    startTime() {
        setInterval(() => this.curentTime(), 1000);
    }

    getTimeComproments(startTime) {
        const time = this.targetDate - startTime;
        this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        };
    };

const timer = new Timer({
    selector: "#timer-1",
    targetDate: 'Jul 30, 2021',
});

timer.startTime()