async function getApiData(city)
{
    api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=4F5UJPBN3FA7KA3VU8S75TWHZ`
    try
    {
        const data = await fetch(api_url)
        const res = await data.json()
        document.getElementById("city").innerText = res.resolvedAddress
        dispCurrentData(res)
        dispDateData(res.days)
        document.getElementsByClassName('disp-loader')[0].style.display="none"
        const datafields = document.getElementsByClassName('disp-data')
        for(let i = 0; i < datafields.length; i++){
            datafields[i].style.display = "block";
        }
    }
    catch(err)
    {
        console.error("Incorrect City");
    }
}

const onload = () => {
    getcitydata('noida')
}

const dispCurrentData = (data) => {
    document.getElementById('cloudcover').innerText = data.currentConditions.cloudcover
    document.getElementById('conditions').innerText = data.currentConditions.conditions
    document.getElementById('description').innerText = data.description
    document.getElementById('temp').innerText = `${data.currentConditions.temp}℉ / ${getCelcius(data.currentConditions.temp)}℃`
    document.getElementById('feelslike').innerText = `${data.currentConditions.feelslike}℉ / ${getCelcius(data.currentConditions.feelslike)}℃`
    document.getElementById('windspeed').innerText = data.currentConditions.windspeed
    document.getElementById('uvindex').innerText = data.currentConditions.uvindex
    document.getElementById('visibility').innerText = data.currentConditions.visibility
    document.getElementById('sunrise').innerText = data.currentConditions.sunrise
    document.getElementById('sunset').innerText = data.currentConditions.sunset
}

const dispDateData = (data) => {
    let objDateTr = document.getElementById('objDateTr')
    let objMinTr = document.getElementById('objMinTr')
    let objMaxTr = document.getElementById('objMaxTr')
    let objSunriseTr = document.getElementById('objSunriseTr')
    let objSunsetTr = document.getElementById('objSunsetTr')

    objDateTr.innerHTML = ""
    objMinTr.innerHTML = ""
    objMaxTr.innerHTML = ""
    objSunriseTr.innerHTML = ""    
    objSunsetTr.innerHTML = ""

    let objDateTh = document.createElement('th')
    objDateTh.innerText = "Date"
    objDateTr.appendChild(objDateTh)
    
    let objMinTh = document.createElement('th')
    objMinTh.innerText = "Minimum Temprature"
    objMinTr.appendChild(objMinTh)
    
    let objMaxTh = document.createElement('th')
    objMaxTh.innerText = "Maximum  Temprature"
    objMaxTr.appendChild(objMaxTh)
            
    let objSunriseTh = document.createElement('th')
    objSunriseTh.innerText = "Sunrise"
    objSunriseTr.appendChild(objSunriseTh)
            
    let objSunsetTh = document.createElement('th')
    objSunsetTh.innerText = "Sunset"
    objSunsetTr.appendChild(objSunsetTh)
    console.log(data)
    data.forEach(d => {
        hourStr = "Time : Temp - Feels like \n"
        d.hours.forEach(h => {
            hourStr += `${h.datetime.split(":")[0]} : ${h.temp}℉ / ${getCelcius(h.temp)}℃ - ${h.feelslike}℉ / ${getCelcius(h.feelslike)}℃\n`
        })

        let objDateTd = document.createElement('td')
        objDateTd.innerText = d.datetime
        objDateTd.title = hourStr
        objDateTd.style.cursor = "pointer"
        objDateTr.appendChild(objDateTd)
        
        let objMinTd = document.createElement('td')
        objMinTd.innerText = `${d.tempmin}℉ / ${getCelcius(d.tempmin)}℃`
        objMinTd.title = "Minimum Temprature"
        objMinTd.style.cursor = "pointer"
        objMinTr.appendChild(objMinTd)
        
        let objMaxTd = document.createElement('td')
        objMaxTd.innerText = `${d.tempmax}℉ / ${getCelcius(d.tempmax)}℃`
        objMaxTd.title = "Maximum Temprature"
        objMaxTd.style.cursor = "pointer"
        objMaxTr.appendChild(objMaxTd)
                
        let objSunriseTd = document.createElement('td')
        objSunriseTd.innerText = d.sunrise
        objSunriseTd.title = "Sunrise"
        objSunriseTd.style.cursor = "pointer"
        objSunriseTr.appendChild(objSunriseTd)
                
        let objSunsetTd = document.createElement('td')
        objSunsetTd.innerText = d.sunset
        objSunsetTd.title = "Sunset"
        objSunsetTd.style.cursor = "pointer"
        objSunsetTr.appendChild(objSunsetTd)
    });
    
}

const getCelcius = (far) => {
    return ((far - 32) * 5/9).toFixed(2);
}

const getcitydata = (city) => {
    document.getElementsByClassName('disp-loader')[0].style.display="block"
    const datafields = document.getElementsByClassName('disp-data')
    for(let i = 0; i < datafields.length; i++){
        datafields[i].style.display = "none";
    }
    getApiData(city)
}