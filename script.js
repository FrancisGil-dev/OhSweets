

//function to scroll to view
const scrollView = () => {
    //get the doms
    const navs = document.querySelector('li');
    const section = document.querySelector('section');
   //navs
   const home = navs[0];
   const about = navs[1];
   const menu = navs[2];
   const contact = navs[3];

   //function to click to scroll
   const scroll = (sec) => {sec.scrollIntoView({behavior: 'smooth'})}

   //addevent Listener
   about.addEventListener('click' () => {
    scroll(section[1])
   })

}
scrollView()



