// variables
const noteList = document.querySelector("#note-list");
const btnSubmit = document.querySelector("#submit");
const alertInput = document.querySelector(".alert-input");
const alertRemove = document.querySelector(".alert-remove");
const alertAdd = document.querySelector(".alert-add");

// eventlisteners

function eventListeners() {
  document.querySelector("#form").addEventListener("submit", newNote);

  document
    .querySelector("#note-list")
    .addEventListener("click", removeFromNoteList);

  document.addEventListener("DOMContentLoaded", onLoadedLocalStorage());
}

eventListeners();
// functions

// adding new note to the list
function newNote(e) {
  e.preventDefault();

  // access to the value
  const note = document.querySelector("#note").value;

  // check input is empty
  if (note == "") {
    setTimeout(() => {
      alertInput.style.opacity = 0;
    }, 3000);
    alertInput.style.opacity = 1;
  } else {
    // create remove btn to the li
    const removeBtn = document.createElement("img");
    removeBtn.classList = "remove cursor-pointer ";
    removeBtn.src = "img/delete.png";
    removeBtn.style.width = "20px";
    removeBtn.style.height = "20px";

    // create edit btn the li
    const editBtn = document.createElement('img')
    editBtn.classList = 'edit cursor-pointer '
    editBtn.src = 'img/edit.png'
    editBtn.style.width = "20px";
    editBtn.style.height = "20px";

    // create tag li
    const li = document.createElement("li");
    li.classList += "flex align-middle justify-between my-4";
    li.appendChild(document.createTextNode(note));

    // adding li to the list
    noteList.appendChild(li);
    // adding remove btn and edit btn to the li
    li.appendChild(removeBtn);
    li.appendChild(editBtn)
    // alert remove note from list
    removeBtn.addEventListener("click", () => {
      alertRemove.style.opacity = 1;
      setTimeout(() => {
        alertRemove.style.opacity = 0;
      }, 3000);
    });

    // alert add note from list
      alertAdd.style.opacity = 1;
      setTimeout(() => {
        alertAdd.style.opacity = 0;
      }, 3000);

    
    this.reset();
    
    
    addNoteToLocalStorage(note);
    
  }
}

// remove note from list
function removeFromNoteList(e) {
  if (e.target.classList.contains("remove")) {
    console.log(e.target.parentElement.remove());
  }

  removeNoteFromLocalStorage(e.target.parentElement.textContent);
}

// adding to note to the local storage
function addNoteToLocalStorage(note) {
  //   get the note from local storage
  const notes = getNoteFromLocalStorage();

  // add new note to the note array
  notes.push(note);

  // add new note array to the local storage
  localStorage.setItem("notes", JSON.stringify(notes));
}

// get note from local storage
function getNoteFromLocalStorage() {
  let notes;
  // get previous notes from local storage
  const getNoteLS = localStorage.getItem("notes");
  // if not exist create empty
  if (getNoteLS === null) {
    notes = [];
  } else {
    // if exist convert to the array
    notes = JSON.parse(getNoteLS);
  }
  return notes;
}

// show note list after load page
function onLoadedLocalStorage() {
  const notes = getNoteFromLocalStorage();

  notes.forEach((note) => {
    // create remove btn to the li
    const removeBtn = document.createElement("img");
    removeBtn.classList = "remove cursor-pointer";
    removeBtn.src = "img/delete.png";
    removeBtn.style.width = "20px";
    removeBtn.style.height = "20px";
    console.log(removeBtn);

    // create tag li
    const li = document.createElement("li");
    li.classList += "flex align-middle justify-between my-4";
    li.appendChild(document.createTextNode(note));

    // adding li to the list
    noteList.appendChild(li);
    // adding remove btn to the li
    li.appendChild(removeBtn);
  });
}

// remove note from local storage
function removeNoteFromLocalStorage(noteContent) {
  const noteFromLS = getNoteFromLocalStorage();

  noteFromLS.forEach((note, index) => {
    if (note === noteContent) {
      noteFromLS.splice(index, 1);
    }
  });

  localStorage.setItem('notes' , JSON.stringify(noteFromLS))
}

// function editNote(){

// }
