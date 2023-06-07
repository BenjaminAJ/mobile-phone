const keys = document.querySelectorAll('.keys');
const keypadInput = document.querySelector('#keypadInput');
const saveContactBtn = document.querySelector('#saveContact');
const homeScreen = document.querySelector('.homeScreen');
const phoneContainer = document.querySelector('.phoneContainer');
const addToContactBtn = document.querySelector('.bi-plus');
const showContactsBtn = document.querySelector('.showContacts');
const showKeypadBtn = document.querySelector('.showKeypad');
const showRecentCallsBtn = document.querySelector('.showRecentCalls');
const searchBtn = document.querySelector('.bi-search');
const searchResults = document.querySelector('.searchResults');
const dialBtn = document.getElementById('dial');
const createContactBtn = document.querySelector('.createContact');
const updateContactBtn = document.querySelector('.updateContact');
const deleteBtn = document.getElementById('deleteBtn');
const formWrapper = document.querySelector('.formWrapper');


let contactarray = [{ phonenumber: 8010120398, name: 'Ben' }, { phonenumber: 80101223453, name: 'Fred' }, { phonenumber: 80101223453, name: 'Adebayo' }];
let contactobj = {
    name: '',
    phonenumber: '',
};
let userinput;
let searchResultsarry;
searchResults.style.display = 'none';

setTimeout(() => {

    localStorage.setItem('contactarray', JSON.stringify(contactarray));
}, 1000);

for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener('click', function (params) {
        keypadInput.value += keys[index].innerHTML;
        if (navigator.vibrate) {
            window.navigator.vibrate(2000); // vibrate for 2000ms
        }
        searchContacts();

    });

}

// saveContactBtn.addEventListener('click', saveContact)
dialBtn.addEventListener('click', dial);
deleteBtn.addEventListener('click', deleteItem);
searchBtn.addEventListener('click', searchContacts);
// addToContactBtn.addEventListener('click', addToContacts);
showContactsBtn.addEventListener('click', showAllContacts);
showKeypadBtn.addEventListener('click', showKeypad);
showRecentCallsBtn.addEventListener('click', showRecentCalls);

function dial(params) {
    console.log('I am dialing...');
    // homeScreen.style.display = 'none';

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
    if (searchResultsarry.length > 0) {
        searchResultsarry.forEach(element => {
            if (searchResults.innerHTML.match(`${element.phonenumber}`)) {
                return
            }
            else {
                searchResults.innerHTML += `<div class='col-12'>
                    ${element.name}
                    ${element.phonenumber}
                </div>`;
            }
        });

    }

}

function checkContacts(contact, userinput) {
    userinput = (keypadInput.value).trim();
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
    let newContent = previousContent.slice(0, -1);

    keypadInput.value = newContent;
    searchContacts();
    if (keypadInput.value === '') {
        searchResults.innerHTML = ''
        searchResults.style.display = 'none';

    }

}

function checkContent(params) {
    if (keypadInput.value == '') {
        addToContactBtn.classList.add('d-none');
    }
    else {
        addToContactBtn.classList.remove('d-none');
    }


    // To be removed
    if (searchResults.innerHTML == '') {
        searchResults.classList.add('d-none');
    }
    else {
        searchResults.classList.remove('d-none');

    }

}
checkContent();

setInterval(() => {
    checkContent();
}, 10);

function addToContacts(params) {
    console.log('Adding');
    let updatePhoneNumber = keypadInput.value;
    homeScreen.classList.add('d-none');
    formWrapper.classList.remove('d-none');
    const phoneNumberInput = document.querySelector('#phoneNumber');
    try {
        phoneNumberInput.value = updatePhoneNumber;
    } catch (error) {
        console.error('cannot read Phone number input')
    }


//     phoneContainer.innerHTML += `
//     <div class="container formWrapper py-4 rounded">
//     <h2 class="text-center mt-2">PhoneBook</h2>


//     <!-- Bootstrap 5 starter form -->
//     <form id="contactForm">

//         <!-- Name input -->
//         <div class="mb-3">
//             <label class="form-label" for="name">Name</label>
//             <input class="form-control" id="name" required type="text" placeholder="Name" />
//         </div>
//         <!-- Mobile Phone number input -->
//         <div class="mb-3">
//             <label class="form-label" for="phoneNumber">Phone Number</label>
//             <input class="form-control" required id="phoneNumber" value="${updatePhoneNumber}" type="tel"
//                 placeholder="Phone Number" />
            
//         </div>

//         <!-- Email address input -->
//         <div class="mb-3">
//             <label class="form-label" for="emailAddress">Email Address</label>
//             <input class="form-control" id="emailAddress" type="email"
//                 placeholder="Email Address" />
//         </div>


//         <!-- Form submit button -->
//         <div class="d-flex justify-content-between">
//             <button class="col-auto btn text-white" type="button" onclick="dismissSaveContact()">Cancel</button>
//             <button class="col-auto btn text-white" id="saveContact" onclick="saveToContact()" type="button">Save</button>
//         </div>

//     </form>

// </div>


// `;
}

if (createContactBtn) {
    createContactBtn.addEventListener('click', createNewContact)
}

function createNewContact(params) {
    // window.location.href = './createnewcontact.html';
    addToContacts();
}
function saveToContact(params) {
    const nameInput = document.getElementById('name');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const emailAddressInput = document.getElementById('emailAddress');
    const formWrapper = document.querySelector('.formWrapper');


    console.log('I am saving');
    if (nameInput.value == '') {
        console.error('No name');
        alert("Name must be filled out");
        return
    }
    if (phoneNumberInput.value == '') {
        console.error('No phone number');
        alert("Phone Number must be filled out");
        return
    }

    contactobj.name = nameInput.value;
    contactobj.phonenumber = phoneNumberInput.value;
    contactobj.emailAddress = emailAddressInput.value;

    contactarray.push(contactobj);
    console.log(contactobj);
    console.log(contactarray);

    localStorage.setItem('contactarray', JSON.stringify(contactarray));
    
    formWrapper.classList.add('d-none');

    // formWrapper.style.display = 'none';

    homeScreen.classList.remove('d-none');
    console.log(homeScreen);

}

function showAllContacts(params) {
    let allContacts = localStorage.getItem('contactarray');
    allContacts = JSON.parse(allContacts);

    console.log(allContacts);

    homeScreen.innerHTML = '';
    homeScreen.classList.toggle("justify-content-between");

    let SortedContacts = allContacts.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    SortedContacts.forEach(element => {
        homeScreen.innerHTML += `
            <div class="col-12 text-center">
                <span>${element.name}:</span>
                <span>${element.phonenumber}</span>
            </div>
        `;
    });
}
function showKeypad(params) {
    //     homeScreen.innerHTML += `
    //     <div class="container keypadWrapper">
    //     <div class="row align-items-center justify-content-center">
    //         <div class="col-auto mb-3">
    //             <input class="text-center" id="keypadInput" type="text">
    //             <i id="deleteBtn" class="bi btn text-white bi-backspace"></i>
    //         </div>
    //     </div>
    //     <div class="row align-items-center justify-content-center buttonWrapper gap-3">
    //         <div class="row align-items-center justify-content-center">
    //             <div class="col-3"><button class="btn keys btn-dark">1</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">2</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">3</button></div>
    //         </div>
    //         <div class="row justify-content-center">
    //             <div class="col-3"><button class="btn keys btn-dark">4</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">5</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">6</button></div>
    //         </div>
    //         <div class="row justify-content-center">
    //             <div class="col-3"><button class="btn keys btn-dark">7</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">8</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">9</button></div>
    //         </div>
    //         <div class="row justify-content-center">
    //             <div class="col-3"><button class="btn keys btn-dark">*</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">0</button></div>
    //             <div class="col-3"><button class="btn keys btn-dark">#</button></div>
    //         </div>
    //     </div>
    // </div>

    //     `;
    console.log('Return to keypad...');
}

function showRecentCalls(params) {
    console.log('Displaying call logs...');

}

function dismissSaveContact(params) {
    const formWrapper = document.querySelector('.formWrapper');

    formWrapper.classList.add('d-none');
    homeScreen.classList.remove('d-none');

}

// navigator.vibrate(200); // vibrate for 200ms
// navigator.vibrate([
//   100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
// ]); // Vibrate 'SOS' in Morse.
