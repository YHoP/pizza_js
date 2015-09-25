var pizzaSizes = ['Small 10\"', 'Medium 12\"', 'Large 14\"', 'Family Size 16\"'];
var allTopppings = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra cheese", "Black olives", "Green peppers", "Pineapple", "Spinach"];

function Order(quantity, pizza){
  this.quantity = quantity;
  this.pizza = pizza;
}

Order.prototype.Total = function() {
  return this.quantity * this.pizza.Price;
}

function Pizza(size){
  this.size = size;
  this.topppings = [];
}

Pizza.prototype.sizeIndex = function() {
  return pizzaSizes.indexOf(this.size);
}

Pizza.prototype.Price = function() {
  var pizzaPrice = 8;
  pizzaPrice += (this.sizeIndex * 2 + this.topppings.length * 1);
  return pizzaPrice;
}

function appendSize (){
  // append radio input
  var text = "<select name='pizzaSize'>";
  for(var i in pizzaSizes){
    text += "<option value='"+ (10 + i * 2) +"'>"+ pizzaSizes[i] +"</option>";

    // append radio inout
    $(".pizzaSize_radio").append("<label><input type='radio' name='pizzaSize' id='size" + (10 + i * 2) + "' value='"+ (10 + i * 2) +"'> "+ pizzaSizes[i] +"</label><br>");
  }
  text += "</select>";
  $(".pizzaSize_dropdown").append(text);
}

function appendToppings (){
  for(var i in allTopppings){
    $(".pizzaToppings").append("<label><input type='checkbox' value='"+ allTopppings[i] +"'> "+ allTopppings[i] +"</label><br>");
  }
}



$(document).ready(function() {

  appendSize();
  appendToppings();


  $("#addToCart").click(function() {



}); // end of addToCart click

}); // end of document ready
