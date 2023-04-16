const powerOnBtn = document.querySelector('.powerOn');
const phoneContainer = document.querySelector('.phoneContainer');

powerOnBtn.addEventListener('click', powerOnOROff);

function powerOnOROff() {
    phoneContainer.classList.toggle("bg-dark");
    if (powerOnBtn) {
        console.log('I am booting...');
        phoneContainer.style.backgroundColor = 'white';
    }
    else{
        console.log('I am shutting down...');
    }

}
