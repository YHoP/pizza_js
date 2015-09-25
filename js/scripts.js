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

function Order(quantity, pizza){
  this.quantity = quantity;
  this.pizza = pizza;
}

Order.prototype.Total = function() {
  return this.quantity * this.pizza.Price();
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

function getPizzaSize (index) {
    return pizzaSizes[index];
}

$(document).ready(function() {

  appendSize();
  appendToppings();

  var myPizza;
  var myOrder;


  $("#addToCart").click(function() {
    myPizza = new Pizza($("input[name=pizzaSize]:checked").val());

    $.each($("input[name='toppings']:checked"), function(){
        myPizza.toppings.push($(this).val());
    });

    var quantity = $("input[name=quantity]").val();
    myOrder = new Order(quantity, myPizza);

    $(".total").text("$ " + myOrder.Total().toFixed(2));
  }); // end of addToCart click

}); // end of document ready
