// // Your code here

// // const dodger = document.getElementById("dodger")

// //accessing the .style property allows us to change things like backgroundColor, height, 
// //width, and position on the page

// dodger.style.backgroundColor = "#FF69B4";

// //let's move the element up

// dodger.style.bottom = "0px";

// //in DOM: dodger.style.bottom ==> "____px" , this checks our position!

// dodger.style.left = "0px";

// //let's add an addEventListener that identifies the left arrow stroke:

// document.addEventListener("keydown", function (event) {

// //we're going to add our addEventListener with the parameters
// //of "keydown" (which is the property we are going to be listening for)
// //and pass a function as the second parameter
// //in this case, we are calling back to the (event) which allows us to
// //console.log the (event) to check our code

//     console.log(event);

// //now that we've identified the left key stroke,
// //let's write some code that will allow the dodger to move when we enter a key stroke

// //     if (event.key === "ArrowLeft") {
// //         const leftNumbers = dodger.style.left.replace("px", "");
// //         const left = parseInt(leftNumbers, 10);

// //         dodger.style.left = `${left - 1}px`;
// //   }

// //we'll use an if/else statement to set our conditions for the event
// //in the above example, we are saying if our event listener detects a keydown event
// //AND if the event's key is absolutely, positively "ArrowLeft"
// //then let's have our leftNumbers be equal to the dodger.style.left property
// //we'll also need to add the .replace method and set our parameters to
// //our original "px" and then an open set of "" to then store the results of leftNumbers
// //this will do the method's namesake of 'replacing' the original information with our new value
// //we'll also need to parse leftNumbers as an integer with parseInt
// //this will store the number in 'left'
// //our last line will be updating our dodger.style property
// //we'll use interpolation to set the 'left' value to subtract one for every left key stroke
// //this will allow the dodger to move around noticeably upon command!
// //we need to include the 'px' within our string so our code doesn't break
// //these are the only conditions we are looking for within this if/else statement
// //else, we don't have anything left to do or search for!
// //notice the dodger will not move with any other keystroke besides the left arrow

// });

//_______________________________________

//let's switch things up by creating a function called moveDodgerLeft instead
//our if/else condition below will allow the dodger to move left upon the left arrow keystroke
//however, we've set the condition of "let > 0" as an acting border for our game!
//if the dodger < 0 then the left key stroke will move left
//else the dodger is > 0, do nothing! our dodger now won't disappear beyond the game's container

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
}

//now let's set up our right key stroke do to the same!

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    };
})