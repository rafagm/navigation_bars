const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //To prevent first animation on page load
    nav.style.transition = '';

    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        if (!nav.style.transition) nav.style.transition = "transform 0.5s ease-in";
        
        //Animate Links
        navLinks.forEach( (link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else     
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + .3}s`;
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

const app = () => {
    navSlide();
}

app();