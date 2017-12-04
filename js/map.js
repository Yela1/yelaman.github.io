function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
}

var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        center: [43.20826788, 76.66937983], 
        zoom: 15
    },{
        buttonMaxWidth:300
    },
    {
    	searchControlProvider: 'yandex#search'
    });
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
  
    
    
}