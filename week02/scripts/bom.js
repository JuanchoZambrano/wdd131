const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// ------------------------

let counter = 0;

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        if (counter < 10) {
            const li = document.createElement('li');
            li.textContent = input.value;
            const delButton = document.createElement('button');
            delButton.textContent = '❌';
            delButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
                counter--;
            });
            li.appendChild(delButton);
            list.appendChild(li);
            input.value = '';
            input.focus();
            counter++;
        } else {
            alert('You can only add up to 10 chapters.');
        }
    } else {
        alert('Please enter a chapter name.');
    }
});