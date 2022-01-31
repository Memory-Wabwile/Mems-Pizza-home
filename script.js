// function fcn() {
//   let deliverr = document.getElementById("deliver");

//   if (deliverr.checked == false) {
//     let delivery = 150;

//     let location = prompt("Where would you like your pizza delivered?");
//     alert(`You will have your pizza delivered at ${location}`);
//   }
// }
// $(document).ready(function(){

// });

// const order = document.querySelector("#button");
// order.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("hello world");
//   const size = document.querySelector("#size");

//   let sizee = "";
//   if (size.value == "small") {
//     sizee = "small";
//     console.log(sizee);
//   } else if (size.value == "medium") {
//     sizee = "medium";
//     console.log(sizee);
//   } else if (size.value == "large") {
//     sizee = "large";
//     console.log(sizee);
//   }

//   const crusts = document.querySelector("#crust");
//   let crust = "";
//   if (crusts.value == "crispy") {
//     crust = "crispy";
//     console.log(crust);
//   } else if (crusts.value == "stuffed") {
//     crust = "stuffed";
//     console.log(crust);
//   } else if (crusts.value == "gluten-free") {
//     crust = "gluten-free";
//     console.log(crust);
//   }

//   const topping = document.querySelector("#toppings");

//   let toppings = "";
//   if (topping.value == "sausage") {
//     toppings = "sausage";
//     console.log(topping);
//   } else if (topping.value == "mushroom") {
//     toppings = "mushroom";
//     console.log(topping);
//   } else if (topping.value == "orgonzola") {
//     toppings = "orgonzola";
//     console.log(topping);
//   }
// });

// class pizzaType{
//   constructor(pizza){
//     this.pizza=pizza
//   }
// }

// let pizzaType = {
//   pepperoni: "pepperoni",
//   boerewors: "boerewors",
//   veggie: "veggieTikka"
// };

let pizzaPrice = {
  small:800,
  medium:1000,
  large:1200
}

let crustPrice={
  crispy:100,
  stuffed:150,
  gluttenFree:200
}

class crust{
  constructor(crust){
    this.crustName = crust,
    this.crustPrice = crustPrice[crust]
  }
}

let toppingsPrice={
  sausage:50,
  mushroom:100,
  gorgonzola:150
}

class toppings{
  constructor(tops){
    this.toppingsName=tops,
    this.toppingsPrice=toppingsPrice[tops]
  }
}

class order{
  constructor(pizzaType , pizzaSize , toppings , crust , number){
    this.pizzaType=pizzaType,
    this.pizzaSize=pizzaSize,
    this.pizzaPrice=pizzaPrice[pizzaSize],
    this.crust=crust,
    this.toppings=toppings,
    this.number=number
  }
}

let form = document.querySelector("form")

form.addEventListener("submit" , function(e){
  e.preventDefault()
let pizza=document.querySelector("#type").value
let size =document.querySelector("#size").value
let crustt =document.querySelector("#crust").value
let number = document.querySelector("#qty").value
let delivery =  document.querySelector("#deliver")
let topppings =document.querySelectorAll(".toppps")
let toppingsArray=[]
topppings.forEach(element => {
  if (element.checked){
    let obj = new toppings(element.value)
    toppingsArray.push(obj)
  }
})

let newCrust = new crust(crustt)


let customerOrder= new order(pizza,size,toppingsArray,newCrust,number)

let toppingsTotal = []

customerOrder.toppings.forEach(item =>{
  toppingsTotal.push(item.toppingsPrice)
})
toppingsTotal=toppingsTotal.reduce((acc , item) => acc + item,0)
// console.log(customerOrder)
// console.log(toppingsTotal)

let orderTotal =( customerOrder.pizzaPrice + customerOrder.crust.crustPrice + toppingsTotal) * parseInt(number)


if (delivery.checked){
 let delivery = 150 ;
 orderTotal = orderTotal + delivery;
}
console.log(orderTotal)
})




