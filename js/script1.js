const timeDisplay = document.querySelectorAll('.time');

//Time
setInterval(() => {
    let date = new Date();
    let period;
    let minutes;

    if (date.getHours() > 11) {
        period = 'pm';
    }
    else{
        period = 'am';
    }

    if (date.getMinutes() < 10) {
        minutes = '0' + date.getMinutes();
    }
    else{
        minutes = date.getMinutes();
    }
    timeDisplay.forEach(element => {
        element.innerHTML = date.getHours() + ' : ' + minutes;
    });
}, 1000);