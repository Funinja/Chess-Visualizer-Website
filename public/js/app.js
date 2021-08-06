const coordinateForm = document.querySelector('form');
const coordinate = document.querySelector('#coordinate');

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

coordinateForm.addEventListener('click', (event) => {
    event.preventDefault();

    var column = Math.floor(Math.random() * 8);
    var row = Math.floor(Math.random() * 8) + 1;
    coordinate.textContent = alphabet[column] + row.toString();
})