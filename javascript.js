var buttonmenu = document.querySelector(".buttonmenu")
var divprin = document.querySelector(".principal")
var divprin2 = document.querySelector(".principal2")
var divprin3 = document.querySelector(".principal3")

function somemim()
{
    if(divprin.style.display === "none") {
        divprin.style.display = "inline-flex";
        divprin2.style.display = "none";
        divprin3.style.display = "none";
    } else {
      divprin.style.display = "inline-flex";
      divprin2.style.display = "none";
      divprin3.style.display = "none";
    
  }
}

function somecar()
{
    
    if(divprin2.style.display === "none") {
        divprin2.style.display = "inline-flex";
        divprin.style.display = "none";
        divprin3.style.display = "none";
     
    } else {
      divprin.style.display = "none";
      divprin3.style.display = "none";
      divprin2.style.display = "inline-flex";
  }
}

function someexp()
{
    if(divprin3.style.display === "none") {
      divprin3.style.display = "inline-flex";
      divprin.style.display = "none";
      divprin2.style.display = "none";
      
    } else {
      divprin.style.display = "none";
      divprin2.style.display = "none";
      divprin3.style.display = "inline-flex";

  
  }
}