export const finishList = () => {
    let ulElem = document.querySelector('.list');
    let special = document.querySelector('.special');
    
    let liElem1 = document.createElement('li');
    let liElem2 = document.createElement('li');
    let liElem3 = document.createElement('li');
    let liElem4 = document.createElement('li');
    liElem1.textContent = '1';
    liElem2.textContent = '8';
    liElem3.textContent = '4';
    liElem4.textContent = '6';
    
    ulElem.prepend(liElem1);
    ulElem.append(liElem2);
    special.before(liElem3);
    special.after(liElem4);
}