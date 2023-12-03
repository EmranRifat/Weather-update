const API_KEY=`9b08c8e3db8e32d07a2653c8c721eded`;

const localTemparature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))

}

const displayTemperature=data=>{
    const temperature=document.getElementById("temperature");
    temperature.innerText=data.main.temp;
    
    document.getElementById('cloud').innerText=data.weather[0].main;
    
}

const citySearch=()=>{
    const searchText=document.getElementById("search-field");
    const city=searchText.value;
    document.getElementById("city").innerText=city;
    localTemparature(city)

}

// localTemparature('dhaka');