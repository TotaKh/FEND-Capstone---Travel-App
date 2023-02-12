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
    retrieveData(date);
}

/* Function to GET Project Data */
const retrieveData = async (date) => {
    const request = await fetch(myURL + '/GetTrip');
    try {
        // Transform into JSON
        const allData = await request.json()
        // Write updated data to DOM elements
        document.getElementById("date").innerHTML = date;
        document.getElementById('lng').innerHTML = allData.GeoData.lng;
        document.getElementById('lat').innerHTML = allData.GeoData.lat;
        document.getElementById('city').innerHTML = allData.GeoData.city;
        document.getElementById('country').innerHTML = allData.GeoData.country;

        document.getElementById('description').innerHTML = allData.WbitData.description;
        document.getElementById('temp').innerHTML = allData.WbitData.temp + ' degrees';
        document.getElementById('icon').innerHTML = allData.WbitData.icon;

        document.getElementById('image').setAttribute.src = allData.imageData.image;

       
    }
    catch (error) {
        console.log("error", error);
    }
}

export { performAction ,retrieveData};
