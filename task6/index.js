// const finishList = () => {
    let ulElem = document.querySelector('.list');
    let liElem1 = document.createElement('li');
    let liElem2 = document.createElement('li');
    let liElem3 = document.createElement('li');
    let liElem4 = document.createElement('li');
    liElem1.textContent = '1';
    liElem2.textContent = '8';
    liElem3.textContent = '4';
    liElem4.textContent = '6';
    
    liElem1.append(ulElem)
// }