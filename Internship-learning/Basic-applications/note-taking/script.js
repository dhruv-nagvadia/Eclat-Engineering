function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText) {
        const notesContainer = document.getElementById("notesContainer");

        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");

        const noteContent = document.createElement("p");
        noteContent.textContent = noteText;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => noteDiv.remove();

        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(deleteButton);
        notesContainer.appendChild(noteDiv);

        noteInput.value = ""; // Clear input field
    }
}
