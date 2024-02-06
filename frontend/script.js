document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('button');
    const dataContainer = document.getElementById('dataContainer');
    const datePicker = document.getElementById('datePicker');

    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    datePicker.value = today;

    
    function fetchData() {
        let date = datePicker.value;

        if (date) {
            var apiUrl = `https://api.nasa.gov/planetary/apod?api_key=59IQA9hsqzi09UnfMkxfHkkbKEA8OQCMg0QxgsNs&date=${date}`;
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('A lekérdezés sikertelen.');
                    }
                    return response.json();
                })
                .then(data => {
                    dataContainer.innerHTML = `
                        <h2>${data.title}</h2>
                        <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
                        <p>${data.explanation}</p>
                    `;
                })
                .catch(error => {
                    dataContainer.innerHTML = `Hiba: ${error.message}`;
                });
        } else {
            dataContainer.innerHTML = 'Válasszon ki egy dátumot.';
        }
    }

    
    fetchData();

    
    button.addEventListener('click', fetchData);
});
