///.Behaviour of pageScrolling :-

// Window.ScrollBy = The scrollBy() method scrolls the document by the specified number of pixels.
// setInterval()   = The setInterval() method calls a function at specified intervals (in milliseconds).
// 1 second = 1000 milliseconds.
// clearInterval() = The clearInterval() method clears a timer set with the setInterval() method.
//For practicing to know how the pagescrolling behavior behaves.
//Window.ScrollBy using setInterval() function:-

//1.Fetching elements:-

//This line selects all the anchor(<a>)elements inside elements with the class "Navmenu".
//These anchor tags are typically used for navigation links.
let navMenuAnchorTags = document.querySelectorAll(".Navmenu a");
let interval; //Global variable

//This loop iterates through each of the selected navigation links.
for (let i = 0; i < navMenuAnchorTags.length; i++) {

//This adds a click event listener to each navigation link.
//When a navigation link is clicked, the function inside the curly braces will be executed.
    navMenuAnchorTags[i].addEventListener(`click`, function(event) {
        
//This prevents the default behavior of a link click,
//which would normally cause the browser to navigate to a new page.
//We want to handle the navigation ourselves using smooth scrolling.        
        event.preventDefault();

//This extracts the text content of the clicked link,
//removes any extra spaces, and converts it to lowercase.
//This text is assumed to correspond to the ID of the target section on the page.
//In event handler functions,such as those used with DOM events,
//`this` typically refers to the element that triggered the event.
//In JavaScript, the textContent property is used to,
//get or set the text content of an HTML element.        
        let targetSectionID = this.textContent.trim().toLowerCase();

//This retrieves the element on the page that has the ID matching the targetSectionID.
//In other words, it finds the section that we want to scroll to.
        let targetSection = document.getElementById(targetSectionID);

//This smoothly scrolls the page so that the target section becomes visible.
//The { behavior: 'smooth' } option ensures that the scrolling happens smoothly.        
        targetSection.scrollIntoView({ behavior: 'smooth' });

//Inside the same event listener,
//an interval is set using setInterval,
//which repeatedly calls the scrollVertically function every 20 milliseconds.
        interval = setInterval(function() {
            scrollVertically(targetSection);
        }, 20);
    });
}

//This function checks if the target section is above the current viewport.
//If it is, it stops the scrolling by clearing the interval and returns.
//If not, it scrolls the page down by a small amount (50 pixels in this case).
function scrollVertically(targetSection) {
    let targetSectionCoordinates = targetSection.getBoundingClientRect();

    if (targetSectionCoordinates.top < 0) {
        clearInterval(interval);
        return;
    }

    window.scrollBy(0, 50);
}

//In essence, this code listens for clicks on navigation links,
//smoothly scrolls to the selected section on the page,
//and simultaneously initiates a gradual scrolling process (in increments) 
//until the target section reaches the top of the viewport.
//Once the target section is in view, the scrolling stops. 
//The overall effect is a smooth scrolling navigation experience.




//2.We will be doing something similar in our resume as well.
//In the skills section, we have made several skills that have different smaller colored bars inside them.
//when you reach that section of skills, it should trigger a loading animation in all of the skills.

let progressBar = document.querySelectorAll('.skill-progress > div');

let skillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll',checkScroll);

let animationDone = false;

//skillsBar at 0%.
function intializeBars()
{
for(let bar of progressBar) 
{
bar.style.width = 0 + "%";
}
}

intializeBars();


//skillsBar filling at their own percentages.
function fillBars()
{
for (let bar of progressBar) {
  let targetWidth = bar.getAttribute("data-bar-width");
  let currentWidth = 0;

  let interval = setInterval(function()
  {
if(currentWidth > targetWidth){

    clearInterval(interval);
    return;
}
currentWidth++;
bar.style.width = currentWidth + "%";
},3);
    
}
};

function checkScroll()
{
//You have to check whether skills-container is visible.
let coOrdinates = skillsContainer.getBoundingClientRect();

//window.innerHeight is a viewport height.
if(!animationDone && coOrdinates.top <= window.innerHeight){
    animationDone = true;
 //alert("Skills-section is visble");
 fillBars();
}
else if( coOrdinates.top > window.innerHeight){

animationDone = false;
intializeBars();
}
};











