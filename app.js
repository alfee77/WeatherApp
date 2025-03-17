window.addEventListener('load', pageLoaded());

function pageLoaded() {
    let long;
    let lat;
    let boobs = 2;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let location = document.querySelector(".location");
    let dateTime = document.querySelector(".date-time");

    boobs += 1;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);

        async function success(myPosition) {
            // console.log(myPosition);
            long = myPosition.coords.longitude;
            lat = myPosition.coords.latitude;
            console.log(Date(myPosition.timestamp));

            const apicall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9220f1568b4e8b1b2fe4c044af2c541f`;

            let prom = await fetch(apicall);
            let response;

            if (prom.ok) {
                response = await prom.json();
                // console.log(prom);
                // console.log(await prom.json());
            }

            const desc = response.weather[0].description;
            const temp = Math.round(response.main.temp - 273.15);
            const loc = response.name;
            const dateTimeInfo = Date(myPosition.timestamp);            

            //set DOM Elements from the API call
            temperatureDescription.textContent = desc;
            temperatureDegree.textContent = temp;
            location.textContent = loc;
            dateTime.textContent = dateTimeInfo;
            
            console.log(location);


        }
    }
}