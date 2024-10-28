import "window.css";

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