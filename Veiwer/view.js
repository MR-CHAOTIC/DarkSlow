/*
    DarkSlow 2023-2024
*/

//Only works to view your own tabs right now, but where working on server capability (Pretty useless right now)

//Get View
setInterval(function () {
    let user_view = location.href; //Get Current viewed tab
    console.log(user_view); //For Tests
    //Create Views (Show in DOM)
    let view = "<iframe src='" + user_view + "' width='250' hieght='180'></iframe>";
    document.getElementById("views").innerHTML = view;
}, 10000);
