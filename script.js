 // Sticky Header
 let lastScroll = 0;
 window.addEventListener('scroll', function () {
     const header = document.querySelector('.header');
     const currentScroll = window.scrollY;

     if (currentScroll > lastScroll) {
         header.classList.add('hide');
     } else {
         header.classList.remove('hide');
     }
     lastScroll = currentScroll;

     header.classList.toggle('sticky', currentScroll > 0);
 });

 // Active Navigation
 const sections = document.querySelectorAll('section');
 const navLinks = document.querySelectorAll('.navbar a');

 window.addEventListener('scroll', () => {
     let current = '';
     sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (pageYOffset >= sectionTop - sectionHeight / 3) {
             current = section.getAttribute('id');
         }
     });

     navLinks.forEach(link => {
         link.classList.remove('active');
         if (link.getAttribute('href').includes(current)) {
             link.classList.add('active');
         }
     });
 });

 // Scroll Animation
 window.addEventListener('scroll', function () {
     const elements = document.querySelectorAll('.skill-item, .project-card');
     elements.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         if (elementTop < windowHeight - 100) {
             element.classList.add('animate');
         }
     });
 });

 // Name Animation
 const name = document.querySelector('.animated-name');
 const letters = name.textContent.split('');
 name.textContent = '';
 letters.forEach((letter, index) => {
     const span = document.createElement('span');
     span.textContent = letter;
     span.style.animationDelay = `${index * 0.1}s`;
     name.appendChild(span);
 });
document.addEventListener("DOMContentLoaded", function () {
    // Image Click Event
    document.querySelectorAll(".carousel-inner img").forEach(img => {
        img.addEventListener("click", function () {
            let modalImage = document.getElementById("modalImage");
            modalImage.src = this.src;
            let imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
            imageModal.show();
        });
    });

    // Read More Feature
    document.querySelectorAll(".card-text").forEach(function (text) {
        if (text.scrollHeight > 60) {
            let readMore = document.createElement("span");
            readMore.innerText = " Read More";
            readMore.classList.add("read-more");
            text.parentNode.appendChild(readMore);

            readMore.addEventListener("click", function () {
                if (text.style.maxHeight === "none") {
                    text.style.maxHeight = "60px";
                    readMore.innerText = " Read More";
                } else {
                    text.style.maxHeight = "none";
                    readMore.innerText = " Show Less";
                }
            });
        }
    });
});

// For Emailjs
(function(){
    emailjs.init("Z08OEypIbHmPFR6nS"); 
})();
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var to_name = document.getElementById("to_name").value;
    var to_email = document.getElementById("to_email").value;
    var message = document.getElementById("message").value;

    emailjs.send("service_8cb5xuh", "template_xhcoq7d", {
        to_name: to_name,
        to_email: to_email,
        message: message
    }).then(function(response) {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
    }, function(error) {
        alert("Error: " + JSON.stringify(error));
    });
});

let topButton = document.getElementById("topBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J" || e.key === "s" || e.key === "S" || e.key === "h" || e.key === "H")) {
        e.preventDefault();
    }
    if (e.keyCode === 123) { // Disable F12
        e.preventDefault();
    }
});
