var dropdown = document.querySelector('.dropdown');
var acc = document.getElementsByClassName("accordion-button");
var menuHamburger = document.querySelector('.menu-hamburger');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var imageSources = {
  'carousel-1': './assets/images/first.png',
  'carousel-2': './assets/images/second.png',
  'carousel-3': './assets/images/third.png'
};
var colorsCarousel = {
  'carousel-1': '#dce7e3',
  'carousel-2': '#ccdbe4',
  'carousel-3': '#f1f1f1'
};
var articleSources = {
  'p-1': './assets/images/61fa4fd439310c3222e142ba_Blog Image 2.png',
  'p-2': './assets/images/61fa50143a337b6520618374_Blog Image 9.png',
  'p-3': './assets/images/61fa503d384336649c7557ac_Blog Image 6.png',
  'p-4': './assets/images/623376b57925d763656caec2_Blog Image.png',
}
var labels = {
  'carousel-1': 'The new phones are here take a look.',
  'carousel-2': 'The iPad just got a new purpose!',
  'carousel-3': 'Your Pro Setup Just Got Better',
};
// Select the image element
var image = document.querySelector('.article-image');

for (var id in articleSources) {
  var pTag = document.getElementById(id);
  pTag.addEventListener('mouseover', function(event) {
    // Change the image source
    image.src = articleSources[event.target.id];
  });
}
// Add a click event listener
dropdown.addEventListener('click', function() {
  // Select the dropdown content within this dropdown
  var dropdownContent = this.querySelector('.dropdown-content');

  // Toggle the display property
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});
var accordion = document.querySelector('.dropdown-list-container');

menuHamburger.addEventListener('click', function() {

  // Toggle the display property
  if (accordion.style.display === 'block') {
    accordion.style.display = 'none';
  } else {
    accordion.style.display = 'block';
  }
});

var carouselImage = document.querySelector('.carousel-image');
var carouselLabelElement = document.querySelector('.carousel-labels');
carouselLabelElement.textContent = labels['carousel-1'];
var carouselContainer = document.querySelector('.carousel');

for (var id in imageSources) {
  var button = document.getElementById(id);
  button.addEventListener('click', function(event) {
      // Prevent the default action
      event.preventDefault();
      // Change the image  source
      // Change the image source
      carouselImage.src = imageSources[event.target.id];
      carouselContainer.style.backgroundColor = colorsCarousel[event.target.id];
      // Update the label
      carouselLabelElement.textContent = labels[event.target.id];
      // Remove active class from all buttons
      for (var id in imageSources) {
        document.getElementById(id).classList.remove('active');
      }

      // Add active class to the clicked button
      event.target.classList.add('active');
  });
}
var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var buttons = document.querySelectorAll('.carousel-middle-button');

leftButton.addEventListener('click', function(event) {
  // Prevent the default action
  event.preventDefault();

  // Find the currently active button
  var activeButton = document.querySelector('.carousel-middle-button.active');

  // Find the previous button
  var previousButton = activeButton.previousElementSibling || buttons[buttons.length - 1];

  // Simulate a click on the previous button
  previousButton.click();
});

rightButton.addEventListener('click', function(event) {
  // Prevent the default action
  event.preventDefault();

  // Find the currently active button
  var activeButton = document.querySelector('.carousel-middle-button.active');

  // Find the next button
  var nextButton = activeButton.nextElementSibling || buttons[0];

  // Simulate a click on the next button
  nextButton.click();
});
// Set default to carousel-1
document.getElementById('carousel-1').classList.add('active');