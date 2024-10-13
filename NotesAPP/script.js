const notescontainer = document.querySelector(".notes-container"); // Use .notes-container here
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Display notes from localStorage
function showNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notescontainer.innerHTML = storedNotes;
        // Reattach event listeners for delete buttons after loading
        addDeleteListeners();
    }
}
showNotes();

// Save notes to localStorage
function updatestorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    inputbox.appendChild(img); // Append the image inside the inputbox
    notescontainer.appendChild(inputbox);
    updatestorage(); // Update localStorage after adding the new note
    addDeleteListeners(); // Add event listener for the new delete button
});

// Function to add event listeners to delete buttons
function addDeleteListeners() {
    notescontainer.querySelectorAll("img").forEach((img) => {
        img.addEventListener("click", function() {
            img.parentElement.remove();
            updatestorage();
        });
    });
}

notescontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updatestorage();
            }
        });
    }
});

// This is for adding a line break when "Enter" is pressed
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
