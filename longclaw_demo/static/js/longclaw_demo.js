// Javascript for longclaw demo site

$(document).ready(function(){
    // When the page loads, get the number of items in the basket 
    // to display in the nav bar
    $.get({
        url: '/api/basket/count',
        success: function(data){ setCartCount(data.quantity); },
        headers: {"X-CSRFToken": Cookies.get('csrftoken')}
    });

    // Respond to 'Add To Cart' button click events
    $('#btn-add-to-cart').click(function(e){
        var variant_id = e.target.dataset.variantId;
        $.post({
            url: '/api/basket/',
            data: { variant_id: variant_id },
            success: increaseItemCount,
            headers: {"X-CSRFToken": Cookies.get('csrftoken')}
        });
    });

    // Respond to checkout button click events
    $('#btn-checkout').click(checkout);

    $('#order-modal').on('hidden.bs.modal', function (event) {
        document.location.href = '/';
    });

});

/**
 * Set the value of the basket item counter in the nav bar
 * @param {*} count 
 */
function setCartCount(count) {
    if (count === 0) {
        $('#item-count').text('');    
    }
    else {
        $('#item-count').text(`${count} `);
    }
}

/**
 * Increase the nav bar item count by 1
 */
function increaseItemCount() {
    var count = parseInt($('#item-count').text());
    if (count > 0) {
        count += 1;
    }
    else {
        count = 1;
    }
    setCartCount(count);
}

/**
 * Perform a checkout and create an order.
 * Since we are using the dummy payment gateway,
 * we dont need to gather any details
 */
function checkout() {
    var fakeData = {
        address: {
            shipping_name: '',
            shipping_address_line1: '',
            shipping_address_city: '',
            shipping_address_zip: '',
            shipping_address_country: '',
            billing_name: '',
            billing_address_line1: '',
            billing_address_city: '',
            billing_address_zip: '',
            billing_address_country: ''
        },
        email: '',
        shipping_rate: 0
    };
    $.post({
        url: '/api/checkout/',
        data: JSON.stringify(fakeData),
        success: function(data){
            console.log(data);
            $('#order-id').text(data.order_id);
            $('#order-modal').modal('show');
        },
        headers: {'X-CSRFToken': Cookies.get('csrftoken'), 'Content-Type': 'application/json'}
    });
}
