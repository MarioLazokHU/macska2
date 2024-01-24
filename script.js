document.addEventListener('DOMContentLoaded', function() {
    
    let textInput = document.getElementById('textInput');
    let button = document.querySelector('.pink');

   
    button.addEventListener('click', function() {
        
        let inputValue = textInput.value.trim(); 

        if (inputValue === '') {
            
            alert('Kérlek, írj valamit a beviteli mezőbe!');
        } else {
            
            let container = document.querySelector('.container');
            let newParagraph = document.createElement('p');
            newParagraph.textContent = inputValue;
            container.appendChild(newParagraph);

            
            textInput.value = '';
        }
    });
});