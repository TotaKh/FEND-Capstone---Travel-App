

const GeoName = async (city ,myURL) => {
    const res = await fetch(`http://api.geonames.org/searchJSON?maxRows=10&operator=OR&q=${city}&name=${city}&username=taghreedkh`)
        .then(response => response.json())

    let data = {
        lng: res.geonames[0].lng,
        lat: res.geonames[0].lat,
        country: res.geonames[0].countryName,
        city: res.geonames[0].name,
    }

    await fetch(myURL + '/GeoName', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export{GeoName}