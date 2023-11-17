let blockedHost = ["www.youtube.com", "www.tynker.com", ""]; //Blocked sites (Using the site host)
let blockedHref = ["L", "M"] //Blocked sites (Using the site href)

//Checking and blocking site.
for(let i = 0; i < blockedHost.length; i++){
    if(location.host == blockedHost[i]){
        notify("Blocked " + blockedHost[i]);
        
        //Create Block window
        let win = window.open()
        win.document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Blocked</title></head> <body><style>html, body {margin: 0px;background: #354}div {padding: 35px;background: lightgreen; margin-top: 80px; margin-bottom: 12px; text-align: center;}</style><div><h1>Blocked</h1><p>Reason: </p></div><script></script></body></html>")
    }
}

for(let i = 0; i < blockedHref.length; i++){
    if(location.href == blockedHref[i]){
        notify("Blocked " + blockedHref[i]);
        
        //Create Block Window
        let win = window.open()
        win.document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Blocked</title></head> <body><style>html, body {margin: 0px;background: #354}div {padding: 35px;background: lightgreen; margin-top: 80px; margin-bottom: 12px; text-align: center;}</style><div><h1>Blocked</h1><p>Reason: </p></div><script></script></body></html>")
    }
}
