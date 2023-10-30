const api_url = "https://jsonplaceholder.typicode.com/users1"

async function getApiData(url)
{
    try
    {
        var data = await fetch(url)
        var res = await data.json()
        displayAPIData(res)
    }
    catch(err)
    {
        console.log("There is some error");
    }
    // setTimeout(() => {
    //     fetch(url)
    // .then(data=>data.json())
    // .then(res=>{
    //     console.log(res)
    //     displayAPIData(res)

    // })
    // .catch(err=>console.log(err.message));
    // }, 3000);
}

function displayAPIData(data)
{
    console.log(data);
    for (var user of data)
    {
        let newtr = document.createElement('tr')

        let newtd1 = document.createElement('td')
        let newtd2 = document.createElement('td')
        let newtd3 = document.createElement('td')
        let newtd4 = document.createElement('td')

        newtd1.innerText = `${user.id}`
        newtd2.innerText = `${user.name}`
        newtd3.innerText = `${user.email}`
        newtd4.innerText = `${user.phone}`

        newtr.appendChild(newtd1)
        newtr.appendChild(newtd2)
        newtr.appendChild(newtd3)
        newtr.appendChild(newtd4)

        document.getElementById('myTable').appendChild(newtr)
    }
}
getApiData(api_url)