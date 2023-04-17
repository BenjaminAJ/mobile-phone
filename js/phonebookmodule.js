const keys = document.querySelectorAll('.keys');
const keypadInput = document.querySelector('#keypadInput');
const addToContactBtn = document.querySelector('.bi-plus');
const searchBtn = document.querySelector('.bi-search');
const searchResults = document.querySelector('.searchResults');
const dialBtn = document.getElementById('dial');
const deleteBtn = document.getElementById('deleteBtn');

let contactarray=[{phonenumber: 345, firstname : 'Ben'}];
let contactobj = {
    firstname : '',
    lastname : '',
    phonenumber : '',
};
let userinput;
let searchResultsarry;


for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener('click', function (params) {
        keypadInput.value += keys[index].innerHTML;
        searchContacts()
        
    });
    
}

dialBtn.addEventListener('click', dial);
deleteBtn.addEventListener('click', deleteItem);
searchBtn.addEventListener('click', searchContacts);

function dial(params) {
    console.log('I am dialing...');
}  
function endDial(params) {
    console.log('end call');
}
function searchContacts(keypadInput) {
    const searchResultsarry = contactarray.filter(contact => checkContacts(contact, userinput));
    searchResultsarry.forEach(element => {
        if (searchResults.innerHTML == element.phonenumber) {
            return
        }
        else{
            searchResults.innerHTML += `<div class='col-12'>
                ${element.firstname}
                ${element.phonenumber}
            </div>`;
        }
    });
  }
  
  function checkContacts(contact, userinput) {
    userinput = keypadInput.value;
    const searchQuery = userinput;
    const phoneNumber = contact.phonenumber;
    if (typeof phoneNumber !== "number") {
      return false;
    }
    return (phoneNumber ==  searchQuery);
  }  
  function deleteItem(params) {
    let previousContent = keypadInput.value;
    let newContent = previousContent.slice(0,-1);

    keypadInput.value = newContent;

    
} 

function checkContent(params) {
    if (keypadInput.value == '') {
        addToContactBtn.classList.add('d-none');
    }
    else{
        addToContactBtn.classList.remove('d-none');
    }
}
setInterval(() => {
    checkContent();
}, 10);

function addToContacts(params) {
    console.log('Adding');
}
