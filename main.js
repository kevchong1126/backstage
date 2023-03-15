const body = document.querySelector('body');
const fullPage = document.querySelector('.fullpage');
const header = document.querySelector('header');
const footerDescription = document.querySelector('.footer-description');
const contact = document.querySelector('.contact');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
console.log(menuLinks)
const desktopHeight = window.matchMedia('(min-width: 656px)');
const desktopWidth = window.matchMedia('(min-width: 992px)');

const getClosest = (position,height) => {
    let divisor = Math.round(position/height);
    divisor = divisor >= 5 ? 4 : divisor;
    const translate = divisor * height;
    
    return translate;
}

window.addEventListener('load', () => {
    const maximized = window.screen.availHeight - window.outerHeight;
    if (desktopHeight.matches && desktopWidth.matches && maximized === 0){
        body.style.overflow = 'hidden';
        header.classList.add('fixed');
        footerDescription.classList.add('fixed');
        contact.classList.add('fixed');
        menu.classList.add('fixed');
    }
    
})
window.addEventListener('resize', () => {
    const position = window.scrollY;
    const maximized = window.screen.availHeight - window.outerHeight;
    const closest = getClosest(position,657);
    
    if(desktopHeight.matches && desktopWidth.matches && maximized === 0){
        body.style.overflow = 'hidden';
        header.classList.add('fixed');
        footerDescription.classList.add('fixed');
        contact.classList.add('fixed');
        menu.classList.add('fixed');
        window.scrollTo(0,closest)
    }else{
        body.style.overflow = 'visible';
        footerDescription.classList.remove('fixed');
        header.classList.remove('fixed');
        contact.classList.remove('fixed');
        menu.classList.remove('fixed');
    }

});

window.addEventListener('wheel', e => {
    const position = window.scrollY;
    const maximized = window.screen.availHeight - window.outerHeight;
    const delay = 570;
    if (desktopHeight.matches && desktopWidth.matches && maximized === 0){
        if (e.deltaY > 0 && position < 2278){
              setTimeout(() => {window.scrollTo({
                top: getClosest(position,657)+657,
                left: 0,
                behavior : 'smooth'
                })} , delay)
        }else if (e.deltaY < 0 && position > 0){
              setTimeout(() => {window.scrollTo({
                top: getClosest(position,657)-657,
                left: 0,
                behavior : 'smooth'
                })},delay)
        }
    }
});


window.addEventListener('scroll', () => {
    const position = window.scrollY;
        if (position >= 0 && position < 250){
            body.style.backgroundColor = 'var(--lightBlue)';
        }else if( position >= 250 && position < 964){
            body.style.backgroundColor = 'var(--orange)';
        }else if( position >= 964 && position < 1621){
            body.style.backgroundColor = 'var(--yellow)';
        }else if( position >= 1621 && position < 2278){
            body.style.backgroundColor = 'var(--blue)';
        }else{
            body.style.backgroundColor = 'var(--red)';
        }

        

        switch (position){
            case 0:
                menuLinks.forEach(el => el.style.fontWeight = 'normal');
                menuLinks[0].style.fontWeight = 'bold';
                break;
            case 657:
                menuLinks.forEach(el => el.style.fontWeight = 'normal');
                menuLinks[1].style.fontWeight = 'bold';
                break;
            case 1314:
                menuLinks.forEach(el => el.style.fontWeight = 'normal');
                menuLinks[2].style.fontWeight = 'bold';
                break;
            case 1971:
                menuLinks.forEach(el => el.style.fontWeight = 'normal');
                menuLinks[3].style.fontWeight = 'bold';
                break;
            case 2628:
                menuLinks.forEach(el => el.style.fontWeight = 'normal');
                menuLinks[4].style.fontWeight = 'bold';
                break;
        }
})
