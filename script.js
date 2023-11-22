

//function to scroll to view
const scrollView = () => {
    //get the doms
    const navs = document.querySelectorAll('li');
    const section = document.querySelectorAll('section');
   //navs

   //function to click to scroll
   const scroll = (sec) => {sec.scrollIntoView({behavior: 'smooth'})}

   //addevent Listener
    navs[0].addEventListener('click', () => scroll(section[0]))
    navs[1].addEventListener('click', () => scroll( section[1]))
    navs[2].addEventListener('click', () => scroll(section[2]))
    navs[3].addEventListener('click', () => scroll(section[3]))
}
scrollView()

//toggle hamburger icon
const toggleList = () => {
    const hamburger = document.getElementById('hamburger');
    const list = document.getElementById('toggleList')
    hamburger.addEventListener('click', () => list.classList.toggle('toggled'))
}
toggleList()


