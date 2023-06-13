const powerOffBtn = document.querySelector('.powerOff');
const homeScreen = document.querySelector('.homeScreen');
const timeDisplay = document.querySelectorAll('.time');
const phoneBook = document.querySelector('.phoneBook');
const homePage = document.querySelector('.homePage');
const phoneBookPage = document.querySelector('.phoneBookPage');

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

//PhoneBook

phoneBook.addEventListener('click', () => {
    homePage.classList.toggle('d-none');
    phoneBookPage.classList.toggle('d-none');
})

// powerOff

powerOffBtn.addEventListener('click', () => {
    homeScreen.classList.toggle('d-none');
})