// Mostrar el menu y el Hidden
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navCerrar = document.getElementById('nav_cerrar')
    // console.log(navToggle);
    //Mostrar el menu
    //Validamos si la constante existe
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('mostrar-menu')
        })
    }
    if(navCerrar){
        navCerrar.addEventListener('click', () =>{
            navMenu.classList.remove('mostrar-menu')
        })
    }

    // REMOVER el menu movible
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('mostrar-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    // SWIPER PORTAFOLIO
    
    let swiper = new Swiper(".portafolio_container", {
        cssMode: true,
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
// Scroll section active link

const sections = document.querySelectorAll('section[id]')


function scrolActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{

        const sectionHeight = current.offsetHeight

        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')

        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrolActive)

// CAMBIAR BACKGROUND HEADER

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// MOSTRAR SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// /*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('tema-button')
// const darkTheme = 'tema-oscuro'
// const iconTheme = 'uil-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })


const boton = document.getElementById('tema-button');
const themeButton = document.getElementById('tema-button')
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
 boton.addEventListener('click', () => {
    console.log(configUser.matches); 
    if(configUser.matches){
        //Entramos al modo obscuro
        document.body.classList.toggle('light-theme')
        boton.classList.toggle('uil-moon');
        boton.classList.toggle('uil-sun');

    } else {
        document.body.classList.toggle('tema-oscuro')
        // boton.classList.remove('uil-sun');
        boton.classList.toggle('uil-moon');
    }
 })