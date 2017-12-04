function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
}
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
var slideNowTwo = 1;
var slideCountTwo = $('#slidewrappertwo').children().length;
var slideIntervalTwo = 3000;
var navBtnIdTwo = 0;
var translateWidthTwo = 0;
var slideNowThird = 1;
var slideCountThird = $('#slidewrappertwo').children().length;
var slideIntervalThird = 3000;
var navBtnIdThird = 0;
var translateWidthtThird = 0;
        
$(document).ready(function() {
    $('#nextbtn').click(function() {
        nextSlide();
    });

    $('#prevbtn').click(function() {
        prevSlide();
    });
    $('#nextbtns').click(function() {
        nextSlides();
    });

    $('#prevbtns').click(function() {
        prevSlides();
    });
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
    init();
});

function init(){
    $.getJSON("data.json",ready);
    $.getJSON("data-s.json",readyTo);
}
function readyTo(data){
    var out ='';
    for(var key in data){
        out += '<div class="col-md not two">';
        out += '<a href="book.html">';
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
        out += '<a href="book.html">';
        out += `<img src="img/${data[key].img}">`;
        out += `<h6>${data[key].name}</h6>`;
        out += `<p>${data[key].autor}<br>from: <span class="price">${data[key].price}</span></p>`;
        out += '</a>';
        out +='</div>';
    }
    $('.under').html(out);
}   


function nextSlide() {
    if (slideNowTwo == 4) {
        $('#slidewrappertwo').css('transform', 'translate(0, 0)');
        slideNowTwo = 1;
    } else {
        translateWidthTwo = -$('#viewporttwo').width() * (slideNowTwo);
        $('#slidewrappertwo').css({
            'transform': 'translate(' + translateWidthTwo + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidthTwo + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidthTwo + 'px, 0)',
        });
        slideNowTwo++;
    }
}


function prevSlide() {
    if (slideNowTwo == 1) {

        while(slideCountTwo>0){
            translateWidthTwo = -$('#viewporttwo').width() * (slideCountTwo - 1);
            $('#slidewrappertwo').css({
                'transform': 'translate(' + translateWidthTwo + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidthTwo + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidthTwo + 'px, 0)',
            });
            slideNowTwo = slideCountTwo;
        }
    } 
    else {
        translateWidthTwo = -$('#viewporttwo').width() * (slideNowTwo - 2);
        $('#slidewrappertwo').css({
            'transform': 'translate(' + translateWidthTwo + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidthTwo + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidthTwo + 'px, 0)',
        });
        slideNowTwo--;
    }
}
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

