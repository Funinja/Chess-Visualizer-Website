const coordinateForm = document.querySelector('form');
const coordinate = document.querySelector('#coordinate');
const button = document.getElementById('generator');

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

coordinateForm.addEventListener('click', (event) => {
    event.preventDefault();

    var column = Math.floor(Math.random() * 8);
    var row = Math.floor(Math.random() * 8) + 1;
    var text = alphabet[column] + row.toString();
    coordinate.textContent = text;

    if (column == 0){
        playText("a-" + row.toString());
        // playText(text);
    }else{
        playText(text);
    }
    
})

function playText(text){
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 3;
    // utterance.addEventListener('end', () => {
    //     button.disabled = false;
    // })
    // button.disabled = true;
    speechSynthesis.speak(utterance);
}