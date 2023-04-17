const keys = document.querySelectorAll('.keys');
const keypadInput = document.querySelector('#keypadInput');
const dialBtn = document.getElementById('dial');


for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener('click', function (params) {
        keypadInput.value += keys[index].innerHTML;

    });
    
}

dialBtn.addEventListener('click', dial);

function dial(params) {
    console.log('I am dialing...');
}   