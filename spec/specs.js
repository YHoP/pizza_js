describe("Pizza", function() {
	it("creates a new pizza with the given size", function() {
		var myPizza = new Pizza("Small 10\"");
		expect(myPizza.size).to.equal("Small 10\"");
	});
});

describe("Pizza", function() {
	it("creates a new pizza with the given size and topppings choices ", function() {
		var myPizza = new Pizza("Small 10\"");
		var myTopppings = ["Pepperoni", "Pineapple", "Spinach"];
		myPizza.topppings = myTopppings;
		expect(myPizza.topppings).to.eql(["Pepperoni", "Pineapple", "Spinach"]);
	});
});

describe("Pizza.sizeIndex()", function() {
	it("adds the sizeIndex method to Pizza", function() {
	    var myPizza = new Pizza("Medium 12\"");
	    expect(myPizza.sizeIndex()).to.equal(1);
	});
});

describe("Pizza.Price()", function() {
	it("adds the Price method to Pizza", function() {
			var myPizza = new Pizza("Large 14\"");
			myPizza.topppings = ["Sausage", "Pineapple"];
			expect(myPizza.Price()).to.equal(13.2);
	});
});

describe("Order", function() {
	it("creates a new Order with the given quantity and pizza ", function() {
		var myPizza = new Pizza("Medium 12\"");
		var myOrder = new Order(1, myPizza);
		expect(myOrder.quantity).to.equal(1);
		expect(myOrder.pizza).to.equal(myPizza);
	});
});

describe("Order.Total()", function() {
	it("adds the Total method to Order", function() {
			var myPizza = new Pizza("Large 14\"");
			myPizza.topppings = ["Sausage", "Pineapple"];
			var myOrder = new Order(2, myPizza);
			expect(myOrder.Total()).to.equal(26.4);
	});
});
