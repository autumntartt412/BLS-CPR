const minLength = 1;
const maxLength = 20;
const nameReg = /^[a-zA-Z\s]+$/;
const emailMinLength = 3;
const emailMaxLength = 30;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formEl = document.getElementById('form');
// const firstName = form.querySelectorAll['firstname'];
// const lastName = form.querySelectorAll['lastname'];
// const email = form.querySelectorAll['email'];

// const firstName = form.name.querySelectorAll('firstname').value;
// const lastName = form.name('lastname').value;
// const email = form.querySelectorAll('email').value;

const firstName = formEl.querySelector('input[name="firstname"]').value;
const lastName = formEl.querySelector('input[name="lastname"]').value;
const email = formEl.querySelector('input[name="email"]').value;


// const cardContainerEl = document.selectElementById('cardcontainer');
// cardContainerEl.style.height = '50%';
// cardContainerEl.style.width = '50%';


// const navEl = document.selectElementById('nav');
// navEl.style.border = '5px white';
// navEl.classList.add('flex-around');
// navEl.style.textContent = 'white';

// const priceCards = document.querySelectorAll('.cards');
// priceCards.style.width = '100px';
// priceCards.style.border = 'var(--text-color)';


// const buttonEl = document.selectElementById('button');
// buttonEl.style.padding = '30px';


// for (let i = 0; i < cards.length; i++) {
//     const li = cards[i].querySelector("li");
//     if (li && li.textContent === "Infant CPR/AED - $50") {
//         const newList = cards[i].querySelectorAll("li");
//         newList.forEach((dogCpr) => {
//             dogCpr.textContent = "Doggy CPR - $50";
//         });
//     }
// }

// const listEls = document.querySelectorAll('li');
// listEls.forEach(el => {
//     el.style.fontWeight = 'bold';
//     el.style.alignContent = 'left';
// });


// const ul = document.li;
// appendChild(document.createElement('div'));
// appendChild(document.createElement('ul'));

// for (let i = 0; i < 2; i++) {
//     ul.appendChild.createElement('li')
// };


 


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





function isFirstNameValidLength(firstName, minLength, maxLength) {

    // let firstname = "";

            if (firstName.length >= minLength && firstName.length <= maxLength) {
                console.log('First name is valid!');
                return true;
            } else {
                
                errorMessage(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long.`);
                return false;
            }
        }

    isFirstNameValidLength(""); 




function validFirstName(firstName) {
    // let firstName = "";

    if (!nameReg.test(firstName)) {
        
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
function isLastNameValidLength(lastName, minLength, maxLength) {
    // let lastname = "";
    if (lastName.length === 0) {
        message(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long.`);
        return false;
    }

    if (lastName.length >= minLength && lastName.length <= maxLength) {
        message('Last name is valid!');
        return true;
    } 
};
        
isLastNameValidLength("");


        
    





function validLastName(lastName) {
    // let lastName = "";
    if (!nameReg.test(lastName)) {
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

    if (email.length >= emailMinLength && email.length <= emailMaxLength) {
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

    formEl.addEventListener('submit', validateLogin);
    e.preventDefault('form');
    console.log('form');
    console.log('Sign up button clicked.');


validateCprFormOnSubmit();


// const formData = new FormData(document.getElementById('submit'));
// const data = {};

// formData.forEach((value, key) => {
//     data[key] = value;
// });


// const priceList = document.querySelectorAll('pricelist');
// let newPriceListItem = document.createElement('li');
// newPriceListItem.textContent = "First Aid - $50";
// priceList.appendChild(newPriceListItem);


// addPriceListItem("First Aid", 50);


  const newH4 = document.createElement('h4');
  newH4.textContent = 'Saving Lives, One Beat at a Time!';
  newH4.className = 'h4footer'; 
  newH4.style.color = 'orange'; 
  document.body.appendChild(newH4);

  
  const footer = document.querySelector('footer');
  
  if (footer) {
      footer.appendChild(newH4);

  } else {
     
      const newFooter = document.createElement('footer');
      document.body.appendChild(newFooter);
      newFooter.appendChild(newH4);
  }

  



