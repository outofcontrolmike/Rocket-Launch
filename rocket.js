//
var httpRequest = new XMLHttpRequest;       

//Getting next 5 launches
httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5");          
httpRequest.send(null);






// buttons that display;

// Next 5 falcon
httpRequest.open("get", " https://launchlibrary.net/1.4/launch?name=falcon");
httpRequest.send();


// Next 5 Launcherone
httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=launcherone");
httpRequest.send();

//Next 5 ariane
httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=ariane");
httpRequest.send();

// Next 5 default
httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=default");
httpRequest.send();



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
        clearInterval(countdown);
        document.getElementById("countdownSection").style.display = "none";
    }
}