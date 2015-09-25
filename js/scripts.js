var pizzaSizes = ["Small 10\"", "Medium 12\"", "Large 14\"", "Family Size 16\""];
var allTopppings = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese", "Black olives", "Green peppers", "Pineapple", "Spinach"];

function Pizza(size){
  this.size = size;
  this.topppings = [];
}

Pizza.prototype.sizeIndex = function() {
  return pizzaSizes.indexOf(this.size);
}

Pizza.prototype.Price = function() {
  var pizzaPrice = 8;
  pizzaPrice += (this.sizeIndex() * 2 + this.topppings.length * 0.6);
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
    $(".pizzaSize_radio").append("<label><input type='radio' name='pizzaSize' value='"+ (10 + i * 2) +"'> "+ pizzaSizes[i] +"</label><br>");
  }
}

function appendToppings (){
  for(var i in allTopppings){
    $(".pizzaToppings").append("<label><input type='checkbox' value='"+ allTopppings[i] +"'> "+ allTopppings[i] +"</label><br>");
  }
}

$(document).ready(function() {

  appendSize();
  appendToppings();
  var myOrder = new Order() ;

  $("#addToCart").click(function() {

  var pizzaSize = $("input[name=pizzaSize]:checked").val();
  console.log("radio :" + pizzaSize);

  $(".total").text();



}); // end of addToCart click

}); // end of document ready
