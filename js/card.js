function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
}
var cart = {};
function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
    else {
        $('.out').html('Корзина пуста!');
    }
}

function showCart() {
    if (!isEmpty(cart)) {
        $('.out').html('Корзина пуста!');
    }
    else {
        $.getJSON('json.json', function (data) {
            var goods = data;
            var out = '';
            var img='';
            for (var id in cart) {
                out += '<div class="opis">';
				out += `<h6>${goods[id].name}</h6>`;
				out += `<p>Автор: <span>${goods[id].autor}</span></p>`;
				out += `<p>Формат: <span>${goods[id].format}</span></p>`;
			    out += `<p>Количество:  <button data-id="${id}" class="minus-goods">-</button><span>  ${cart[id]}  </span><button data-id="${id}" class="plus-goods">+</button></p>`;
				out += `<p>Цена : <span>$${cart[id]*goods[id].order}</span></p>`;
                out += '</div>';
				img += `<img src="img/${goods[id].img}">`;
				img += `<div class="order"  id="del" data-id="${id}"><a href="">Удалить</a></div>`;
            }
            $('#aaa').html(img);
            $('#opis').html(out);
            $('.minus-goods').on('click',minusGoods)
            $('#del').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
        });
    }
}
function kupit(){
	var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
    $('.out').html('Спасибо за покупку');
	
}
function delGoods() {
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function minusGoods(){
	var id = $(this).attr('data-id');
    if (cart[id]==1) {
        delete cart[id];
    }
    if(cart[id]>1) {
        cart[id]--;
    }
    saveCart();
    showCart();
}
function plusGoods(){
	var id = $(this).attr('data-id');
	cart[id]++;
	saveCart();
    showCart();
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function isEmpty(object) {
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

$(document).ready(function () {
   loadCart();
});
