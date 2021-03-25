// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const refs = {
    timer: document.querySelector('.timer'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

const timer = {
    // targetDate: new Date('Mar 27, 2021'),
    start() {
        
        setInterval(() => {
            const startTime = Date.now();
            const targetDate = new Date('March 27, 2021');
            const deltaTime = targetDate - startTime;
            const timeTotal = getTimeComproments(deltaTime);
            updateClockface(timeTotal);
        }, 1000);
    },
};

timer.start();

function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};

function pad(value) {
    return String(value).padStart(2, '0')
};

function getTimeComproments(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs};
};

