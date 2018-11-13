//
var httpRequest = new XMLHttpRequest;      

let falconRequest = document.getElementById("falcon");
let launcheroneRequest = document.getElementById("launcherone");
let arianeRequest = document.getElementById("ariane");
let defaultRequest = document.getElementById("nextFive");

falconRequest.addEventListener("click",loadLaunches );
launcheroneRequest.addEventListener("click", loadLaunches );
arianeRequest.addEventListener("click", loadLaunches);
defaultRequest.addEventListener("click", loadLaunches);

 function loadLaunches()
 {

 }





//Getting next 5 launches
httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?next=5");          
httpRequest.send();



// buttons that display;

// Next 5 falcon
httpRequest.open("GET", " https://launchlibrary.net/1.4/launch?next=5&name=falcon");
httpRequest.send();


// Next 5 launcherone
httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?name=launcherone&next=5");
httpRequest.send();

//Next 5 ariane
httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?name=arianenext=5");
httpRequest.send();

// Next 5 default
httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?next=5");
httpRequest.send();










//Countdown Timer
var countdown;

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
    document.getElementById("countdown").innerHTML = daysUntil;

    //hours
    var fractionalDay = (dateTo - dateFrom) % 86400000;
    var hoursUntil = Math.floor(fractionalDay / 3600000);
        if (hoursUntil < 10) 
        {
            hoursUntil = "0" + hoursUntil;
        } 
        document.getElementById("countdown").innerHTML += ":" + hoursUntil;

    //minutes
    var fractionalHour = fractionalDay % 3600000;
    var minutesUntil = Math.floor(fractionalHour / 60000);
        if (minutesUntil < 10) 
        {
            minutesUntil = "0" + minutesUntil;
        }
        document.getElementById("countdown").innerHTML += ":" + minutesUntil;

    //Seconds

    var fractionalMinute = fractionalHour % 60000;
    var secondsUntil = Math.floor(fractionalMinute / 1000);
        if (secondsUntil < 10) 
        {
            secondsUntil = "0" + secondsUntil;
        }
        document.getElementById("countdown").innerHTML += ":" + secondsUntil;

    if((dateTo - dateFrom) < 1000)
    {
        clearInterval(countDown);
        document.getElementById("countdownSection").style.display = "none";

        alert(countDown);
    }
}