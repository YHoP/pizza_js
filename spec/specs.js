describe("Pizza", function() {
	it("creates a new pizza with the given size", function() {
		var myPizza = new Pizza("Nano 3\"");
		expect(myPizza.size).to.equal("Nano 3\"");
	});

	it("creates a new pizza with the given size and toppings choices ", function() {
		var myPizza = new Pizza("Nano 3\"");
		var myToppings = ["Pepperoni", "Pineapple", "Spinach"];
		myPizza.toppings = myToppings;
		expect(myPizza.toppings).to.eql(["Pepperoni", "Pineapple", "Spinach"]);
	});

	it("adds the size index method to Pizza", function() {
	    var myPizza = new Pizza("Micro 5\"");
	    expect(myPizza.sizeIndex()).to.equal(1);
	});

	it("adds the Price method to Pizza", function() {
			var myPizza = new Pizza("Normal 7\"");
			myPizza.toppings = ["Sausage", "Pineapple"];
			expect(myPizza.Price()).to.equal(13.2);
	});

	it("adds a topping to the Pizza toppings array", function() {
			var myPizza = new Pizza("Deca 11\"");
			myPizza.toppings = ["Sausage"];
			myPizza.addTopping("Spinach");
			expect(myPizza.toppings).to.eql(["Sausage", "Spinach"]);
	});

	it("remove a topping from the Pizza toppings array", function() {
			var myPizza = new Pizza("Tera 23\"");
			myPizza.toppings = ["Pepperoni", "Spinach", "Pineapple"];
			myPizza.removeTopping("Spinach");
			expect(myPizza.toppings).to.eql(["Pepperoni", "Pineapple"]);
	});

});

describe("Order", function() {
	it("creates a new Order with the given quantity and pizza ", function() {
		var myPizza = new Pizza("Giga 19\"");
		var myOrder = new Order(1, myPizza);
		expect(myOrder.quantity).to.equal(1);
		expect(myOrder.pizza).to.equal(myPizza);
	});

	it("adds the Total method to Order", function() {
			var myPizza = new Pizza("Mega 17\"");
			myPizza.toppings = ["Sausage", "Pineapple"];
			var myOrder = new Order(2, myPizza);
			expect(myOrder.Total()).to.equal("38.40");
	});

	it("adds the update Order method to update the given quantity and pizza", function() {
			var myPizza = new Pizza("Deca 11\"");
			var myOrder = new Order(2, myPizza);
			var newPizza = new Pizza("Hecto 13\"");
			myOrder.updateOrder(1, newPizza);
			expect(myOrder.quantity).to.equal(1);
			expect(myOrder.pizza).to.equal(newPizza);
	});
});
