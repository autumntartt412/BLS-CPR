
    const minlength = 1;
    const maxlength = 50;
    const nameReg  = '/^[a-zA-Z\s]+$/';
    const emailMinlength = 3;
    const emailMaxlength = 30;
    const emailReg = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';

    //first name
function  isFirstNameValidLength(firstname) {
    let firstname = "";
    
    if (firstname.length >= minlength && firstname.length <= maxlength) {
        return true;
   
    }else {
        if (firstname == !isFirstNameValidLength.length) 
    return false;
console.log(eMessage(`Your first name must be greater than ${minLength} and less than ${maxLength} characters long., e`));  

}};

function validFirstName(firstname) {
    let firstName = "";
    if ( firstname == !nameReg) {
           return false;
        }
        console.log(eMessage('Please enter a valid first name., e')); 
};

function firstNameEmptySpace(firstName) {
    if (firstName === "") {
        return false;   
    }
    console.log(eMessage('Please enter a valid last name., e')); 
};


//last name
function  isLastNameValidLength(lastname) {
    let lastname = "";
    
    if (lastname.length >= minlength && lastname.length <= maxlength) {
        return true;
   
    }else {
        if (lastname = !isLastNameValidLength.length) 
    return false;
console.log(eMessage(`Your last name must be greater than ${minLength} and less than ${maxLength} characters long., e`));  

}};

function validLastName(lastname) {
    let lastName = "";
    if ( lastname == !nameReg) {
         
            return false;
    }
        console.log(eMessage('Please enter a valid last name., e')); 
    };


function lastNameEmptySpace(lastName) {
    if (lastName === "") {
        return false;    
    }
    console.log(eMessage('Please enter a valid last name., e')); 
};


//email

function  isEmailValidLength(email) {
    let email = "";
    
    if (email.length >= emailMinlength && email.length <= emailMaxlength) {
        return true;
   
    }else {
        if (email = !isEmailValidLength.length) 
    return false;
        console.log(eMessage(`Your email must be greater than ${emailMinLength} and less than ${emailMaxLength} characters long., e`));  

}};





function validateEmail(email) {
    let email = "";

        if (email == !emailReg) {
             
                return false;
        }
            console.log(eMessage('Please enter a valid email., e')); 
        };



function emailEmptySpace(email) {
    if (email === "") {
        return false; 
        
    }
    console.log(eMessage('Please enter a valid email., e')); 
}

