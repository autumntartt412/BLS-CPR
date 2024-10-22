import "./form.css";

const minlength = 1;
const maxlength = 50;
const nameReg = '/^[a-zA-Z\s]+$/';
const emailMinlength = 3;
const emailMaxlength = 30;
const emailReg = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
const emailPattern = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/;';
const form = document.getElementsById('form');
const firstName = form.elements['firstname'];
const lastName = form.elements['lastname'];
const email = form.elements['email'];
// const firstName = form.querySelectorAll('firstName').value;
// const lastName = form.querySelectorAll('lastName').value;
// const email = form.querySelectorAll('email').value;


const cardContainerEl = document.selectElementById('cardcontainer');
cardContainerEl.style.height = '50%';
cardContainerEl.width = '50%';


const navEl = document.selectElementById('nav');
navEl.style.border = '5px white';
navEl.classList.add('flex-around');
navEl.style.textContent = 'white';

const priceCards = document.querySelectorAll('cards');
priceCards.style.width = '100px';
priceCards.style.border = 'var(--text-color)';


const buttonEl = document.selectElementById('button');
buttonEl.style.padding = '30px';


for (let i = 0; i < cards.length; i++) {
    const li = cards[i].querySelector("li");
    if (li && li.textContent === "Infant CPR/AED - $50") {
        const newList = cards[i].querySelectorAll("li");
        newList.forEach((dogCpr) => {
            dogCpr.textContent = "Doggy CPR - $50";
        });
    }
}

const listEls = document.querySelectorAll('li');
listEls.forEach(el => {
    el.style.fontWeight = 'bold';
    el.style.alignContent = 'left';
});


const ul = document.li;
appendChild(document.createElement('div'));
appendChild(document.createElement('ul'));

for (let i = 0; i < 2; 1++) {
    ul.appendChild.createElement('li')
};

function showAlert(alert) {
    errorAlert = "";
}
 


function errorMessage(eMessage, e) {
    document.getElementById('message').textContent = eMessage;
}


function isFirstNameValidLength(firstname) {

    let firstname = "";

    if (firstname.length >= minlength && firstname.length <= maxlength) {
        alert('First name is valid!');
        return true;

    } else {
        if (firstname == !isFirstNameValidLength.length)
            alert(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long.`)
            return false;
        console.log(eMessage(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long., e`));

    }
};



function validFirstName(firstname) {
    let firstName = "";
    if (firstname == !nameReg) {
        alert('Please enter a valid first name.');
        return false;
    }
    console.log(eMessage('Please enter a valid first name., e'));
};

function firstNameEmptySpace(firstName) {
    if (firstName === "") {
        alert('Please enter a valid first name.');
        return false;
    }
    console.log(eMessage('Please enter a valid first name., e'));
};


//last name
function isLastNameValidLength(lastname) {
    let lastname = "";

    if (lastname.length >= minlength && lastname.length <= maxlength) {
        alert('Last name is valid!');
        return true;

    } else {
        if (lastname = !isLastNameValidLength.length)
            alert(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long.`)
            return false;
        console.log(eMessage(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long., e`));

    }
};

function validLastName(lastname) {
    let lastName = "";
    if (lastname == !nameReg) {
        alert('Please enter a valid last name.'); 
        return false;
    }
    console.log(eMessage('Please enter a valid last name., e'));
};


function lastNameEmptySpace(lastName) {
    if (lastName === "") {
        alert('Please enter a valid last name.'); 
        return false;
    }
    console.log(eMessage('Please enter a valid last name., e'));
};


//email

function isEmailValidLength(email) {
    let email = "";

    if (email.length >= emailMinlength && email.length <= emailMaxlength) {
        alert('Email is valid!');
        return true;

    } else {
        if (email = !isEmailValidLength.length)
        alert(`Your email must be greater than ${emailMinLength} and less than ${emailMaxLength} characters long.`);
            return false;
    }
    console.log(eMessage(`Your email must be greater than ${emailMinLength} and less than ${emailMaxLength} characters long., e`));

};

function validatePattern(email) {
    if (email == !validatePattern) {
        alert('Please enter a valid email'); 
        return false;
    }
    console.log(eMessage('Please enter a valid email., e'))
};



function validateEmail(email) {
    let email = "";
alert('Please enter a valid email'); 

    if (!emailReg.test(email)) {
        alert('Please enter a valid email'); 
        return false;
    }
    console.log(eMessage('Please enter a valid email., e'));
};



function emailEmptySpace(email) {
    if (email === "") {
        alert('Please enter a valid email'); 
        return false;

    }
    console.log(eMessage('Please enter a valid email., e'));
}

//Submit

function validateCprFormOnSubmit(e) {
    e.preventDefault();
    const firstName = firstName.value;
    const lastName = lastName.value;
    const email = email.value;


    form.addEventListener('submit', validateCprFormOnSubmit);
    e.preventDefault('form');
    console.log('form');
    console.log('Sign up button clicked.');

}
validateCprFormOnSubmit();


const formData = new FormData(document.getElementById('submit'));
const data = {};

formData.forEach((value, key) => {
    data[key] = value;
});


// new price list item

// const priceList = document.getElementById('pricelist');
// let newPriceListItem = document.createElement('li');
// newPriceListItem.textContent = "First Aid - $50";
// priceList.appendChild(newPriceListItem);