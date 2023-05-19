
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

//Mudar cor

var body = document.querySelector("body")
  var cont = document.querySelector(".cont")
    var menu = document.querySelector(".menu")
      var social = document.querySelector(".social:nth-child(1)")
  var social2 = document.querySelector(".social:nth-child(5)")
    var text = document.querySelector(".text")
      var imguser = document.querySelector(".imguser")
        var contactme = document.querySelector(".contactme")
    var buttonmenu = document.getElementById("buttonmenu")
 
function changecolordark(){

     body.style.background = "#29a17d";
      cont.style.background = "#27323A";
        menu.style.background = "#dee0e0";
          social.style.background = "#435055";
     social2.style.background ="#435055";
      text.style.color="#dee0e0"; 
        text.style.fontWeight="400"; 
          imguser.style.border="2px solid #f0ffff96"
      contactme.style.background= "#435055";
 } 

function changecolorlight(){
    body.style.background = "#EFF5F5";
      cont.style.background = "#dee0e0";
        menu.style.background ="#FED049";
          social.style.background ="#3C486B";
    social2.style.background ="#3C486B";
      text.style.color="#435055";
        text.style.fontWeight="500";
          imguser.style.border= "3px solid #3C486B";
    contactme.style.background= "#3C486B"; 
    buttonmenu.classList.remove(".buttonmenu");
    buttonmenu.classList.add(".buttonmenulight");
  /**  buttonmenu.addEventListener('mouseover',function(){
      buttonmenu.style.background = "#f7b016";
      
  })
    buttonmenu.addEventListener('mouseleave',function(){
      buttonmenu.style.background = "#FED049";
 })**/
}