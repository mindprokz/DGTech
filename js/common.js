$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//  WOW js add
	new WOW().init({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       200,          // default
		mobile:       true,       // default
		live:         true        // default
	});
	// Fancybox add
	$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic'
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });

});

// скрипт карты
var maps_obj = {
	selector : document.querySelector('#selection_map'),
	obl_onMap : document.querySelectorAll('option'),
	element_onMap : document.querySelectorAll('.map_element'),
};

maps_obj.changePositionOnMaps = function(i){
	document.querySelector('.active_elem').setAttribute('class','map_element');
	maps_obj.element_onMap[i].setAttribute('class','map_element active_elem');
};

maps_obj.selector.onchange = function(){
	switch(maps_obj.selector.value){
		case 'Акмолинская':
			maps_obj.changePositionOnMaps(0);
		break;
		case 'Алматинская':
			maps_obj.changePositionOnMaps(1);
		break;
		case 'Карагандинская':
			maps_obj.changePositionOnMaps(2);
		break;
		case 'Северно-Казахстанская':
			maps_obj.changePositionOnMaps(3);
		break;
		case 'Костанайская':
			maps_obj.changePositionOnMaps(4);
		break;
		case 'Павлодарская':
			maps_obj.changePositionOnMaps(5);
		break;
		case 'Актюбинская':
			maps_obj.changePositionOnMaps(6);
		break;
		case 'Западно-Казахстанская':
			maps_obj.changePositionOnMaps(7);
		break;
		case 'Атырауская':
			maps_obj.changePositionOnMaps(8);
		break;
		case 'Мангыстауская':
			maps_obj.changePositionOnMaps(9);
		break;
		case 'Южно-Казахстанская':
			maps_obj.changePositionOnMaps(10);
		break;
		case 'Кызылординская':
			maps_obj.changePositionOnMaps(11);
		break;
		case 'Жамбылская':
			maps_obj.changePositionOnMaps(12);
		break;
		case 'Восточно-Казахстанская':
			maps_obj.changePositionOnMaps(13);
		break;
	}
};

for (var i = 0; i < maps_obj.element_onMap.length; i++) {
	(function(){
		var j = i;
		maps_obj.element_onMap[i].onclick = function(){
			document.querySelector('.active_elem').setAttribute('class','map_element');	
			maps_obj.element_onMap[j].setAttribute('class','map_element active_elem');
			maps_obj.selector.value = maps_obj.obl_onMap[j].value;
		}
	}());
};


// SmoothScroll v0.9.9

