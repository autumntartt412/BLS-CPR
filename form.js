// footer
function addFooter() {
let newH4 = document.createElement('h4');
newH4.textContent = "Saving Lives One Beat at a Time!";
newH4.className = 'h4footer';
newH4.style.color = 'red';
newH4.style.marginTop = '5px';
newH4.style.textAlign = 'center';
newH4.style.fontSize = '30px';
const footer = document.querySelector('footer');
footer.appendChild(newH4);

if (footer) {
    footer.appendChild(newH4);
} else {
    const newFooter = document.createElement('footer');
    newFooter.appendChild(newH4);
    document.body.appendChild(newFooter);
    };
};

addFooter();

const cards = document.querySelectorAll('.cards')
for (let i = 0; i < cards.length; i++) {
    const li = cards[i].querySelector('li');
    if (li && li.textContent === "Infant CPR/AED - $50") {
        const newList = cards[i].querySelectorAll('li');
        newList.forEach((dogCpr) => {
            // newList = "Doggy CPR - $50";
            dogCpr.textContent = "Doggy CPR - $50";
        });
    }
}

const listEls = document.querySelectorAll('li');
listEls.forEach(el => {
    el.style.fontWeight = 'bold';
    el.style.textAlign = 'left';
});

const priceLists = document.querySelectorAll('.pricelist');
function addPriceListItem(name, price) {
    let newPriceListItem = document.createElement('li');
    // newPriceListItem =  "First Aid - $50"; 
    newPriceListItem.textContent = `${name} - $${price}`;
    priceLists.forEach(priceList => {
        priceList.appendChild(newPriceListItem.cloneNode(true));
        newPriceListItem.style.color = 'red';
        newPriceListItem.style.fontWeight = 'bold';
        newPriceListItem.style.textAlign = 'left';
    });
};

addPriceListItem("First Aid", 50);


//form
const formEl = document.getElementById('form');

function validateForm(e) {
    e.preventDefault();
const firstName = document.getElementById('firstname').value.trim();
const lastName = document.getElementById('lastname').value.trim();
const email = document.getElementById('email').value.trim();
errorMessage.textContent = "";
errorMessage.style.display = 'none';

    isValid = true;
   
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        errorMessage.textContent = "First name must only contain letters.\n";
      
        return false;
    };
    
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        errorMessage.textContent = "Last name must only contain letters.\n";
      
        return false;
    };
    
    if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage.textContent = "Please enter a valid email address";
  
        return false;
    };

    if(!isValid) {
        errorMessage.style.display = 'block';
    } else {
        document.getElementById('form-message').textContent = "Submitted!";
        document.getElementById('form-message').style.color = 'green';
    }
     
    return false;
}
    console.log('form');
    console.log("Sign up button clicked.");

    errorMessage.innerHTML = "";

    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);

formEl.addEventListener('submit', function (e)  {
    e.preventDefault();

 
if (validateForm()) {
    errorMessage.textContent = "Form submitted.";
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'green';
} else {
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'red'
};
});

function hideMessage() {
    errorMessage.style.display = 'none';
};
setTimeout(hideMessage, 5000);

// ******spent alot of time working on validations but there were many errors******
const minLength = 1;
const maxLength = 20;
const nameReg = /^[a-zA-Z\s]+$/;
const emailMinLength = 3;
const emailMaxLength = 30;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function isFirstNameValidLength(firstName, minLength, maxLength) {
//     if (firstName.length >= minLength && firstName.length <= maxLength) {
//         console.log("First name is valid!");
//         return true;
//     } else {
//         errorMessage(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long.`);
//         return false;
//     }
// }
// function validFirstName(firstName) {
//     if (!nameReg.test(firstName)) {
//         errorMessage("Please enter a valid first name.");
//         return false;
//     }
//     return true;
// };
// function firstNameEmptySpace(firstName) {
//     if (firstName === "") {
//         errorMessage("Please enter a valid first name.");
//         return false;
//     }
//     return true;
// };
// firstNameEmptySpace("");
// //last name
// function isLastNameValidLength(lastName, minLength, maxLength) {
//     if (lastName.length === 0) {
//         errorMessage(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long.`);
//         return false;
//     }
//     if (lastName.length >= minLength && lastName.length <= maxLength) {
//         errorMessage("Last name is valid!");
//         return true;
//     }
// };
// function validLastName(lastName) {
//     if (!nameReg.test(lastName)) {
//         errorMessage("Please enter a valid last name.");
//         return false;
//     }
//     console.log("Last name is valid!");
//     return true;
// };
// function lastNameEmptySpace(lastName) {
//     if (lastName === "") {
//         errorMessage("Please enter a valid last name.");
//         return false;
//     }
//     console.log("Last name is valid!");
//     return true;
// };
// //email
// function isEmailValidLength(email, emailMinLength, emailMaxLength) {
//     if (email.length >= emailMinLength && email.length <= emailMaxLength) {
//         errorMessage("Email is valid!");
//         return true;
//     } else {
//         if (email.length === 0)
//             errorMessage(`Your email must be greater than ${emailMinLength} and less than ${emailMaxLength} characters long.`);
//         return false;
//     }
// };
// function validatePattern(email) {
//     if (!emailReg.test(email)) {
//         errorMessage("Please enter a valid email");
//         return false;
//     } else {
//         console.log("Valid email!");
//         return true;
//     }
// };
// function validateEmail(email) {
//     if (!emailReg.test(email)) {
//         errorMessage("Please enter a valid email");
//         return false;
//     }
//     console.log("Valid email!");
//     return true;
// };
// function emailEmptySpace(email) {
//     if (email === "") {
//         errorMessage("Please enter a valid email");
//         return false;
//     }
//     console.log("Email is valid!");
//     return true;
// }





