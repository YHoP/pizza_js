describe("Pizza", function() {
	it("creates a new pizza with the given size and topppings choices ", function() {
		var myPizza = new Pizza("Small 10\"", ["Pepperoni", "Pineapple", "Spinach"]);
		expect(myPizza.size).to.equal("Small 10\"");
		expect(myPizza.topppings).to.eql(["Pepperoni", "Pineapple", "Spinach"]);
	});

	it("adds the sizeIndex method to Pizza", function() {
	    var myPizza = new Pizza("Medium 12\"", ["Pepperoni", "Pineapple"]);
	    expect(myPizza.sizeIndex()).to.equal(1);
	});

	it("adds the Price method to Pizza", function() {
			var myPizza = new Pizza("Large 14\"", ["Sausage", "Pineapple"]);
			expect(myPizza.Price()).to.equal(13.2);
	});
});

describe("Order", function() {
	it("creates a new Order with the given quantity and pizza ", function() {
		var myPizza = new Pizza("Medium 12\"", ["Pepperoni", "Pineapple"]);
		var myOrder = new Order(1, myPizza);
		expect(myOrder.quantity).to.equal(1);
		expect(myOrder.pizza).to.equal(myPizza);
	});

	it("adds the Total method to Order", function() {
			var myPizza = new Pizza("Large 14\"", ["Sausage", "Pineapple"]);
			var myOrder = new Order(2, myPizza);
			expect(myOrder.Total()).to.equal(26.4);
	});
});
