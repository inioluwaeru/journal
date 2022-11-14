// Add note to local storage
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {
 
  let addDate = document.getElementById("date");
  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  
    if (addTitle.value == "" || addTxt.value == "" || addDate.value == "") {
        return alert("Please add Note Title and Details and Date")
  }
  

    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let myObj = {
      date: addDate.value,
      title: addTitle.value,
      text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addDate.value = "";
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});

//switch from dark mode to light mode
function day() {
  var body = document.getElementById('body')
  var header = document.getElementById('header')
  var headere = document.getElementById('headere')
  body.style.backgroundColor = "rgb(248, 235, 191)"
  header.style.color = "black"
  headere.style.color = "black"
}

//switch from light mode to dark mode
function night() {
  var body = document.getElementById('body')
  var headere = document.getElementById('headere')
  var header = document.getElementById('header')
  body.style.backgroundColor = "#222831"
  header.style.color = "white" 
  headere.style.color = "white"
}

// Function to show elements from localStorage
function showNotes() {
  // let date = document.getElementById('date');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note">
            <small>${element.date}</small>
            <p class="note-counter">Day ${index + 1}</p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
        </div>
            `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
  }
}

showNotes();