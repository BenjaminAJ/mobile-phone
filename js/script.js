const powerOnBtn = document.querySelector('.powerOn');
const phoneContainer = document.querySelector('.phoneContainer');
const phoneWrapper = document.querySelector('.phoneWrapper');

powerOnBtn.addEventListener('click', powerOnOROff);

function powerOnOROff() {
    if (classCheck('.phoneContainer', '.bg-dark')) {
        console.log('I am booting...');
        phoneContainer.style.backgroundColor = 'white';
        phoneWrapper.style.backgroundColor = 'white';

    }
    else{
        console.log('I am shutting down...');
    }
    phoneContainer.classList.toggle("bg-dark");
    phoneWrapper.classList.toggle("bg-dark");

}

function classCheck(element, params){
    const elementClass = document.querySelector(`${element}`);
    if(elementClass.matches(`${params}`)){
     return true;
    }
    return false;
   }