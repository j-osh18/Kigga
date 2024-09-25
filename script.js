let slideIndex = 0; // Initialize slide index
showSlides(); // Call the function to display the first slide

function showSlides() {
    const slides = document.getElementsByClassName("slide"); // Get all slides
    const dots = document.getElementsByClassName("dot"); // Get all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide if index exceeds
    }
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", ""); // Remove active class from all dots
    }
    slides[slideIndex - 1].style.display = "block"; // Display the current slide
    dots[slideIndex - 1].className += " active"; // Add active class to the current dot
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// Optional: Function to navigate to the current slide when a dot is clicked
function currentSlide(n) {
    slideIndex = n; // Set the current slide index
    showSlides(); // Call the showSlides function to display the current slide
}
