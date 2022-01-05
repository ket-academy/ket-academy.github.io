//tool tip for navbar


console.log("start")
const menu = Array.from(document.querySelector('.nav-list-items').
                  getElementsByTagName("li"))
console.log(typeof menu, {menu});
Array.from(menu).forEach(menuItem=>{
  tipText = menuItem.getAttribute("tip").toString().trim()
  const tooltip = document.createElement('div')
  tooltip.id=`tooltip-${tipText}`;
  tooltip.innerHTML = tipText;
  tooltip.style = `
               font-famly: "Poppins", san-serif;
               font-size: 13px;
               font-weight: 600;
               font-style: bold;
               letter-spacing: 1px;
               position: absolute;
               display: none;
               padding: 5px; 
               background-color:rgba(0, 0, 0, 0.8); 
               color: white;
               border: 1px rgba(0, 0, 0, 0.12) solid;
               border-radius: 3px;
               z-index: 1009;
               `;
  menuItem.appendChild(tooltip)
})

menu.forEach(menuItem=>{
  tipText = menuItem.getAttribute("tip").trim()
  const tooltip = document.getElementById(`tooltip-${tipText}`);
  console.log(tooltip)
  menuItem.addEventListener('mouseenter', (ev) =>{
    tooltip.style.display = "list-item"
  }
      )
  menuItem.addEventListener('mouseleave', (ev)=>tooltip.style.display = "none")
}
);


//setting background for notes

for(let noteDiv of document.querySelectorAll(".notes")){
  let images = []
  noteDiv.style;
}

//ordering notes

const subjects = {
  all: "All Notes",
  CSC: "Computer Science",
  Math: "Mathematics",
  Fmath: "Further Mathematics",
  ICT: "ICT",
  Chem: "Chemistry",
  Phy: "Physics",
  Bio: "Biology",
};


const searchNotesButton = document.querySelector('.note-search');
const searchNotes = document.getElementById("search-notes")

for(let subjectTag of Object.keys(subjects)){
  const option = document.createElement('option')
  option.value = subjectTag
  option.innerHTML = subjects[subjectTag]
  searchNotes.appendChild(option)
}


searchNotesButton.addEventListener('click', (ev)=>{
  let chosenSubject = searchNotes.value
  if(!Object.keys(subjects).includes(chosenSubject)) return


  //select the divs that have #chosensubject and display them
  const notesLibrary = document.querySelector(".lib-notes").getElementsByClassName("notes")
  for(let note of Array.from(notesLibrary)){
    subject = note.getAttribute("subject")
    if(!(subject == chosenSubject) && chosenSubject != "all"){
      note.style.display = "none";
    }
    else if(note.style.display === "none"){
      note.style.display = "flex";
  }
}
})


//odering videos

//ordering solutions to past questions

//odering past questions



/*================Extracting info from JSON database==========*/

$.getJSON("https://bioinfobot.github.io/data/2017-05.json")
.done(function( data ) {
   console.log(data)
});

$.getJSON("https://bioinfobot.github.io/data/2017-05.json", function(json) {
    console.log(json); 
});


fetch('https://bioinfobot.github.io/data/2017-05.json')
  .then(res => res.json())
  .then(json => {
    //json vaiable contains object with data
  })


  $(function(){
    $.getJSON("https://bioinfobot.github.io/data/2017-05.json",function(data)
    {console.log(data)});
 })();

