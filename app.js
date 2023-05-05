// get the profile card elements
const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const locationElement = document.getElementById("location");
const occupationElement = document.getElementById("occupation");

// load the profile card data from local storage
const profileData = JSON.parse(localStorage.getItem("profileData")) || {};
nameElement.innerHTML = profileData.name || "John Doe";
ageElement.innerHTML = profileData.age || "30";
locationElement.innerHTML = profileData.location || "New York";
occupationElement.innerHTML = profileData.occupation || "Software Developer";

// add event listeners to the buttons
const editButton = document.getElementById("edit-button");
const saveButton = document.getElementById("save-button");
const cancelButton = document.getElementById("cancel-button");
const profileCard = document.getElementById("profile-card");
const editForm = document.getElementById("edit-form");

editButton.addEventListener("click", function () {
    // show the edit form and populate with current values
    document.getElementById("edit-name").value = nameElement.innerHTML;
    document.getElementById("edit-age").value = ageElement.innerHTML;
    document.getElementById("edit-location").value = locationElement.innerHTML;
    document.getElementById("edit-occupation").value = occupationElement.innerHTML;
    profileCard.style.display = "none";
    editForm.style.display = "block";
});

cancelButton.addEventListener("click", function () {
    // hide the edit form and show the profile card
    editForm.style.display = "none";
    profileCard.style.display = "block";
});

saveButton.addEventListener("click", function () {
    // save the edited values to local storage and update the profile card
    const profileData = {
        name: document.getElementById("edit-name").value,
        age: document.getElementById("edit-age").value,
        location: document.getElementById("edit-location").value,
        occupation: document.getElementById("edit-occupation").value
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    nameElement.innerHTML = profileData.name;
    ageElement.innerHTML = profileData.age;
    locationElement.innerHTML = profileData.location;
    occupationElement.innerHTML = profileData.occupation;
    editForm.style.display = "none";
    profileCard.style.display = "block";
});