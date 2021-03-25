class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.targetDate = new Date(targetDate);
    this.daysSpan = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hoursSpan = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutesSpan = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secondsSpan = document.querySelector(`${selector} .value[data-value="secs"]`);

  }
  
  padZero(value) {
    return value < 10 ? `0${value}` : value;
  }
  countDowm() {
    const currentTime = new Date();
    this.createSpanValue(currentTime);
  }

  showTime() {
    setInterval(() => this.countDowm(), 1000);
  }

  createSpanValue(currentTime) {
    const time = this.targetDate - currentTime;
    this.daysSpan.textContent = this.padZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hoursSpan.textContent = this.padZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutesSpan.textContent = this.padZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secondsSpan.textContent = this.padZero(Math.floor((time % (1000 * 60)) / 1000));

  }
};