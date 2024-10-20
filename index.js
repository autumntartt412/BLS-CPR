import "./styles.css";
import "./dom.html";

const newDiv = documernt.createElement('div').innerHTML; 
    newDiv.id = 'header';
    newDiv.textContent = 'Don\'t Be Trife, Help Save a Life!';
    newDiv.textContent = 'var(--text-color)'
    newDiv.style.color = 'white';
    document.body.appendChild('newDiv');
    // document.getElementById('container').appendChild(newDiv);

    const cardContainerEl = document.selectElementById('cardContainer'); 

    
cardContainerEl.style.height = '50%';
// subMenuEl.style.backgroundColor = 'var(#3A6EA5)';
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


    for (let i = 0; i < priceCards.length; i++) {
        const p = priceCards[i].querySelector("p"); 
        if (p && p.textContent === "Save a Life") {
            const pgEl = priceCards[i].querySelectorAll("p");
            pgEl.forEach((pg) => {
                pg.textContent = ""; 
            });
        }
    }

    const listEls = document.querySelectorAll('li');
    listEls.forEach(el => {
        el.style.fontWeight = 'bold';
        el.style.alignContent = 'left';
    });

    const minlength = 3;
    const maxlength = 16;

  function  isValidLength(username) {
    let username = "";
    
     
        

    if (username.length >= minlength && username.length <= maxlength) {
        return true;
   
    }else {
        if (username  = !isValidLength.length) 
    return false;
console.log(eMessage(`Username must be between ${minLength} and ${maxLength} characters long.`));  

}};