const powerOnBtn = document.querySelector('.powerOn');
const phoneContainer1 = document.querySelector('.phoneContainer');
const samsung = document.querySelector('.samsung');
const phoneWrapper = document.querySelector('.phoneWrapper');

powerOnBtn.addEventListener('click', powerOnOROff);

if (samsung) {
    samsung.style.display = 'none';
}

function powerOnOROff() {
    if (classCheck('.phoneContainer', '.bg-dark')) {
        console.log('I am booting...');
        // phoneContainer.style.backgroundColor = 'white';
        // phoneWrapper.style.backgroundColor = 'white';
        samsung.style.display = 'block';
        setTimeout(() => {
            window.location.href = "./homescreen.html";
        }, 1000);
    }
    else{
        console.log('I am shutting down...');
        // window.location.href = "./index.html";

    }
    // phoneContainer.classList.toggle("bg-dark");
    // phoneWrapper.classList.toggle("bg-dark");

}

function classCheck(element, params){
    const elementClass = document.querySelector(`${element}`);
    if(elementClass.matches(`${params}`)){
     return true;
    }
    return false;
   }