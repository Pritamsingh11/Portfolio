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
 window.onload = function () {
    const name = document.querySelector('.animated-name');
    if (name) {  
        const letters = name.textContent.split('');
        name.textContent = '';
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`;
            name.appendChild(span);
        });
    } else {
        console.error("Element with class '.animated-name' not found!");
    }
};
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
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// });

// document.addEventListener("keydown", function (e) {
//     if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J" || e.key === "s" || e.key === "S" || e.key === "h" || e.key === "H")) {
//         e.preventDefault();
//     }
//     if (e.keyCode === 123) { // Disable F12
//         e.preventDefault();
//     }
// });

// LocalStorage Initialization
let users = JSON.parse(localStorage.getItem("users")) || {};
let userName = localStorage.getItem("userName") || "Anonymous";

users[userName] = (users[userName] || 0) + 1;
localStorage.setItem("users", JSON.stringify(users));

// function requestPassword() {
//     let password = prompt("Enter the admin password:");
//     const correctPasswordHash = "6b3a55e0261b0304143f805a24924d0c1c44524821305f31d9277843b8a10f4e"; // SHA-256 hash of "PS1121"
//     const inputHash = sha256(password);

//     console.log("Entered password:", password);
//     console.log("Hashed input:", inputHash);

//     if (inputHash === correctPasswordHash) {
//         showModal();
//     } else {
//         alert("Incorrect password! Access denied.");
//     }
// }

// function sha256(input) {
//     return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex); // Ensure the hash is in hexadecimal format
// }
function requestPassword() {
    let password = prompt("Enter the admin password:");
    const correctPassword = "1121"; // Plain text password for debugging

    // Debugging: Log the entered password
    console.log("Entered password:", password);

    if (password === correctPassword) {
        showModal();
    } else {
        alert("Incorrect password! Access denied.");
    }
}

function showModal() {
    let visitorTableBody = document.getElementById("visitorTableBody");
    visitorTableBody.innerHTML = "";
    for (let user in users) {
        let row = `<tr><td>${escapeHtml(user)}</td><td>${escapeHtml(users[user].toString())}</td></tr>`;
        visitorTableBody.innerHTML += row;
    }

    document.getElementById("visitModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("visitModal").style.display = "none";
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}
