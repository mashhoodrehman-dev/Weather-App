const api = "45d7107c1f068b120905384f278110cd"

const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const description = document.getElementById("description")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    try {
        const res = await fetch(url)

        if(!res.ok) {
            throw new Error("City not Found")
        }
        const data = await res.json()
        cityName.textContent = `City: ${data.name}, ${data.sys.country}`,
        temp.textContent = `Temperature: ${data.main.temp}`,
        description.textContent = `Description: ${data.weather.map((d) => d.description)}`,
        humidity.textContent = `Humidity: ${data.main.humidity}`,
        wind.textContent =`Wind: ${data.wind.speed}`,
        console.log(data)

    } catch(err) {      
        console.log("error in getWeater function", err)
    }

}

searchBtn.addEventListener("click",() => {
    const city = cityInput.value.trim()
    if(city) {
        getWeather(city)
    }
})
