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