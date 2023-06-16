/** select2 **/

/****/

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
    var buttonmenucolor1 = document.getElementById("buttonmenucolor1")
      var buttonmenucolor2 = document.getElementById("buttonmenucolor2")
        var buttonmenucolor3 = document.getElementById ("buttonmenucolor3")
  var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    body.style.background = "#EFF5F5";
      cont.style.background = "#dee0e0";
  
        menu.style.background ="#FED049";
          social.style.background ="#3C486B";
    social2.style.background ="#3C486B";
      text.style.color="#435055";
        text.style.fontWeight="500";
          imguser.style.border= "3px solid #3C486B";

    contactme.style.background= "#3C486B"; 
      contactme.onmouseover = function(){
        this.style.background = "#dee0e0";
          this.style.color = "#435055";

    }
      contactme.onmouseout = function(){
        this.style.background = "#3C486B";
          this.style.color = "#dee0e0"; 
      
    }
    /*Change color buttons menu*/
    buttonmenucolor1.onmouseover = function(){
      this.style.background = "#F7C04A";
  
    }
    buttonmenucolor1.onmouseout = function(){
      this.style.background = "#FED049"; 
  
    }
      buttonmenucolor2.onmouseover = function(){
        this.style.background = "#F7C04A"; 
  
      }
      buttonmenucolor2.onmouseout = function(){
        this.style.background = "#FED049"; 
      
      }
        buttonmenucolor3.onmouseover = function(){
          this.style.background = "#F7C04A"; 
      
        }
        buttonmenucolor3.onmouseout = function(){
          this.style.background = "#FED049";
        
        }
    buttonmenucolor1.style.background = "transparent"
      buttonmenucolor2.style.background = "transparent"
        buttonmenucolor3.style.background = "transparent"
     
  }else{
    body.style.background = "#29a17d";
    cont.style.background = "#27323A";
      menu.style.background = "#dee0e0";
        social.style.background = "#435055";
   social2.style.background ="#435055";
    text.style.color="#dee0e0"; 
      text.style.fontWeight="400"; 
        imguser.style.border="2px solid #f0ffff96"
    contactme.style.background= "#435055";
     
    contactme.onmouseover =function(){
      this.style.background = "#29a17d";
          this.style.color = "#dee0e0";
   
  }
    contactme.onmouseout = function(){
      this.style.background = "#435055";
        this.style.color = "#dee0e0"; 
        
    
 }
/*Change color buttons menu*/
  buttonmenucolor1.onmouseover = function(){
    this.style.background = "#cecfcf"; 
    
  }
  buttonmenucolor1.onmouseout = function(){
    this.style.background = "#dee0e0"; 
    
  }
    buttonmenucolor2.onmouseover = function(){
      this.style.background = "#cecfcf";
       
    }
    buttonmenucolor2.onmouseout = function(){
      this.style.background = "#dee0e0"; 
     
    }
      buttonmenucolor3.onmouseover = function(){
        this.style.background = "#cecfcf";
     
      }
      buttonmenucolor3.onmouseout = function(){
        this.style.background = "#dee0e0"; 
      
      }
   
      
  buttonmenucolor1.style.background = "transparent"
    buttonmenucolor2.style.background = "transparent"
      buttonmenucolor3.style.background = "transparent"
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

 