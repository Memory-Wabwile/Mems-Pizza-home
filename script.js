function fcn(){
   
    let deliverr = document.getElementById("deliver");
    
    if(deliverr.checked==false){
        let delivery = 150;

       let location = prompt("Where would you like your pizza delivered?");
       alert (`You will have your pizza delivered at ${location}`);
    }
     
}
// $(document).ready(function(){
  
// });


  const order = document.querySelector("#button");
  order.addEventListener("click",function(e){
      e.preventDefault()
      console.log("hello world")
    const size = document.querySelector("#size");


let sizee = "";
  if (size.value == "small") {
    sizee = "small";
    console.log(sizee);
  } else if (size.value == "medium") {
    sizee = "medium";
    console.log(sizee);
  } else if (size.value == "large") {
    sizee = "large";
    console.log(sizee);
  }

const crusts = document.querySelector("#crust");
let crust = "";
  if (crusts.value == "crispy") {
    crust = "crispy";
    console.log(crust);
  } else if (crusts.value == "stuffed") {
    crust = "stuffed";
    console.log(crust);
  } else if (crusts.value == "gluten-free") {
    crust = "gluten-free";
    console.log(crust);
  }
  
const topping = document.querySelector("#toppings");


  let toppings = "";
  if (topping.value == "sausage") {
    toppings = "sausage";
    console.log(topping);
  } else if (topping.value == "mushroom") {
    toppings = "mushroom";
    console.log(topping);
  } else if (topping.value == "orgonzola") {
    toppings = "orgonzola";
    console.log(topping);
  }
  })