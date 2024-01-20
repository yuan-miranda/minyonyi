var currentSlide = 0;
window.onload = function() {
    slideSWhow();
}

function changelang() {
    const language = document.getElementById("dropdown_menu").value;
    if (language == "Select Language") {
        return;
    }
    window.location.href = language + ".html";
}

function slideSWhow() {
    const slides = document.getElementsByClassName("slide");
    console.log(currentSlide);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (currentSlide == slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].style.display = "block";
    currentSlide++;
    setTimeout(slideSWhow, 4000);
}
