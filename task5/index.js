export const setButton = (buttonText) => {
  let bodyElem = document.querySelector('body');
  bodyElem.innerHTML = `<button>${buttonText}</button>`
//   bodyElem.textContent = '<button>button text</button>'
 
}