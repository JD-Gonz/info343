// renders menu items

$(function(){

	renderMenu(com.dawgpizza.menu.pizzas, 'template-pizzas', 'meats');
	renderMenu(com.dawgpizza.menu.desserts, 'template-sides', 'desserts');
	renderMenu(com.dawgpizza.menu.drinks, 'template-sides', 'drinks');
});

function renderMenu(entries, templates, containers) {

	var instance;
	var template = $('.' + templates);
	var container = $('.' + containers);
	var vegetarians = $('.vegetarians');
	$.each(entries, function(){
	    instance = template.clone();
	    instance.find('.name').html(this.name);
	    
	    if (this.prices) {
	    	instance.find('.small').html(this.prices[0]);
	    	instance.find('.medium').html(this.prices[1]);
	    	instance.find('.large').html(this.prices[2]);
	    } else
	    	instance.find('.small').html(this.price);

	    if (this.description)
	    	instance.find('.description').html(this.description);

        instance.removeClass(templates);
        if (this.vegetarian)
        	vegetarians.append(instance);
        else
        	container.append(instance);
	});
}