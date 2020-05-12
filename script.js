const timeNodes = [...document.querySelectorAll('[data-time]')];

console.log(timeNodes);

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, sec] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + sec;
        console.log(mins, sec)
            ;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;