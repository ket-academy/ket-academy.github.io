//tool tip for navbar

console.log("start")
const menu = document.querySelectorAll('.list-item')

menu.forEach(menuItem=>{

  menuItem.addEventListener('mouseenter', (ev) => {

      const tooltip = document.createElement('div', { className: "#tooltip" });
      tooltip.innerHTML = menuItem.getAttribute("tip");
      tooltip.style = `all: unset;
                   font-famly: "Poppins", san-serif;
                   position: absolute;
                   display: block;
                   padding: 5px; 
                   background-color:rgba(0, 0, 0, 0.8); 
                   color: white;
                   border: 1px rgba(0, 0, 0, 0.12) solid;
                   border-radius: 3px;
                   z-index: 1009;
                   `;
      menuItem.appendChild(tooltip)
      console.log('imple');
    })
  menuItem.addEventListener('mouseleave', (ev)=>{
    menuItem.removeChild()

  }
);


//ordering notes

const subjects = {
  CSC: "Computer Science",
  Math: "Mathematics",
  Fmath: "Further Mathematics",
  ICT: "ICT",
  Chem: "Chemistry",
  Phy: "Physics",
  Bio: "Biology"
}


const searchNotesButton = document.querySelector('search-notes');


