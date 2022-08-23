let pathOnSvg = document.getElementById('start-path');

// Get length of path
let pathLength = pathOnSvg.getTotalLength();

// Make very long dashes (the length of the path itself)
pathOnSvg.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
pathOnSvg.style.strokeDashoffset = pathLength;



// When the page scrolls...
window.addEventListener("scroll", function() {
 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  pathOnSvg.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp

  if (scrollPercentage >= 0.99) {
    pathOnSvg.style.strokeDasharray = "none";
    
  } else {
    pathOnSvg.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});






