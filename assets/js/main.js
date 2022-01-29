
//test
console.log("DEBUG:-$")

//ono load show this
$(window).on('load', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
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

$(window).on('scroll', (ev)=>{
  if(window.scrollY < 100)
  $('#back-to-top').display= 'none !important'
  else
  $('#back-to-top').display = 'inline-block'
})

//mobile nav

const mobileNavButton = document.querySelector('.mobile-menu-toggle')
const mobileMenu = document.querySelector('.navbar')
mobileNavButton.onclick  = ()=>{
  if(mobileMenu.style.display === 'none')
  {
    mobileMenu.style.display = 'flex'
    mobileNavButton.classList.add('bi-x')
    mobileNavButton.classList.remove('bi-list')
  }else{
    mobileMenu.style.display = 'none'
    mobileNavButton.classList.add('bi-list')
    mobileNavButton.classList.remove('bi-x')
  }
}

//tool tip for navbar


const menu = Array.from(document.querySelector('.nav-list-items').
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


