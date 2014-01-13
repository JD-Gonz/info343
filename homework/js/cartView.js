/*
    createCartView()

    Creates a view for the whole shopping cart
*/

function createCartView(config) {
	cartModel = config.model;
    template = config.template;
     container = config.container;
     idx = 0;
    $.each(cartModel.items, function(){
        instance = template.clone();
        instance.find('.index').attr({
                'data-index': idx
        });
        instance.find('.name').html(this.name);
        if (this.size != null)
            instance.find('.size').html("(" + this.size + ")");
        instance.find('.price').html(this.price);
        instance.find('.remove-item').click(function(){
            var idxToRemove = this.getAttribute('data-index')
            removeItem(cartModel, idxToRemove);
        });
        instance.removeClass(template);
        container.append(instance);
        idx++;
    });
    cartModel.getPrice();
    

} //createCartView()



