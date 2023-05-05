var buttonmenu = document.querySelector(".buttonmenu")
var divprin = document.querySelector(".principal")
var divhidden1= document.querySelector(".escape")
function some ()
{
    
    if(divprin.style.display === "none") {
        divprin.style.display = "block";
    } else {
      divprin.style.display = "none";
      divhidden1.style.display ="block";
  }
}