// 3. Get saved data from localStorage
let petName = localStorage.getItem("pet-name");

// 4. Set the text in the DOM if the saved data exists.
if(petName) {
  let nameOutput = document.getElementById("petNameOutput");
  nameOutput.textContent = petName;
}

function handleSave() {
  // 1. Get the data from the user
  let nameInput = document.getElementById("petName");
  let petName = nameInput.value;
  
  // set the text in the DOM if value was set
  if(petName) {
    let nameOutput = document.getElementById("petNameOutput");
    nameOutput.textContent = petName;
  } 
  // 2. Save in localStorage
  localStorage.setItem("pet-name", petName);
}

// setup event listener
let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", handleSave);
