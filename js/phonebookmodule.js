const keys = document.querySelectorAll('.keys');
const keypadInput = document.querySelector('#keypadInput');
const dialBtn = document.getElementById('dial');
const deleteBtn = document.getElementById('deleteBtn');


for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener('click', function (params) {
        keypadInput.value += keys[index].innerHTML;

    });
    
}

dialBtn.addEventListener('click', dial);
deleteBtn.addEventListener('click', deleteItem);

function dial(params) {
    console.log('I am dialing...');
}  
function deleteItem(params) {
    let previousContent = keypadInput.value;
    let newContent = previousContent.slice(0,-1);

    keypadInput.value = newContent;
} 

