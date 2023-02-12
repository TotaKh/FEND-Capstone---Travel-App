import {GeoName , Weatherbit , pixabay} from '../index'

/* Global Variables */
const myURL = 'http://localhost:8081';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;

    GeoName(city, myURL);
    Weatherbit(city, myURL);
    pixabay(city, myURL);
    //retrieveData();
}

/* Function to GET Project Data */
const retrieveData = async () => {
    const request = await fetch(myURL + '/GetTrip');
    try {
        // Transform into JSON
        const allData = await request.json()
        // Write updated data to DOM elements
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById('temp').innerHTML = Math.round(allData.temp) + ' degrees';
        document.getElementById('content').innerHTML = allData.content;
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

export { performAction ,retrieveData};
