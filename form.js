const minLength = 1;
const maxLength = 20;
const nameReg = /^[a-zA-Z\s]+$/;
const emailMinLength = 3;
const emailMaxLength = 30;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formEl = document.getElementById('form');
const messageEl = document.getElementById('message');
const formData = new FormData(formEl);
const data = {};


const firstName = formEl.querySelector('input[name="firstname"]').value.trim();
const lastName = formEl.querySelector('input[name="lastname"]').value / trim();
const email = formEl.querySelector('input[name="email"]').value.trim();

formEl.addEventListener('submit', validateCprFormOnSubmit);


function validateCprFormOnSubmit(e) {
    e.preventDefault();

    console.log('form');
    console.log("Sign up button clicked.");


    messageEl.innerHTML = "";

    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);


    let isValid = validateForm(firstName, lastName, email);
    if (isValid) {
        messageEl.textContent = "Form submitted.";
        messageEl.style.display = 'block';
        messageEl.style.color = 'green';
    }
};


function isFirstNameValidLength(firstName, minLength, maxLength) {



    if (firstName.length >= minLength && firstName.length <= maxLength) {
        console.log("First name is valid!");
        return true;
    } else {

        errorMessage(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long.`);
        return false;
    }
}

isFirstNameValidLength("");




function validFirstName(firstName) {


    if (!nameReg.test(firstName)) {

        errorMessage("Please enter a valid first name.");
        return false;
    }
    return true;
};




validFirstName("");


function firstNameEmptySpace(firstName) {
    if (firstName === "") {
        errorMessage("Please enter a valid first name.");
        return false;
    }
    return true;
};

firstNameEmptySpace("");





//last name
function isLastNameValidLength(lastName, minLength, maxLength) {

    if (lastName.length === 0) {
        errorMessage(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long.`);
        return false;
    }

    if (lastName.length >= minLength && lastName.length <= maxLength) {
        errorMessage("Last name is valid!");
        return true;
    }
};

isLastNameValidLength("");

function validLastName(lastName) {

    if (!nameReg.test(lastName)) {
        errorMessage("Please enter a valid last name.");
        return false;
    }
    console.log("Last name is valid!");
    return true;
};

validLastName("");


function lastNameEmptySpace(lastName) {
    if (lastName === "") {
        errorMessage("Please enter a valid last name.");
        return false;
    }
    console.log("Last name is valid!");
    return true;
};


lastNameEmptySpace("");



//email

function isEmailValidLength(email, emailMinLength, emailMaxLength) {


    if (email.length >= emailMinLength && email.length <= emailMaxLength) {
        errorMessage("Email is valid!");
        return true;

    } else {
        if (email.length === 0)
            errorMessage(`Your email must be greater than ${emailMinLength} and less than ${emailMaxLength} characters long.`);
        return false;
    }
};

isEmailValidLength("");


function validatePattern(email) {
    if (!emailReg.test(email)) {
        errorMessage("Please enter a valid email");
        return false;
    } else {
        console.log("Valid email!");
        return true;
    }
};

validatePattern("");




function validateEmail(email) {



    if (!emailReg.test(email)) {
        errorMessage("Please enter a valid email");
        return false;
    }
    console.log("Valid email!");
    return true;
};

validateEmail("");





function emailEmptySpace(email) {
    if (email === "") {
        errorMessage("Please enter a valid email");
        return false;

    }
    console.log("Email is valid!");
    return true;
}

emailEmptySpace("");







// error message
function errorMessage(msg) {
    messageEle.style.display = 'block';
    messageEl.textContent = msg;
    messageEl.style.color = 'red';

}

errorMessage(msg);


function hideMessage() {
    errorDiv.style.display = 'none';
};

hideMessage();


// setTimeout(hideMessage, 5000);


const priceLists = document.querySelectorAll('.pricelist');
function addPriceListItem(name, price) {
    let newPriceListItem = document.createElement('li');
    // newPriceListItem.textContent = "First Aid - $50"; 
    newPriceListItem.textContent = `${name} - $${price}`;
    priceLists.forEach(priceList => {
        priceList.appendChild(newPriceListItem)
    });
};

addPriceListItem("First Aid", 50);


const newH4 = document.createElement('h4');
newH4.textContent = "Saving Lives, One Beat at a Time!";
newH4.className = 'h4footer';
newH4.style.color = 'orange';
//   document.body.appendChild(newH4);


const footer = document.querySelector('footer');

if (footer) {
    footer.appendChild(newH4);
} else {
    const newFooter = document.createElement('footer');
    newFooter.appendChild(newH4);
    document.body.appendChild(newFooter);
};


const cardContainerEl = document.getElementById('cardcontainer');
cardContainerEl.style.height = '50%';
cardContainerEl.style.width = '50%';


const navEl = document.getElementById('nav');
navEl.style.border = '3px solid white';
navEl.classList.add('flex-around');
navEl.style.color = 'white';

const priceCards = document.querySelectorAll('.cards');
priceCards.forEach(card => {
    card.style.width = '100px';
    card.style.border = 'var(--text-color)';
});

const buttonEl = document.getElementById('button');
buttonEl.style.padding = '30px';

const cards = document.querySelectorAll('.cards')
for (let i = 0; i < cards.length; i++) {
    const li = cards[i].querySelector('li');
    if (li && li.textContent === "Infant CPR/AED - $50") {
        const newList = cards[i].querySelectorAll('li');
        newList.forEach((dogCpr) => {
            dogCpr.textContent = "Doggy CPR - $50";
        });
    }
}

const listEls = document.querySelectorAll('li');
listEls.forEach(el => {
    el.style.fontWeight = 'bold';
    el.style.textAlign = 'left';
});


const newDiv = document.createElement('div');
const newUl = document.createElement('ul');
newDiv.appendChild(newUl);

for (let i = 0; i < 2; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = `New Item ${i + 1}`;
    newUl.appendChild(newLi);
};
cardContainerEl.appendChild(newDiv);
