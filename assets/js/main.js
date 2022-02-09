
//test
console.log("DEBUG:-$")

//ono load show this
$(window).on('load', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS one seconds.
});
function removeLoader(){
    $( "#loader" ).fadeOut("slow", function() {
      $( "#loader" ).remove()
  });  
}

/* window.addEventListener('load', (ev)=>{
  document.querySelector("#loader").style.display = "none";
}) */



//back top
const backToTop = $('#back-to-top');

// $(window).on('scroll', (ev)=>{
//   if(window.scrollY < 100){
//     console.log('hmmmm', window.scrollY)
//     $('#back-to-top').css("display", 'none !important')

//   }
//   else
//   $('#back-to-top').css("display", 'inline-block')
// })

//mobile nav

const mobileNavButton = document.querySelector('.mobile-menu-toggle')
const mobileMenu = document.querySelector('.navbar.mobile-nav')

mobileNavButton.onclick  = ()=>{
  if(mobileMenu.style.display != 'none' && mobileMenu.style.display)
  {

    mobileMenu.style.display = 'none'
    mobileNavButton.classList.add('bi-list')
    mobileNavButton.classList.remove('bi-x')

  
  }else{
    mobileMenu.style.display = 'flex'
    mobileNavButton.classList.add('bi-x')
    mobileNavButton.classList.remove('bi-list')
    
  }
}

//tool tip for navbar


const menu = Array.from(document.querySelector('.navbar.nav-desktop > .nav-list-items').
                  getElementsByTagName("li"))

Array.from(menu).forEach(menuItem=>{
  tipText = menuItem.getAttribute("tip").toString().trim()
  const tooltip = document.createElement('div')
  tooltip.id=`tooltip-${tipText}`;
  tooltip.innerHTML = tipText;
  tooltip.classList.add('tool-tip')
  menuItem.appendChild(tooltip)
})

menu.forEach(menuItem=>{
  tipText = menuItem.getAttribute("tip").trim()
  const tooltip = document.getElementById(`tooltip-${tipText}`);

  menuItem.addEventListener('mouseenter', (ev) => tooltip.style.display = "list-item")
  menuItem.addEventListener('mouseleave', (ev)=>tooltip.style.display = "none")
}
);


//carousel

let images = document.getElementsByClassName('carousel');



(function (){
  if(!images)
    return
  let activeImage = images[0]
  let imgIndex = 0;
  function activateCarousel(){
    activeImage.style.zIndex = 9
    activeImage.style.transform = 'translateX(100%)'
    setTimeout(function(){
      activeImage.style.zIndex = -349
      activeImage.style.transform = 'translateX(0)'
      imgIndex = (imgIndex+1)%images.length
      activeImage = images [imgIndex]
      console.log('hello--',imgIndex, "--", activeImage)
    }, 2500)
   
  }
  setInterval(activateCarousel, 3000);
}
)


//faq section

const faqItems = document.querySelectorAll(".faq-list li")


function showHide(faq){

  const para = faq.getElementsByTagName('div')[0]
  const icon = faq.getElementsByClassName('icon-show-hide')[0]
  
  if(para.style.display != 'none'){//if showing
    icon.classList.add('bi-caret-down-fill')
    icon.classList.remove('bi-caret-up-fill')
    para.style.display = "none"
    faq.classList.remove('faq-active')
  }
  else{
    icon.classList.add('bi-caret-up-fill')
    icon.classList.remove('bi-caret-down-fill')
    para.style.display = "block"
    faq.classList.add('faq-active') 
  }
}
(function(){
  if(!faqItems) return

  for(let faq of faqItems){
    faq.onclick = (ev)=>showHide(faq)
  }
}
)()


