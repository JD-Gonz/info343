/* controller.js
    Controller for Shopping Cart page
*/

$(function(){
	//renders states
    statesView(usStates);

	//creates cart model
	var cartModel = createCartModel();
	
	//Gets Cart from local
	var cartJSON = localStorage.getItem('cart');
    if (cartJSON && cartJSON.length > 0) {
        cartModel.items = JSON.parse(cartJSON);
    }

	//renders cart
	var cartView = createCartView({
	    model: cartModel,
	    template: $('.cart-item-template'),
	    container: $('.cart-items-container')
	});

	// renders menu items
	createOrdersModel(com.dawgpizza.menu.pizzas, 'template-pizzas', 'meats');
	createOrdersModel(com.dawgpizza.menu.desserts, 'template-sides', 'desserts');
	createOrdersModel(com.dawgpizza.menu.drinks, 'template-sides', 'drinks');
   
	//addeds item to cart
    $('.add-to-cart').click(function(){
    	$('.cart-items-container').empty();

        if (this.getAttribute('data-size') != null)	{	
	        var newCartItem = {
		        type: this.getAttribute('data-type'),
		        name: this.getAttribute('data-name'),
		        price: this.getAttribute('data-price'),
				size: this.getAttribute('data-size')
		    };
	    } else {
	    	var newCartItem = {
		        type: this.getAttribute('data-type'),
		        name: this.getAttribute('data-name'),
		        price: this.getAttribute('data-price'),
		    };
	    }
        //push the new item on to the items array
        cartModel.items.push(newCartItem);

        cartView = createCartView({
		    model: cartModel,
		    template: $('.cart-item-template'),
		    container: $('.cart-items-container')
	    });
	    localStorage.setItem('cart', cartModel.toJSON());
    }); //addToCart event


	$('.dropdown-toggle').dropdown()

	$('#myTab a').click(function (e) {
		e.preventDefault()
	  	$(this).tab('show')
	});

	//Places order
	$('.place-order').click(function(){
		var cart = {
	        name: $('.cart-form').find('input[name="name"]').val(),
	        address1: $('.cart-form').find('input[name="address1"]').val(),
	        zip: $('.cart-form').find('input[name="zip"]').val(),
	        phone: $('.cart-form').find('input[name="phone"]').val(),
	        items: cartModel.items
    	}; //cart data
    		console.log(cart);
    	if (check()) {
			$('.cart-form').find('input[name="cart"]').val(JSON.stringify(cart));
		    //submit the form--this will navigate to an order confirmation page
		    $('.cart-form').submit();  

		}

	});

	//start over button (erases whats in your cart)
	$('.start-over').click(function(){
		$('.cart-items-container').empty();
		cartModel.items = [];
    	cartView = createCartView({
		    model: cartModel,
		    template: $('.cart-item-template'),
		    container: $('.cart-items-container')
	    });
	    localStorage.setItem('cart', cartModel.toJSON());
    });

}); //doc ready()


