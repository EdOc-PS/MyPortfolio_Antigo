var divprin0 = document.querySelector(".principal0")
var divprin = document.querySelector(".principal")
var divprin2 = document.querySelector(".principal2")
var divprin3 = document.querySelector(".principal3")


function somehome() {
  if (divprin0.style.display === "none") {
    divprin0.style.display = "inline-flex";
    divprin.style.display = "none";
    divprin2.style.display = "none";
    divprin3.style.display = "none";
  } else {
    divprin0.style.display = "inline-flex";
    divprin.style.display = "none";
    divprin2.style.display = "none";
    divprin3.style.display = "none";
  }
}

function somemim() {
  if (divprin.style.display === "none") {
    divprin0.style.display = "none";
    divprin.style.display = "inline-flex";
    divprin2.style.display = "none";
    divprin3.style.display = "none";
  } else {
    divprin0.style.display = "none";
    divprin.style.display = "inline-flex";
    divprin2.style.display = "none";
    divprin3.style.display = "none";
  }
}
function somecar() {
  if (divprin2.style.display === "none") {
    divprin0.style.display = "none";
    divprin2.style.display = "inline-flex";
    divprin.style.display = "none";
    divprin3.style.display = "none";
  } else {
    divprin0.style.display = "none";
    divprin.style.display = "none";
    divprin3.style.display = "none";
    divprin2.style.display = "inline-flex";
  }
}
function someexp() {
  if (divprin3.style.display === "none") {
    divprin0.style.display = "none";
    divprin3.style.display = "inline-flex";
    divprin.style.display = "none";
    divprin2.style.display = "none";

  } else {
    divprin0.style.display = "none";
    divprin.style.display = "none";
    divprin2.style.display = "none";
    divprin3.style.display = "inline-flex";
  }
}

/** select lenguage **/
const select = document.querySelector(".select-lenguage");
const selectButton = document.querySelector(".select-button");
const selectoption = document.querySelectorAll(".option");
const selectoptions = document.querySelector(".select-option");
const selecttext = document.querySelector(".select-text");
const i2 = document.querySelector(".fa-solid.fa-caret-down");

selectButton.addEventListener("click", () => {
  if (selectoptions.style.display === "block") {
    selectoptions.style.display = "none";
    i2.style.transform = "rotate(0)";

  } else {
    selectoptions.style.display = "block";
    i2.style.transform = "rotate(180deg)";
  }
});
selectoption.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOptionText = option.querySelector(".option-text").innerText;
    selecttext.innerText = selectedOptionText;
    selectoptions.style.display = "none";
    i2.style.transform = "rotate(0)";
  });
});

//Mudar cor
var body = document.querySelector("body")
var cont = document.querySelectorAll(".cont")
var divsocial = document.querySelectorAll(".divsocial")
var button = document.querySelectorAll("button")
var dcurriculo = document.querySelector(".Dcurriculo")
var habimg = document.querySelector(".habimg")
var carwork = document.querySelector(".carwork")
var aboutimg = document.querySelectorAll(".aboutimg")

checkbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList = "darkMode-body";
    cont.forEach(function (cont) {
      cont.classList.toggle("darkMode-cont");
    });
    dcurriculo.classList.toggle("darkMode-dcurriculo")
    button.forEach(function (button) {
      button.classList.toggle("darkMode-button")
    });
    habimg.classList.toggle("darkMode-habimg")
    carwork.classList.toggle("darkMode-carwork")
    aboutimg.forEach(function (aboutimg) {
      aboutimg.classList.toggle("darkMode-aboutimg")
    });
   
    selectoptions.style.display = "none";
    i2.style.transform = "rotate(0)";
  } else {
    body.classList = "lightMode-body";
    cont.forEach(function (cont) {
      cont.classList.toggle("darkMode-cont");
    });
    dcurriculo.classList.toggle("darkMode-dcurriculo")
    button.forEach(function (button) {
      button.classList.toggle("darkMode-button")
    });
    habimg.classList.toggle("darkMode-habimg")
    carwork.classList.toggle("darkMode-carwork")
    aboutimg.forEach(function (aboutimg) {
      aboutimg.classList.toggle("darkMode-aboutimg")
    });


    selectoptions.style.display = "none";
    i2.style.transform = "rotate(0)";
  }
});