// opens up an HML request
var httpRequest = new XMLHttpRequest(); 


var rocketReport; 
var x;

// created variables to insert launch data into rows
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");
var myRows = new Array(row1, row2, row3, row4, row5);
var countDown;

// variables that will eventually display launch info
let launchDisplay = document.getElementById("launches");
let falconRequest = document.getElementById("falcon");
let launcheroneRequest = document.getElementById("launcherone");
let arianeRequest = document.getElementById("ariane");
let defaultRequest = document.getElementById("nextFive");


//Events that are supposed to insert the API info into a certain div
window.addEventListener("load",loadPage)
launchDisplay.addEventListener("load", loadPage);
falconRequest.addEventListener("click", loadFalcon);
launcheroneRequest.addEventListener("click", loadLauncherOne);
arianeRequest.addEventListener("click", loadAriane);
defaultRequest.addEventListener("click", loadLaunches);



//function that loads next five launches from API to launches Div on Load Screen 
function loadPage()
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5",true);
    httpRequest.send(); 
    httpRequest.onreadystatechange = aFunction;
}

//function converts string into an object and accesses the first launch and name of it. 
function aFunction()
{
    if(httpRequest.readyState === 4)
        {
            var rocketReport = httpRequest.responseText;
            console.log(rocketReport);
            var launchObject = JSON.parse(rocketReport);

            console.log(launchObject.launches[0].name);
        }
        rowGet(launchObject);
        timer(launchObject);
}


// function that switches to next five from falcon
 function loadFalcon()
 {
   httpRequest.open("get", " https://launchlibrary.net/1.4/launch?next=5&name=falcon");   
   httpRequest.send();
   httpRequest.onreadystatechange = aFunction;
}             //any time there is a change, fire this function
 

// function that swithces to next launches form launcherone 
function loadLauncherOne() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=launcherone&next=5");
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
}

//function that swithces to launches from ariane
function loadAriane() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=ariane&next=5");
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
}

// function that displays original 5 launches
function loadLaunches()
{
httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5");
httpRequest.send();
httpRequest.onreadystatechange = aFunction;
}
function rowGet(launchObject)
{
    var row = document.getElementById("launchRows");
    for(let i = 0; i < row.length; i++)
{
    myRows[i].innerHTML = launchObject.launches[i].name + " || " + launchObject.launches[i].net;
}
    launchRows = myRows;
}

// Creating a timer - w3 Schools
function timer(launchObject)
{ 
clearInterval(x);

// Set the date we're counting down to
var countDownDate = new Date(launchObject.launches[0].net).getTime();

// Update the count down every 1 second
x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdownSection").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownSection").innerHTML = "EXPIRED";
  }
}, 1000);
}

 












