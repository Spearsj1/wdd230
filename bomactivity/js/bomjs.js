const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul')

button.addEventListener('click', function() {
    const liItem = document.createElement('li');
    const liButton = document.createElement('button');

    liItem.textContent = input.value;
    liButton.textContent = '❌';

    liItem.appendChild(liButton);
    list.appendChild(liItem);

    liButton.addEventListener('click', function(e){
        list.removeChild(liItem);
    })

    input.focus();
    input.value = '';
})