// get saved data from localStorage
let petName = localStorage.getItem("pet-name");

// set the text in the DOM if the saved data exists.
if(petName) {
  let nameOutput = document.getElementById("petNameOutput");
  nameOutput.textContent = petName;
}

function handleSave() {
  let nameInput = document.getElementById("petName");
  let petName = nameInput.value;
  
  // set the text in the DOM if value was set
  if(petName) {
    let nameOutput = document.getElementById("petNameOutput");
    nameOutput.textContent = petName;
  } 
  // save in localStorage
  localStorage.setItem("pet-name", petName);
}

// setup event listener
let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", handleSave);
