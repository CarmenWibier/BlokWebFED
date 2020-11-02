var deButton = document.querySelector("button");

deButton.addEventListener("click", veranderHetMenu);

function veranderHetMenu() {
    
  let hetMenu = document.querySelector(".hamburger-menu");
    
    hetMenu.classList.toggle("anders");
  }

  
var hetLabel = document.querySelector(".labelOverOns");

hetLabel.addEventListener("click", veranderDeDropdown);

function veranderDeDropdown() {
    
  let hetMenu = document.querySelector(".overOns");
    
    hetMenu.classList.toggle("actief");
  }

var hetLabelB = document.querySelector(".labelBedrijfsleven");

hetLabelB.addEventListener("click", veranderDeDropdownB);
  
function veranderDeDropdownB() {
      
  let deDropdown = document.querySelector(".bedrijfsleven");
      
    deDropdown.classList.toggle("actief");
}

var hetLabelH = document.querySelector(".labelHandigeLinks");

hetLabelH.addEventListener("click", veranderDeDropdownH);
  
function veranderDeDropdownH() {
      
  let deDropdownH = document.querySelector(".handigeLinks");
      
    deDropdownH.classList.toggle("actief");
}
  
  
