const listItems = document.querySelectorAll('.list-item');
const list = document.querySelector('.list');

function handleClick(event) {
    const isListItem = Boolean(event.target.closest('.list-item'));
    
    if(isListItem) {
        console.log(event.target.innerHTML);
    }
}

list.addEventListener('click', handleClick);