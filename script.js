let input = document.querySelector(".inputbox");
let submitBtn = document.querySelector(".submit");
let result = document.querySelector(".result_box");
let resetBtn = document.querySelector(".reset");
let error = document.querySelector(".error");


submitBtn.addEventListener("click",function() {
    for(let i =1 ; i <=10; i++){
      result.innerHTML += `<h2>${input.value} x ${i} = ${input.value*i}</h2>`;
      result.style.border ="1px solid blueviolet";
      result.style.color = "green"
      if (isNaN(input.value)) {
        error.innerHTML = "You can only enter number"
        result.innerHTML = "";
        error.style.color = "red"
        input.style.border ="2px solid red"
        result.style.border ="1px solid transparent";
      }else if(input.value == ""){
        result.innerHTML ="";
        error.innerHTML = "Enter number";
        input.style.border ="2px solid red"
        error.style.color = "red"
        result.style.border ="1px solid transparent";
      }else{
        input.style.border ="2px solid black"
        error.innerHTML = "";
        result.style.border ="1px solid transparent";

      }
    }
})

resetBtn.addEventListener("click",function () {
    result.innerHTML = "";
    input.value = "";
    error.innerHTML = "";
    result.style.border ="1px solid transparent";
})