var cart={}
var slideNowThird = 1;
var slideCountThird = $('#slidewrappertwo').children().length;
var slideIntervalThird = 3000;
var navBtnIdThird = 0;
var translateWidthtThird = 0;
$(document).ready(function(){
	$('#nextbtns').click(function() {
        nextSlides();
    });

    $('#prevbtns').click(function() {
        prevSlides();
    });
    init();
});
function readyTo(data){
    var out ='';
    for(var key in data){
        out += '<div class="col-md not two">';
        out += '<a href="#">';
        out += `<img src="img/${data[key].img}">`;
        out += `<h6>${data[key].name}</h6>`;
        out += `<p>${data[key].autor}<br>from: <span class="price">${data[key].price}</span></p>`;
        out += '</a>';
        out +='</div>';
    }
    $('.under-two').html(out);
}
function ready(data){
    var out ='';
    for(var key in data){
        out += '<div class="col-md not two">';
        out += '<a href="#">';
        out += `<img src="img/${data[key].img}">`;
        out += `<h6>${data[key].name}</h6>`;
        out += `<p>${data[key].autor}<br>from: <span class="price">${data[key].price}</span></p>`;
        out += '</a>';
        out +='</div>';
    }
    $('.under').html(out);
}   
function init(){
	$.getJSON("data.json",ready);
    $.getJSON("data-s.json",readyTo);
    $.getJSON("json.json",goodsOut);
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
}
function goodsOut(data){
	var out ='';
	for(var key in data){
		out += '<div class="opis">';
		out += `<h6>${data[key].name}</h6>`;
		out += `<p>Автор: <span>${data[key].autor}</span></p>`
		out += `<p>Формат: <span>${data[key].format}</span></p>`
		out += `<p>Дата выхода: <span>${data[key].reliz}</span></p>`
		out += `<p>Количество страниц: <span>${data[key].length}</span></p>`
		out += `<p>О книге: <span class="opisa">${data[key].info}</span></p>`
		out += `<div class="order"  data-id="${key}"><a href="">Добавить в корзину</a></div>`
		out += '</div>'
	}
	$('#opis').html(out);
    $('.order').on('click', addToCart);
}
function addToCart() {
    //добавляем товар в корзину
    var id = $(this).attr('data-id');
    // console.log(id);
    if (cart[id]==undefined) {
        cart[id] = 1; //если в корзине нет товара - делаем равным 1
    }
    else {
        cart[id]++; //если такой товар есть - увеличиваю на единицу
    }
    saveCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        
    }
}

$(document).ready(function () {
    init();
    loadCart();
});


function nextSlides() {
    if (slideNowThird == 4) {
        $('#slidewrapperthird').css('transform', 'translate(0, 0)');
        slideNowThird = 1;
    } else {
        translateWidthThird = -$('#viewportthird').width() * (slideNowThird);
        $('#slidewrapperthird').css({
            'transform': 'translate(' + translateWidthThird + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidthThird + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidthThird + 'px, 0)',
        });
        slideNowThird++;
    }
}


function prevSlides() {
    if (slideNowThird == 1) {

        while(slideCountThird>0){
            translateWidthThird = -$('#viewportthird').width() * (slideCountThird - 1);
            $('#slidewrapperthird').css({
                'transform': 'translate(' + translateWidthTirdrd + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidthThird + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidthThird + 'px, 0)',
            });
            slideNowThird = slideCountThird;
        }
    } 
    else {
        translateWidthThird = -$('#viewportthird').width() * (slideNowThird - 2);
        $('#slidewrapperthird').css({
            'transform': 'translate(' + translateWidthThird + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidthThird + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidthtThird + 'px, 0)',
        });
        slideNowThird--;
    }
}