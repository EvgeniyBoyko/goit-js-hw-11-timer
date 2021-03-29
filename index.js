const refs = {
    timer: document.querySelector('.timer'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

const timer = {
    start() {
        const targetDate = new Date('Jul 30, 2021');
        console.log(targetDate)
        setInterval(() => {
            const startTime = Date.now();

            if (targetDate === startTime) {
                return;
            };
            
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
    return { days, hours, mins, secs };
};


