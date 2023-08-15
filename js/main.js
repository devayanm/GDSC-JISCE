// Menu JS
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show Menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Header Background
const scrollHeader = () =>{
    const header = document.getElementById('header')
   
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Scroll section active link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// Scroll Up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Dark Light Theme Toggle
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((each)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('.show');
        } else{
            entry.target.classList.remove('.show');
        }
    })
})

//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        200: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        400: {
            slidesPerView: 3,
            spaceBetween: 30

        },
        600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        2000: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// 

const slider = document.querySelectorAll('.slider');

slider.forEach(slider => {
    const slides = slider.querySelector('.slides').children;
    const navigationLinks = slider.querySelectorAll('a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSlideId = link.getAttribute('href');
            const targetSlide = document.querySelector(targetSlideId);

            slides.forEach(slide => {
                slide.style.display = 'none';
            });

            targetSlide.style.display = 'block';

            navigationLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
});