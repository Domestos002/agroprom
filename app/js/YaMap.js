ymaps.ready(init);
var myMap;
lang=ru_RU;

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 12,
        controls: ['zoomControl']
    });
    myMap.behaviors.disable('scrollZoom');
    var balloon = myMap.balloon.open(myMap.getCenter(), { content: 'ул. Холмистая, д. 38, оф. 301' }, { closeButton: true });
}


