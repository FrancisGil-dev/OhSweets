//function to toggle the Hamburger

const toggleHamburger = () => {
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        //get the doms
            const navMenu = document.querySelector('ul');
            navMenu.classList.toggle('open-hamburger');
            
    })
}
toggleHamburger();