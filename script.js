const API_KEY = 'b643e5fc87a646d3bba151759240602'
const BASE_URL = 'http://api.weatherapi.com/v1/current.json'

const PEXEL_KEY = '7g3k93KknvgVzZvenNgso16yiZtR0xlO4IZZEW0II3Ljh6oskXgGD0Uo'
const PEXEL_URL = 'https://api.pexels.com/v1/search'

const city = document.querySelector('#city')
const searchBtn = document.querySelector('.search')

const card = document.querySelector('.card')

async function getWeatherAndPicture(){
    card.innerHTML = ''

    const reqW = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city.value}`)
    const resW = await reqW.json()
    
    const temp = document.createElement('p')
    temp.innerHTML = resW.current.temp_c+' c°'

    card.append(temp)

    const reqP = await fetch(`https://api.pexels.com/v1/search?query=${city.value}`, {
        headers:{
            "Authorization":PEXEL_KEY
        }
    })
    const resP = await reqP.json()

    const bgImage = document.querySelector('img')
   
    bgImage.src = resP.photos[0].src.original

    
}

searchBtn.addEventListener('click', getWeatherAndPicture)
