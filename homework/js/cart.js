/*
    createCartModel()

    Creates a model for the shopping cart. 
*/

function createCartModel(config) {
	var cart = {
        items: [] //empty array
    }; //cart data

    cart.getPrice = function() {
        $('.sub-price').empty();
        $('.tax-price').empty();
        $('.total-price').empty();
            var idx;
            var subPrice = 0;
            for (idx = 0; idx < this.items.length; ++idx) {
                subPrice += parseFloat(this.items[idx].price);
            }
            var tax = (parseFloat(subPrice) * .095).toFixed(2);
            var total = (parseFloat(subPrice) + parseFloat(tax)).toFixed(2);
            $('.sub-price').empty().append(subPrice);
            $('.tax-price').empty().append(tax);
            $('.total-price').empty().append(total);
            if (parseFloat(total) < 20 ) {
                document.getElementById('order').disabled = true;
            } else {
              document.getElementById('order').disabled = false;
            }
    }; //getTotalPrice()

    
    cart.toJSON = function(cart) {
        return JSON.stringify(this.items);
    }

    return cart;
    
    cart.setItems = function() {
        this.items = items;
    } //setItems()

} //postCart()

function removeItem(config, idxToRemove) {
    config.items.splice(idxToRemove, 1);
    $('.cart-items-container').empty();
    cartView = createCartView({
            model: config,
            template: $('.cart-item-template'),
            container: $('.cart-items-container')
        });
    localStorage.setItem('cart', config.toJSON());
}