const api_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/noida?key=4F5UJPBN3FA7KA3VU8S75TWHZ"
var min = document.getElementById("min");
var max = document.getElementById("max");
var currentTemp = document.getElementById("temp");
var weatherType = document.getElementById("weather");
async function getApiData(url)
{
    try
    {
        var data = await fetch(url);
        var res = await data.json();
        displayAPIData(res);
    }
    catch(err)
    {
        console.log("There is some error");
    }
}
function displayAPIData(data)
{
    document.getElementById("LocationName").innerText = data.resolvedAddress;
    var selectList = document.createElement("Date");
    var daysTempData = data.days;
    currentTemp.innerText = `${daysTempData[0].temp} C`;
    weatherType.innerText = `${daysTempData[0].conditions}`;
    min.innerText = `${daysTempData[0].tempmin} C /`;
    max.innerText = `${daysTempData[0].tempmax} C`;
    addDatesToDropDown(data , selectList , daysTempData);
}

function addDatesToDropDown(data , selectList , daysTempData)
{
    var datesList = [];
    for (var dayTempData of daysTempData){
        datesList.push(dayTempData.datetime);
    }
   
    selectList.id = "Date";
    
    for (var i = 0; i < datesList.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = datesList[i];
        selectList.appendChild(option);
        document.getElementById('Date').appendChild(option);
    }
}

function handleForm()
{
    document.getElementById
}

function updateWeatherInfo(daysTempData, index)
{
    currentTemp.innerText = `${daysTempData[index].temp} C`;
    weatherType.innerText = `${daysTempData[index].conditions}`;
    min.innerText = `${daysTempData[index].tempmin} C /`;
    max.innerText = `${daysTempData[index].tempmax} C`;
}
getApiData(api_url);