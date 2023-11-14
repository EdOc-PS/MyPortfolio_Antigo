var divprin0 = document.querySelector(".principal0")
  var divprin = document.querySelector(".principal")
    var divprin2 = document.querySelector(".principal2")
      var divprin3 = document.querySelector(".principal3")


function somehome()
  {
    if(divprin0.style.display === "none") {
      divprin0.style.display = "inline-flex";
        divprin.style.display = "none";
          divprin2.style.display = "none";
           divprin3.style.display = "none";
    }else {
     divprin0.style.display = "inline-flex";
      divprin.style.display = "none";
        divprin2.style.display = "none";
          divprin3.style.display = "none";
   }
 }

function somemim()
{
    if(divprin.style.display === "none") {
      divprin0.style.display = "none";
        divprin.style.display = "inline-flex";
         divprin2.style.display = "none";
           divprin3.style.display = "none";
    }else {
    divprin0.style.display = "none";
      divprin.style.display = "inline-flex";
        divprin2.style.display = "none";
          divprin3.style.display = "none";
  }
}
function somecar()
{
    if(divprin2.style.display === "none") {
      divprin0.style.display = "none";
        divprin2.style.display = "inline-flex";
          divprin.style.display = "none";
            divprin3.style.display = "none"; 
    }else {
    divprin0.style.display = "none";
      divprin.style.display = "none";
        divprin3.style.display = "none";
          divprin2.style.display = "inline-flex";
  }
}
function someexp()
{
    if(divprin3.style.display === "none") {
    divprin0.style.display = "none";
      divprin3.style.display = "inline-flex";
        divprin.style.display = "none";
          divprin2.style.display = "none";
      
    }else {
     divprin0.style.display = "none";
      divprin.style.display = "none";
        divprin2.style.display = "none";
          divprin3.style.display = "inline-flex";
  }
}

//Mudar cor
var body = document.querySelector("body")
var cont = document.querySelector("cont")

checkbox.addEventListener("change", function() {
  if (this.checked) {
    body.className = "darkMode-body";  
    cont.style.background ="#576F72"

  
      
  }else{
    body.className  = "lightMode-body";  
   
 
  }
});

/** select lenguage **/
const select = document.querySelector(".select-lenguage"); 
const selectButton = document.querySelector(".select-button");
const selectoption = document.querySelectorAll(".option");
const selectoptions = document.querySelector(".select-option");
const selecttext = document.querySelector(".select-text");
const i2 = document.querySelector(".fa-solid.fa-caret-down");

selectButton.addEventListener("click", ()=>{
  if(selectoptions.style.display === "block"){
    selectoptions.style.display="none";
    i2.style.transform = "rotate(0)";

  }else{
    selectoptions.style.display="block";
    i2.style.transform = "rotate(180deg)";
  }
});
  selectoption.forEach(option => {
    option.addEventListener("click", ()=>{
      let selectedOptionText = option.querySelector(".option-text").innerText;
      selecttext.innerText = selectedOptionText;
      selectoptions.style.display="none";
      i2.style.transform = "rotate(0)";
  });
});

 