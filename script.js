// Get the button element
let button = document.querySelector('.pink');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Change the text content based on the current text
    if (button.textContent === 'Macska szar') {
        button.textContent = 'Kutya szar';
    } else {
        button.textContent = 'Macska szar';
    }
});
