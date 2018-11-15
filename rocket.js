// opens up an HML request
var httpRequest = new XMLHttpRequest();  // creates a variable that makes a  HMLHttpRequest  it will request data from where it's sent


var rocketReport; // Used in the aFunction - will eventually be turned into response data as a string
var x;          //Variable x clears the timer 

// created variables to insert launch data into rows
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");
var myRows = new Array(row1, row2, row3, row4, row5);  // created an array that holds the row data.  Will eventually have rocket info passed to it.

// variables that will eventually display launch info
var launchDisplay = document.getElementById("launches");        // grabs the launches div  - launch info should be displayed in here
var falconRequest = document.getElementById("falcon");          // grabs the falcon button - Launch info should swap for falcon
var launcheroneRequest = document.getElementById("launcherone");    // grabs launcherone button - just like previous
var arianeRequest = document.getElementById("ariane");              // grabs ariane button - and again
var defaultRequest = document.getElementById("nextFive");           // grabs the nextFive button - This will display the oringinal launches from load


//Events that are supposed to insert the API info into a certain div
window.addEventListener("load",loadPage)  // This event listener calls the loadPage function on load
falconRequest.addEventListener("click", loadFalcon);  // When Falcon button is clicked - loadFalcon is run
launcheroneRequest.addEventListener("click", loadLauncherOne);  // when Launcher one is clicked - loadLauncherOne is referenced
arianeRequest.addEventListener("click", loadAriane);    // when ariane is clicked - loadAriane is ran
defaultRequest.addEventListener("click", loadLaunches); // This calls loadLaunches function



//function that loads next five launches from API to launches Div on Load Screen 
function loadPage()
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5"); // This opens the requets and prepares to send
    httpRequest.send();     // This sends the request
    httpRequest.onreadystatechange = aFunction;  // When the property of the onreadystatechange changes, afunction will be called
}

//function converts string into an object and accesses the first launch and name of it. 
function aFunction()
{
    if(httpRequest.readyState === 4)  // this only runs if the readyStae of the request client is Done === 4.  :)
        {
            var rocketReport = httpRequest.responseText; // stores response text in a variable
            console.log(rocketReport);                  // this logs the variable that holds response text
            var launchObject = JSON.parse(rocketReport);    // converts this string of data that is returned to an object that we can later access

            console.log(launchObject.launches[0].name);     // accesses the array first value from the array and it's name value.
        }
        rowGet(launchObject);    // rowGet takes the info from launchObject
        timer(launchObject);    // timer takes the info from launchObject
}


// function that switches to next five from falcon
 function loadFalcon()
 {
   httpRequest.open("get", " https://launchlibrary.net/1.4/launch?next=5&name=falcon");   //open specifies the type of request, get's the info from API
   httpRequest.send();                                                                    // Sends the request string to the server
   httpRequest.onreadystatechange = aFunction;                                            //When the status of XMLHttpRequest is finished it will run to aFunction
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

 












