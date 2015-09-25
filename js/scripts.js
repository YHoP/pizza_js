var pizzaSizes = ["Small 10\"", "Medium 12\"", "Large 14\"", "Family Size 16\""];
var alltoppings = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese", "Black olives", "Green peppers", "Pineapple", "Spinach"];

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
}

Pizza.prototype.deleteTopping = function(topping) {

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
  for(var i in pizzaSizes){
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

  var myPizza = new Pizza("Small 10\"");
  var myOrder = new Order(1, myPizza);

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
      if(myPizza.toppings.indexOf($(this).val()) > -1){

      }
    }

    console.log(myPizza.toppings);

    myOrder.pizza = myPizza;
    $(".total").text("$ " + myOrder.Total());
  });

  $(".quantity").keyup(function() {
    myOrder.quantity = $("input[name=quantity]").val();
    $(".total").text("$ " + myOrder.Total());
  });

  $(".quantity").change(function() {
    myOrder.quantity = $("input[name=quantity]").val();
    $(".total").text("$ " + myOrder.Total());
  });

  $("#addToCart").click(function() {

    $(".total").text("$ " + myOrder.Total());
  }); // end of addToCart click

}); // end of document ready
