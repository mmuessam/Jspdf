const button = document.getElementById("button");
const form = document.getElementById("form");

const NameV = document.getElementById("name-v");
const dateV = document.getElementById("date-v");
const numMdanyV = document.getElementById("mony_num-v");
const segnitionerV = document.getElementById("segnitioner-v");
const phonenumV = document.getElementById("phonenum-v");
const yearNumV = document.getElementById("year_num-v");
const monyNumV = document.getElementById("mony_num-v");
var alerts = document.getElementById("alert");

var Name = document.getElementById("name");
var date = document.getElementById("date");
var numMdany = document.getElementById("numder__md");
var segnitioner = document.getElementById("segnitioner");
var phonenum = document.getElementById("phonenum");
var yearNum = document.getElementById("year_num");
var monyNum = document.getElementById("mony_num");

// Check which page is currently loaded


if (window.location.pathname === "/index.html") {
  // Code for page1.html
  button.addEventListener("click", function () {
      
    // Get the data from the input field

    if (NameV.value === "" ||
        dateV.value === "" ||
        numMdanyV.value === "" ||
        segnitionerV.value === "" ||
        phonenumV.value === "" ||
        yearNumV.value === "" ||
        monyNumV.value === "" ) {

            setTimeout(function() {
                alerts.style.display ="none"
              }, 4000);
             alerts.style.display ="block"
              
            
    }else{

      var dataObject = {
        NameOb: NameV.value,
        dateOb: dateV.value,
        numMdanyOb: numMdanyV.value,
        segnitionerOb: segnitionerV.value,
        phonenumOb: phonenumV.value,
        yearNumOb: yearNumV.value,
        monyNumOb: monyNumV.value,
      };

      // Store the data object in localStorage
      localStorage.setItem("dataObject", JSON.stringify(dataObject));

      // Redirect to page2.html
    //   window.location.href = "pdf.html";
      window.open("pdf.html", "_blank");

  

    }});
    
} else if (window.location.pathname === "/pdf.html") {
  // Code for page2.html
  // Retrieve the data from localStorage
  var dataObjectJSON = localStorage.getItem('dataObject');
    
  // Parse the JSON string back into an object
  var dataObject = JSON.parse(dataObjectJSON);
  

  // Display the data on the page
  Name.textContent = dataObject.NameOb
  date.textContent = dataObject.dateOb
  numMdany.textContent = dataObject.numMdanyOb
  segnitioner.textContent = dataObject.segnitionerOb
  phonenum.textContent = dataObject.phonenumOb
  yearNum.textContent = dataObject.yearNumOb
  monyNum.textContent = dataObject.monyNumOb


  
}
// function NewTab() {
//     window.open(
//     "padf.html", "_blank");
// }

function showPopup() {
    // Create a new div element to hold the popup
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Load the content of popup.html into the popup div
    fetch("pdf.html")
        .then(response => response.text())
        .then(content => {
            popup.innerHTML = content;
            
            // Check if 'popupContainer' exists before appending
            const popupContainer = document.getElementById("popupContainer");
            if (popupContainer) {
                popupContainer.appendChild(popup);
            } else {
                console.error("popupContainer is null or does not exist.");
            }
        });

    // Add event listener to close the popup when the close button is clicked
    popup.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup")) {
            // Check if 'popupContainer' exists before removing
            const popupContainer = document.getElementById("popupContainer");
            if (popupContainer) {
                popupContainer.removeChild(popup);
            } else {
                console.error("popupContainer is null or does not exist.");
            }
        }
    });
}

// Add click event listener to show the popup
