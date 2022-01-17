$(document).ready(function(){
    function fcn(){
        let deliverr = document.getElementById("deliver");

        if(deliverr.checked==true){
            let delivery = 150;
           let location = prompt("Where would you like your pizza delivered?");
           alert ("You will have your pizza delivered at ${location}");
        }
         break 
    }
});

let sizee = ""
if(small.selected){
    sizee = "small";
}
else if (medium.selected){
    sizee = "medium"
}
else if (localStorage.selected){
    sizee = "large"
};

if(sizee=="small"){
    $("#size").append("small")
}
else if (sizee=="medium"){
    $("#size").append("medium")
}
else if (sizee=="large"){
    $("#size").append("large")
}

let crust=""
if (Crispy.selected){
    crust="Crispy";
}
else if(Stuffed.selected){
    crust="Stuffed";
}
else if (Gluten-free.selected){
    crust="Gluten-free";
}

if(crust=="Crispy"){
    $("#crust").append("crispy")
}
else if(crust=="Stuffed"){
    $("#crust").append("stuffed")
}
else if(crust=="Gluten-free"){
    $("#crust").append("Gluten-free")
}

let toppings=""
if (sausage.checked){
    toppings="sausage"
}
else if (mushroom.checked){
    toppings="mushroom"
}
else if (gorgonzola.checked){
    toppings="Gorgonzola"
}
if(toppings=="sausage"){
    $("#toppings").append("sausage")
}
else if(toppings=="mushroom"){
    $("#toppings").append("mushroom")
}
else if(toppings=="gorgonzola"){
    $("#toppings").append("gorgonzola")
}
