function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
  return notes.sort((a, b) => {
    return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
  });
}

function addNote() {
    console.log("addNote called")
  const notes = getNotes();
  const notesTosave = {};
  notesTosave.title = document.getElementById("notes-title").value;
  notesTosave.body = document.getElementById("notes-body").value;

  notesTosave.id = notes.length;
  notesTosave.updated = new Date().toISOString();
  console.log("note: ",notesTosave)
  notes.push(notesTosave);
  
  localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  console.log("after: ",localStorage);
  showNotes();
}

function deleteNote(id) {
  const notes = getNotes();
  const newNotes = notes.filter((note) => note.id != id);
  localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
}

function showNotes() {
  const notes = getNotes();
  const noteListContainer = document.getElementById("note-list");
  
  // Iterate through the 'notes' array and append child divs for each note
  notes.forEach((note) => {
    console.log("note: ",note)
    const noteItem = document.createElement("div");
    noteItem.className = "notes-list-item";
    noteItem.onclick = "moveToUpdate()"

    const titleDiv = document.createElement("div");
    titleDiv.className = "notes-small-title";
    titleDiv.textContent = note.title;
    // Replace with the actual title property of your note

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "notes-small-body";
    bodyDiv.textContent = note.body; // Replace with the actual body property of your note

    const updatedDiv = document.createElement("div");
    updatedDiv.className = "notes-small-updated";
    updatedDiv.textContent = note.updated; // Replace with the actual updated property of your note

    // Append the title, body, and updated divs to the noteItem
    noteItem.appendChild(titleDiv);
    noteItem.appendChild(bodyDiv);
    noteItem.appendChild(updatedDiv);

    // Append the noteItem to the note list container
    noteListContainer.appendChild(noteItem);
  });
}

showNotes();

console.log(getNotes());
