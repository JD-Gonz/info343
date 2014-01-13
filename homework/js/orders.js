
function createOrdersModel(entries, templates, containers) {

	var instance;
	var template = $('.' + templates);
	var container = $('.' + containers);
	var vegetarians = $('.vegetarians');
	$.each(entries, function(){
	    instance = template.clone();
	    instance.find('.name').html(this.name);
	    if (this.prices) {
	    	instance.find('.small').html(this.prices[0]);
	    	instance.find('.small-button').attr({
	    		'data-type': this.type,
	    		'data-name': this.name,
	    		'data-size': 'small',
	    		'data-price': this.prices[0]
	    	});
	    	instance.find('.medium').html(this.prices[1]);
	    	instance.find('.medium-button').attr({
	    		'data-type': this.type,
	    		'data-name': this.name,
	    		'data-size': 'medium',
	    		'data-price': this.prices[1]
	    	});
	    	instance.find('.large').html(this.prices[2]);
	    	instance.find('.large-button').attr({
	    		'data-type': this.type,
	    		'data-name': this.name,
	    		'data-size': 'large',
	    		'data-price': this.prices[2]
	    	});
	    } else {
	    	instance.find('.item').html(this.price);
	    	instance.find('.item-button').attr({
	    		'data-type': this.type,
	    		'data-name': this.name,
	    		'data-price': this.price
    		});
    	}

	    if (this.description)
	    	instance.find('.description').html(this.description);

        instance.removeClass(templates);
        if (this.vegetarian)
        	vegetarians.append(instance);
        else
        	container.append(instance);
	});
}



