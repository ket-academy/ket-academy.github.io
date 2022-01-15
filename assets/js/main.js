//test
console.log("DEBUG:-$")

//ono load show this
$(window).on('load', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loader" ).fadeOut("slow", function() {
      $( "#loader" ).hide()
  });  
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
  console.log(tooltip)
  menuItem.addEventListener('mouseenter', (ev) =>{
    tooltip.style.display = "list-item"
  }
      )
  menuItem.addEventListener('mouseleave', (ev)=>tooltip.style.display = "none")
}
);





/*********HANDLING LOADING OF MATERIALS***********/



//subjects

const subjects = {
  all: "All Subjects",
  CSC: "Computer Science",
  Math: "Mathematics",
  Fmath: "Further Mathematics",
  ICT: "ICT",
  Chem: "Chemistry",
  Phy: "Physics",
  Bio: "Biology",
};

//collect search buttons and populate the select element

const searchItemButton= document.querySelectorAll('.search-item');
const selectItem = document.querySelectorAll(".select-subject")

console.log({searchItemButton:searchItemButton, selectItem:selectItem})

for(let subjectTag of Object.keys(subjects)){
  Array.from(selectItem).forEach(one=>{
    const option = document.createElement('option')
    option.value = subjectTag
    option.innerHTML = subjects[subjectTag]
    one.appendChild(option)
  })
}



var dataFile = "../../data/notesInfoBank.json"
searchItemButton[0].addEventListener('click', (ev)=>{
  $('.notes').slideUp(1000)
  $('.notes').slideDown(1000)
  
  fetch(dataFile).then(response => response.json()).then(json => {
   
    console.log({"Using Fetch":json})
  }) 

  $(function(){
    $.getJSON(dataFile,function(data)
    {console.log({"Using JQuery": data})});
 })();


 
})


types= "videos, notes, past questions, answers to questions"
classNames = [".lib-notes", ".lib-vieos", ".lib-answers", ".lib-pastquestions"]

let loadDataToUI = function(subjectTag, classNames, type){
  if(!Object.keys(subjects).includes(chosenSubject)) return
}

/*  



searchItemButton.addEventListener('click', (ev)=>{
  let chosenSubject = selectItem.value
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
}) */


//odering videos

//ordering solutions to past questions

//odering past questions



/*================Extracting info from JSON database==========*/
/*
var dataFile = "../../data/notesInfoBank.json"

let libraryData = null

let notesData = "hello"
    videoData = "jolo",
    answersData = "ko",
    pastQuestionsData = "jj";


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

*/