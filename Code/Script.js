
// Window.ScrollBy = The scrollBy() method scrolls the document by the specified number of pixels.
// setInterval()   = The setInterval() method calls a function at specified intervals (in milliseconds).
// 1 second = 1000 milliseconds.
// clearInterval() = The clearInterval() method clears a timer set with the setInterval() method.

//Window.ScrollBy using setInterval() function:-
//Behaviour of pageScrolling :-

//First of all lets intialize a variables:-
let targetPosition = 1000;

let currentPosition = 0;

let scrollInterval = setInterval(function()
{
if(currentPosition >= targetPosition)
{
clearInterval(scrollInterval);
    return;

}
currentPosition += 50;
window.scrollBy(0,50);
},50);




