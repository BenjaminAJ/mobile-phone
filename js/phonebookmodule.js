const keys = document.querySelectorAll('.keys');
const keypadInput = document.querySelector('#keypadInput');
const saveContactBtn = document.querySelector('#saveContact');
const homeScreen = document.querySelector('.homeScreen');
const phoneContainer = document.querySelector('.phoneContainer');
const addToContactBtn = document.querySelector('.bi-plus');
const searchBtn = document.querySelector('.bi-search');
const searchResults = document.querySelector('.searchResults');
const dialBtn = document.getElementById('dial');
const nameInput = document.getElementById('name');
const phoneNumberInput = document.getElementById('phoneNumber');
const emailAddressInput = document.getElementById('emailAddress');
const createContactBtn = document.querySelector('.createContact');
const updateContactBtn = document.querySelector('.updateContact');
const deleteBtn = document.getElementById('deleteBtn');

let contactarray=[{phonenumber: 8010120398, name : 'Ben'},{phonenumber: 80101223453, name : 'Fred'}];
let contactobj = {
    name : '',
    phonenumber : '',
};
let userinput;
let searchResultsarry;
searchResults.style.display = 'none';


localStorage.setItem('contactarray', JSON.stringify(contactarray));

for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener('click', function (params) {
        keypadInput.value += keys[index].innerHTML;
        searchContacts();
        
    });
    
}

// saveContactBtn.addEventListener('click', saveContact)
dialBtn.addEventListener('click', dial);
deleteBtn.addEventListener('click', deleteItem);
searchBtn.addEventListener('click', searchContacts);
addToContactBtn.addEventListener('click', addToContacts);

function dial(params) {
    console.log('I am dialing...');
    homeScreen.style.display = none;
    
}  
function endDial(params) {
    console.log('end call');
}
function searchContacts(keypadInput) {
    searchResults.style.display = 'block';
    searchResults.innerHTML = '';
    let storedContacts = localStorage.getItem('contactarray');
    let searchResultsarry = JSON.parse(storedContacts);
    searchResultsarry = searchResultsarry.filter(contact => checkContacts(contact, userinput));
    if (searchResultsarry) {
        searchResultsarry.forEach(element => {
            if (searchResults.innerHTML.match(`${element.phonenumber}`)) {
                return
            }
            else{
                searchResults.innerHTML += `<div class='col-12'>
                    ${element.name}
                    ${element.phonenumber}
                </div>`;
            }
        });
        
    }
  }
  
  function checkContacts(contact, userinput) {
    userinput = keypadInput.value;
    const searchQuery = userinput;
    const phoneNumber = contact.phonenumber;
    if (typeof phoneNumber !== "number") {
      return false;
    }
    // return (phoneNumber ==  searchQuery);
    return String(phoneNumber).includes(userinput)
  }  
  function deleteItem(params) {
    let previousContent = keypadInput.value;
    let newContent = previousContent.slice(0,-1);

    keypadInput.value = newContent;
    searchContacts()
    if (keypadInput.value === '' ) {
        searchResults.innerHTML = ''
        searchResults.style.display = 'none';

    }
  
} 

function checkContent(params) {
    if (keypadInput.value == '') {
        addToContactBtn.classList.add('d-none');
    }
    else{
        addToContactBtn.classList.remove('d-none');
    }
}
checkContent();

setInterval(() => {
    checkContent();
}, 10);

function addToContacts(params) {
    console.log('Adding');
    homeScreen.style.display = 'none';
    let updatePhoneNumber = keypadInput.value
    console.log(updatePhoneNumber);

    phoneContainer.innerHTML = `
    <div class="container formWrapper py-4 rounded">
    <h2 class="text-center mt-2">PhoneBook</h2>


    <!-- Bootstrap 5 starter form -->
    <form id="contactForm">

        <!-- Name input -->
        <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input class="form-control" id="name" required type="text" placeholder="Name" />
        </div>
        <!-- Mobile Phone number input -->
        <div class="mb-3">
            <label class="form-label" for="phoneNumber">Phone Number</label>
            <input class="form-control" required id="phoneNumber" value="${updatePhoneNumber}" type="tel"
                placeholder="Phone Number" />
            
        </div>

        <!-- Email address input -->
        <div class="mb-3">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input class="form-control" id="emailAddress" type="email"
                placeholder="Email Address" />
        </div>


        <!-- Form submit button -->
        <div class="d-flex justify-content-between">
            <button class="col-auto btn text-white" type="button">Cancel</button>
            <button class="col-auto btn text-white" id="saveContact" onclick="saveToContact()" type="button">Save</button>
        </div>

    </form>

</div>


`;
}

if (createContactBtn) {
    createContactBtn.addEventListener('click', createNewContact)
}

function createNewContact(params) {
    // window.location.href = './createnewcontact.html';
    addToContacts();
}
function saveToContact(params) {
    console.log('I am saving');
    contactobj.name = nameInput.value;
    contactobj.phonenumber = phoneNumberInput.value;
    contactobj.emailAddress = emailAddressInput.value;
    
    contactarray.push(contactobj);
    console.log(contactobj);
    console.log(contactarray);

    localStorage.setItem('contactarray', JSON.stringify(contactarray));
}
