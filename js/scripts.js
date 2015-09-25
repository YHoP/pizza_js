function Order(quantity, pizza){
  this.quantity = quantity;
  this.pizza = pizza;
}

function Pizza(size, topppings){
  this.size = pizzaSize;
  this.topppings = [];
}

Pizza.prototype.size = function() {
  return this.size;
}

Pizza.prototype.allTopppings = function() {
  var allTopppings;
  for (var i in this.topppings){
    allTopppings += this.topppings[i] + ", ";
  }
  return allTopppings;
}


$(document).ready(function() {



}); // end of document
