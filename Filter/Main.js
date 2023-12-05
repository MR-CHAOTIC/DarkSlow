/*
    DarkSlow 2023-2024
*/



//Ask for Notifications.
Notification.requestPermission().then(function (permission){
    console.log(permission);
});

//Making Notifications easy to make.
function notify(d){
    //Makes real notifacation
    let r = "Notifacation from: " + location.host;
    let v = new Notification(d, { r,});
}



//Blocking sites as a hole
let blocked_host = ["", "", ""]; //Blocked sites (Using the site host)
let blocked_href = ["", "", ""]; //Blocked sites (Using the site href)
let reason = "<Organizations web-rules>";

//Settings
//Setting go off ture:false basis.
let block_inappropriate_embeds = true;
let block_inappropriate_images = false; 


//Checking and blocking site.
for(let i = 0; i < blocked_host.length; i++){
    if(location.host == blocked_host[i]){
        notify("Blocked " + blocked_host[i]);
        
        //Create Block window
        window.location.href = "<Page Change>";
        let win = window.open();
        win.document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Blocked</title></head> <body><style>html, body {margin: 0px;background: #354}div {padding: 35px;background: lightgreen; margin-top: 80px; margin-bottom: 12px; text-align: center;}</style><div><h1>Blocked</h1><p>Reason:" + reason + "</p></div><script></script></body></html>");
    }
}

for(let i = 0; i < blocked_href.length; i++){
    if(location.href == blocked_href[i]){
        notify("Blocked " + blocked_href[i]);
        
        //Create Block Window
        window.location.href = "<Page Change>";
        let win = window.open();                                                                                         //Page Css
        win.document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Blocked</title></head> <body><style>html, body {margin: 0px;background: #354}div {padding: 35px;background: lightgreen; margin-top: 80px; margin-bottom: 12px; text-align: center;}</style><div><h1>Blocked</h1><p>Reason:" + reason +" </p></div><script></script></body></html>");
    }
}


//Block In-Page content instead of the whole site
(function(){
    if(block_inappropriate_images == true){
        //Still in works
    };
    
    if(block_inappropriate_embeds === true){
        let embed = document.getElementsByTagName("iframe"); //Get embeds
        
        for(let i = 0; i < embed.length; i++){
            let reEmbed = embed[i].src; //Decalre there source
            embed[i].src = reEmbed.replace(blocked_host[i], "_Blocked_"); //Replace or block embed's content
        };
    };
}) ();
