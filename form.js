import "form.css";

 
const minlength = 1;
const maxlength = 50;
const nameReg = /^[a-zA-Z\s]+$/;
const emailMinlength = 3;
const emailMaxlength = 30;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.getElementById('form');
const firstName = form.elements['firstname'];
const lastName = form.elements['lastname'];
const email = form.elements['email'];
// const firstName = form.querySelectorAll('firstName').value;
// const lastName = form.querySelectorAll('lastName').value;
// const email = form.querySelectorAll('email').value;


const cardContainerEl = document.selectElementById('cardcontainer');
cardContainerEl.style.height = '50%';
cardContainerEl.style.width = '50%';


const navEl = document.selectElementById('nav');
navEl.style.border = '5px white';
navEl.classList.add('flex-around');
navEl.style.textContent = 'white';

const priceCards = document.querySelectorAll('.cards');
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

for (let i = 0; i < 2; i++) {
    ul.appendChild.createElement('li')
};

// function showAlert(alert) {
//     errorAlert = "";
// }
 


// error message

const errorDiv = document.getElementById('message');
function errorMessage(message) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
    
}

errorMessage(message);

function hideMessage() {
    errorDiv.style.display = 'none';
};


hideMessage();

setTimeout(hideMessage, 5000);





function isFirstNameValidLength(firstname, minLength, maxLength) {

    // let firstname = "";

            if (firstname.length >= minLength && firstname.length <= maxLength) {
                console.log('First name is valid!');
                return true;
            } else {
                
                errorMessage(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long.`);
                return false;
            }
        }

    isFirstNameValidLength(""); 




function validFirstName(firstname) {
    // let firstName = "";

    if (!nameReg.test(firstname)) {
        
    errorMessage('Please enter a valid first name.');
        return false;
    }
    return true;
};

validFirstName("");
    

function firstNameEmptySpace(firstName) {
    if (firstName === "") {
        message('Please enter a valid first name.');
        return false;
    }
    return true;
};

firstNameEmptySpace("");





//last name
function isLastNameValidLength(lastname, minLength, maxLength) {
    // let lastname = "";
    if (lastname.length === 0) {
        message(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long.`);
        return false;
    }

    if (lastname.length >= minLength && lastname.length <= maxLength) {
        message('Last name is valid!');
        return true;
    } 
};
        
isLastNameValidLength("");


        
    





function validLastName(lastname) {
    // let lastName = "";
    if (!nameReg.test(lastname)) {
        message('Please enter a valid last name.'); 
        return false;
    }
    console.log('Last name is valid!');
    return true;
};

validLastName(""); 


function lastNameEmptySpace(lastName) {
    if (lastName === "") {
        message('Please enter a valid last name.'); 
        return false;
    }
    console.log('Last name is valid!');
    return true;
};


lastNameEmptySpace("");
    


//email

function isEmailValidLength(email, emailMinLength, emailMaxLength) {
    // let email = "";

    if (email.length >= emailMinlength && email.length <= emailMaxlength) {
        message('Email is valid!');
        return true;

    } else {
        if (email.length === 0)
        message(`Your email must be greater than ${emailMinLength} and less than ${emailMaxLength} characters long.`);
            return false;
    }
};

isEmailValidLength("");








function validatePattern(email) {
    if (!emailReg.test(email)) {
        message('Please enter a valid email'); 
        return false;
    } else {
        console.log('Valid email!');
        return true;
}
};

validatePattern("");




function validateEmail(email) {
    // let email = "";


    if (!emailReg.test(email)) {
        message('Please enter a valid email'); 
        return false;
    }
    console.log('Valid email!');
    return true; 
};

validateEmail("");





function emailEmptySpace(email) {
    if (email === "") {
        message('Please enter a valid email'); 
        return false;

    }
    console.log('Email is valid!');
    return true;
}

emailEmptySpace("");

//Submit

function validateCprFormOnSubmit(e) {
    e.preventDefault();
    const firstName = firstName.value;
    const lastName = lastName.value;
    const email = email.value;

}

    form.addEventListener('submit', validateCprFormOnSubmit);
    e.preventDefault('form');
    console.log('form');
    console.log('Sign up button clicked.');


validateCprFormOnSubmit();


const formData = new FormData(document.getElementById('submit'));
const data = {};

formData.forEach((value, key) => {
    data[key] = value;
});


let window;

function newWindow() {
  window = window.open(
    "file:///C:/Users/tseh/Documents/Perscholas/SBADomManipulation/form.html?firstname=&lastname=&email=",
    "form",
    `width=${availW * 0.75}, height=${availH * 0.75}, left=${
      availW * 0.125
    }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
  );
  window.focus();
}
newWindow(window);

function closeWindow() {
  window.close();
}
closeWindow();

document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document
  .getElementById("closeWindowBtn")
  .addEventListener("click", closeWindow);

 
 
 
 
  const newH4 = document.createElement('h4');
  newH4.textContent = 'Saving Lives, One Beat at a Time!';
  newH4.className = 'h4footer'; 
  newH4.style.color = 'orange'; 
  document.body.appendChild('footer');

  
  const footer = document.querySelector('footer');
  
  if (footer) {
      footer.appendChild(newH4);

  } else {
     
      const newFooter = document.createElement('footer');
      document.body.appendChild(newFooter);
      newFooter.appendChild(newH4);
  }


// const priceList = document.getElementById('pricelist');
// let newPriceListItem = document.createElement('li');
// newPriceListItem.textContent = "First Aid - $50";
// priceList.appendChild(newPriceListItem);