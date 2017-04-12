
$(document).ready(function(){
    $.get({
        url: '/api/basket/count',
        success: function(data){ setCartCount(data.quantity); },
        headers: {"X-CSRFToken": Cookies.get('csrftoken')}
    });

    $('#btn-add-to-cart').click(function(e){
        var variant_id = e.target.dataset.variantId;
        $.post({
            url: '/api/basket/',
            data: { variant_id: variant_id },
            success: increaseItemCount,
            headers: {"X-CSRFToken": Cookies.get('csrftoken')}
        });
    });

});

function setCartCount(count) {
    if (count === 0) {
        $('#item-count').text('');    
    }
    else {
        $('#item-count').text(`${count} `);
    }
}

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
