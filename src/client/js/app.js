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
    retrieveData(date , city);
}

/* Function to GET Project Data */
const retrieveData = async (date , city) => {
    const request = await fetch(myURL + '/GetTrip');
    try {
        // Transform into JSON
        const allData = await request.json();

        document.getElementById('grid-container').style.display = 'grid';
        // Write updated data to DOM elements
        document.getElementById('Tripdate').innerHTML = date;
        document.getElementById('lng').innerHTML = allData.GeoData.lng;
        document.getElementById('lat').innerHTML = allData.GeoData.lat;
        document.getElementById('Tripcity').innerHTML = allData.GeoData.city;
        document.getElementById('country').innerHTML = allData.GeoData.country;

        document.getElementById('description').innerHTML = allData.WbitData.description;
        document.getElementById('temp').innerHTML = allData.WbitData.temp + ' degrees';
        document.getElementById('icon').src = "../client/media/icons/"+ allData.WbitData.icon + ".png";
        
        document.getElementById('image').src = allData.imageData.image;

       
    }
    catch (error) {
        console.log("error", error);
    }
}

export { performAction ,retrieveData};
