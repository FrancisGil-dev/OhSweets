//function to toggle the Hamburger
const toggleList = () => {
    const Icons = document.querySelectorAll('i');
    const listIcon = Icons[0];
    const navMenu = document.querySelector('ul.flex.gap-8');

    //addevent Listener
    listIcon.addEventListener('click', () => navMenu.classList.toggle('hamburger-open'));
}
toggleList();

