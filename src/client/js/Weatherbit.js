const WBit_KEY='3208d44c020045c08a558ad2579733b8';

const Weatherbit = async (city ,myURL) => {
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${WBit_KEY}`)
        .then(response => response.json())

    let data = {
        temp: res.data[0].temp,
        description: res.data[0].weather.description,
        icon: res.data[0].weather.icon
    }
    await fetch(myURL + '/Wbit', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export{Weatherbit}