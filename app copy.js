window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const apicall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9220f1568b4e8b1b2fe4c044af2c541f`;

            
            fetch(apicall)
                  
            .then(response => {
                return response.json();
            })

            .then(data => {
                console.log(data);
                const desc = data.weather[0].description;
                const temp = data.main.temp;
                const location = data.name;

                //set DOM Elements from the API call
                temperatureDescription.textContent = desc;
                temperatureDegree.textContent = temp;
                locationTimezone.textContent = location;
                console.log(desc);



            });
        });


        
    }//if
});//load event listener

