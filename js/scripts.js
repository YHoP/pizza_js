var pizzaSizes = ["Nano 3\"", "Micro 5\"", "Normal 7\"", "Deca 11\"", "Hecto 13\"", "Mega 17\"", "Giga 19\"", "Tera 23\""];
var alltoppings = ["Snake Venom", "Vampire Blood", "Bat Fangs", "Witch\'s Fingers", "Alligator Eyes", "Fried Crickets", "Seasoned Spider",  "Zombie Brain", "Goblin Bone", "Orc Intestine"];

function Pizza(size){
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.sizeIndex = function() {
  return pizzaSizes.indexOf(this.size);
}

Pizza.prototype.Price = function() {
  var pizzaPrice = 8;
  pizzaPrice += (this.sizeIndex() * 2 + this.toppings.length * 0.6);
  return pizzaPrice;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  return this.toppings;
}

Pizza.prototype.removeTopping = function(topping) {
  var index = this.toppings.indexOf(topping);
  delete this.toppings[index];
  this.toppings.sort();
  this.toppings.pop();
  return this.toppings;
}

function Order(quantity, pizza){
  this.quantity = quantity;
  this.pizza = pizza;
}

Order.prototype.Total = function() {
  var total = (this.quantity * this.pizza.Price()).toFixed(2);
  return total;
}

Order.prototype.updateOrder = function(quantity, pizza){
  this.quantity = quantity;
  this.pizza = pizza;
}

function appendSize (){
  $(".pizzaSize").append("<label><input type='radio' name='pizzaSize' value='"+ pizzaSizes[0] +"' checked> "+ pizzaSizes[0] +"</label><br>");
  for(var i = 1; i < pizzaSizes.length; i ++){
    $(".pizzaSize").append("<label><input type='radio' name='pizzaSize' value='"+ pizzaSizes[i] +"'> "+ pizzaSizes[i] +"</label><br>");
  }
}

function appendToppings (){
  for(var i in alltoppings){
    $(".pizzaToppings").append("<label><input type='checkbox' name='toppings' value='"+ alltoppings[i] +"'> "+ alltoppings[i] +"</label><br>");
  }
}


$(document).ready(function() {

  appendSize();
  appendToppings();
  $("#purchase").hide();
  // initial quantity, pizza size and order
  var quantity = 1;
  var myPizza = new Pizza("Small 10\"");
  var myOrder = new Order(quantity, myPizza);

  $(":radio").change(function() {
    myPizza.size = $(this).val();
    myOrder.pizza = myPizza;
    $(".total").text("$ " + myOrder.Total());
  });

  $(":checkbox").click(function() {
    if($(this).is(":checked")){
      if(myPizza.toppings.indexOf($(this).val()) < 0){
        myPizza.addTopping($(this).val());
      }
    } else {
        myPizza.removeTopping($(this).val());
    }
    $(".total").text("$ " + myOrder.Total());
  });

  $(".quantity").keyup(function() {
    myOrder.quantity = Math.abs($("input[name=quantity]").val());
    $(".total").text("$ " + myOrder.Total());
  });

  $(".quantity").change(function() {
    myOrder.quantity = Math.abs($("input[name=quantity]").val());
    $(".total").text("$ " + myOrder.Total());
  });

  $("#checkOut").click(function() {
    $("#placeOrder").hide();
    $("#purchase").show();
    $(".total").text("$ " + myOrder.Total());
  });

}); // end of document ready
