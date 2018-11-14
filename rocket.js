
var httpRequest = new XMLHttpRequest(); 
var countDown;


let launchDisplay = document.getElementById("launches");
let falconRequest = document.getElementById("falcon");
let launcheroneRequest = document.getElementById("launcherone");
let arianeRequest = document.getElementById("ariane");
let defaultRequest = document.getElementById("nextFive");
let Table = document.getElementById("launchRows");
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");

window.addEventListener("load",loadPage)
launchDisplay.addEventListener("load", loadPage);
falconRequest.addEventListener("click", loadFalcon);
launcheroneRequest.addEventListener("click", loadLauncherOne);
arianeRequest.addEventListener("click", loadAriane);
defaultRequest.addEventListener("click", loadLaunches);






//function that loads next five launches from API to launches Div on Load Screen 
function loadPage()
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5");
    httpRequest.send(); 
}

// function that switches to next five from falcon
 function loadFalcon()
 {
   httpRequest.open("get", " https://launchlibrary.net/1.4/launch?next=5&name=falcon");   
    httpRequest.send();
    //document.getElementById("launches".innerHTML="")
 }

// function that swithces to next launches form launcherone 
function loadLauncherOne() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=launcherone&next=5");
    httpRequest.send();
}

//function that swithces to launches from ariane
function loadAriane() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=ariane&next=5");
    httpRequest.send();
}

// function that displays original 5 launches
function loadLaunches()
{
httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5");
httpRequest.send();
}




//Countdown Timer
setInterval(countDown);

var dateObject;

function countDown()
{
    var dateToday = new Date();
    var dateFrom = Date.UTC(dateToday.getFullYear(),
        dateToday.getMonth(), dateToday.getDate(),
        dateToday.getHours(), dateToday.getMinutes(),
        dateToday.getSeconds());
    var dateTo = Date.UTC(dateObject.getFullyear(),
        dateObject.getMonth(), dateObject.getDate(),
        19, 0, 0);  

    //days
    var daysUntil = Math.floor((dateTo - dateFrom) / 86400000);
    document.getElementById("countdownSection").innerHTML = daysUntil;

    //hours
    var fractionalDay = (dateTo - dateFrom) % 86400000;
    var hoursUntil = Math.floor(fractionalDay / 3600000);
        if (hoursUntil < 10) 
        {
            hoursUntil = "0" + hoursUntil;
        } 
        document.getElementById("countdownSection").innerHTML += ":" + hoursUntil;

    //minutes
    var fractionalHour = fractionalDay % 3600000;
    var minutesUntil = Math.floor(fractionalHour / 60000);
        if (minutesUntil < 10) 
        {
            minutesUntil = "0" + minutesUntil;
        }
        document.getElementById("countdownSection").innerHTML += ":" + minutesUntil;

    //Seconds

    var fractionalMinute = fractionalHour % 60000;
    var secondsUntil = Math.floor(fractionalMinute / 1000);
        if (secondsUntil < 10) 
        {
            secondsUntil = "0" + secondsUntil;
        }
        document.getElementById("countdownSection").innerHTML += ":" + secondsUntil;

    if((dateTo - dateFrom) < 1000)
    {
        clearInterval(countDown);
        document.getElementById("countdownSection").style.display = "none";

        alert(countDown);
    }
}


 












