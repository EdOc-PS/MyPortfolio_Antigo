  
  var divprin = document.querySelector(".principal")
    var divprin2 = document.querySelector(".principal2")
      var divprin3 = document.querySelector(".principal3")

function somemim()
{
    if(divprin.style.display === "none") {
        divprin.style.display = "inline-flex";
         divprin2.style.display = "none";
           divprin3.style.display = "none";
    }else {
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
    }else {
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
      
    }else {
      divprin.style.display = "none";
        divprin2.style.display = "none";
          divprin3.style.display = "inline-flex";
  }
}

//Mudar cor
var body = document.querySelector("body")
  var text = document.querySelector(".text")
    var imguser = document.querySelector(".imguser")
      var contactme = document.querySelector(".contactme")

checkbox.addEventListener("change", function() {
  buttonmenucolor1.style.transition = "0s"
  buttonmenucolor2.style.transition = "0s"
  buttonmenucolor3.style.transition = "0s"
    buttonmenucolor4.style.transition = "0s"
    buttonmenucolor5.style.transition = "0s"
    buttonmenucolor6.style.transition = "0s"
      buttonmenucolor7.style.transition = "0s"
      buttonmenucolor8.style.transition = "0s"
      buttonmenucolor9.style.transition = "0s"
  
  buttonmenucolor1.style.background = "transparent"
  buttonmenucolor2.style.background = "transparent"
  buttonmenucolor3.style.background = "transparent"
    buttonmenucolor4.style.background = "transparent"
    buttonmenucolor5.style.background = "transparent"
    buttonmenucolor6.style.background = "transparent"
      buttonmenucolor7.style.background = "transparent"
      buttonmenucolor8.style.background = "transparent"
      buttonmenucolor9.style.background = "transparent"

  if (this.checked) {
    body.style.background = "#EFF5F5";
    text.style.color="#435055";
    text.style.fontWeight="500";
    imguser.style.border= "3px solid #3C486B";
    contactme.style.background= "#3C486B"; 
      contid1.style.background = "#dee0e0";
      contid2.style.background = "#dee0e0";
      contid3.style.background = "#dee0e0";
          menuid1.style.background ="#FED049";
          menuid2.style.background = "#FED049"; 
          menuid3.style.background = "#FED049"; 
        socialid1.style.background ="#3C486B";
        socialid2.style.background ="#3C486B";
        socialid3.style.background ="#3C486B";
          socialid4.style.background ="#3C486B";
          socialid5.style.background ="#3C486B";
          socialid6.style.background ="#3C486B";

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
      this.style.transition = "300ms"
    }
    buttonmenucolor1.onmouseout = function(){
      this.style.background = "#FED049"; 
    }
      buttonmenucolor2.onmouseover = function(){
        this.style.background = "#F7C04A"; 
        this.style.transition = "300ms"
      }
      buttonmenucolor2.onmouseout = function(){
        this.style.background = "#FED049"; 
      }
        buttonmenucolor3.onmouseover = function(){
          this.style.background = "#F7C04A"; 
          this.style.transition = "300ms"
        }
        buttonmenucolor3.onmouseout = function(){
          this.style.background = "#FED049";
        }
    buttonmenucolor4.onmouseover = function(){
      this.style.background = "#F7C04A"; 
      this.style.transition = "300ms"
    }
    buttonmenucolor4.onmouseout = function(){
       this.style.background = "#FED049"; 
    }
      buttonmenucolor5.onmouseover = function(){
        this.style.background = "#F7C04A"; 
        this.style.transition = "300ms"
      }
      buttonmenucolor5.onmouseout = function(){
        this.style.background = "#FED049"; 
      }
        buttonmenucolor6.onmouseover = function(){
          this.style.background = "#F7C04A"; 
          this.style.transition = "300ms"
        }
        buttonmenucolor6.onmouseout = function(){
          this.style.background = "#FED049"; 
        }
    buttonmenucolor7.onmouseover = function(){
      this.style.background = "#F7C04A"; 
      this.style.transition = "300ms"
    }
    buttonmenucolor7.onmouseout = function(){
       this.style.background = "#FED049"; 
    }
      buttonmenucolor8.onmouseover = function(){
        this.style.background = "#F7C04A"; 
        this.style.transition = "300ms"
      }
      buttonmenucolor8.onmouseout = function(){
        this.style.background = "#FED049"; 
      }
        buttonmenucolor9.onmouseover = function(){
          this.style.background = "#F7C04A"; 
          this.style.transition = "300ms"
        }
        buttonmenucolor9.onmouseout = function(){
          this.style.background = "#FED049"; 
        }
     
  }else{
    body.style.background = "#29a17d";
      text.style.color="#dee0e0"; 
      text.style.fontWeight="400"; 
        imguser.style.border="2px solid #f0ffff96"
        contactme.style.background= "#435055";
          contid1.style.background = "#27323A";
          contid2.style.background = "#27323A";
          contid3.style.background = "#27323A";
            menuid1.style.background ="#dee0e0";
            menuid2.style.background = "#dee0e0"; 
            menuid3.style.background = "#dee0e0";
          socialid1.style.background ="#435055";
          socialid2.style.background ="#435055";
          socialid3.style.background ="#435055";
            socialid4.style.background ="#435055";
            socialid5.style.background ="#435055";
            socialid6.style.background ="#435055";

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
    this.style.transition = "300ms"
  }
  buttonmenucolor1.onmouseout = function(){
    this.style.background = "#dee0e0";    
  }
    buttonmenucolor2.onmouseover = function(){
      this.style.background = "#cecfcf";
      this.style.transition = "300ms"
    }
    buttonmenucolor2.onmouseout = function(){
      this.style.background = "#dee0e0"; 
    }
      buttonmenucolor3.onmouseover = function(){
        this.style.background = "#cecfcf";
        this.style.transition = "300ms"
      }
      buttonmenucolor3.onmouseout = function(){
        this.style.background = "#dee0e0"; 
      }
  buttonmenucolor4.onmouseover = function(){
    this.style.background = "#cecfcf"; 
    this.style.transition = "300ms"
  }
  buttonmenucolor4.onmouseout = function(){
    this.style.background = "#dee0e0"; 
  }
    buttonmenucolor5.onmouseover = function(){
      this.style.background = "#cecfcf";
      this.style.transition = "300ms"
    }
    buttonmenucolor5.onmouseout = function(){
      this.style.background = "#dee0e0"; 
    }
      buttonmenucolor6.onmouseover = function(){
        this.style.background = "#cecfcf";
        this.style.transition = "300ms"
      }
      buttonmenucolor6.onmouseout = function(){
        this.style.background = "#dee0e0"; 
      }
  buttonmenucolor7.onmouseover = function(){
    this.style.background = "#cecfcf"; 
    this.style.transition = "300ms"
  }
  buttonmenucolor7.onmouseout = function(){
    this.style.background = "#dee0e0"; 
  }
    buttonmenucolor8.onmouseover = function(){
      this.style.background = "#cecfcf";
      this.style.transition = "300ms"
    }
    buttonmenucolor8.onmouseout = function(){
      this.style.background = "#dee0e0"; 
    }
      buttonmenucolor9.onmouseover = function(){
        this.style.background = "#cecfcf";
        this.style.transition = "300ms"
      }
      buttonmenucolor9.onmouseout = function(){
        this.style.background = "#dee0e0"; 
      }
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

 