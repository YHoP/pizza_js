describe('Pizza', function() {
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
