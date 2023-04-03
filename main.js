const url='https://api.openweathermap.org/data/2.5/'
const key='c779ffd58f6e91de8f67a822f3751c02'

const setQuery = (e) => { 
      if(e.keyCode=='13')    { 

        getResult(searchBar.value) 
        
      }                  
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr` 
    fetch(query) 
    .then(weather => {          
        return weather.json()
    })
    .then(displayResult) 
}
    const displayResult = (result) => { 
        
        let city = document.querySelector('.city') 
        city.innerText = `${result.name},${result.sys.country}`
        
        let temp = document.querySelector('.temp')
        temp.innerText = `${Math.round(result.main.temp)} °C`

        let desc =  document.querySelector('.desc')
        desc.innerText = result.weather[0].description

        let maxMin = document.querySelector('.minmax')
        maxMin.innerText = `Max : ${Math.round(result.main.temp_max)} °C 
        Min : ${Math.round(result.main.temp_min)} °C`

        let humidity  = document.querySelector('.humidity')
        humidity.innerText = `Nem Orani : %${result.main.humidity}`
    }

const searchBar = document.getElementById('searchBar') 
searchBar.addEventListener('keypress',setQuery) 
