// Hero Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

// Initial display
showSlide(currentSlide);

// Change slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

function sendEmail() {
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_ima5wd8", "template_e1r6666", templateParams)
        .then(() => {
            alert("✅ Quote request sent successfully!");
        })
        .catch(err => {
            console.error("EmailJS Error:", err);
        });
}



