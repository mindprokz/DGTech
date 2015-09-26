
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
		mobile:       false,       // default
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
;(function($){
   $(document).on('click', 'a[href^=#]', function () {
        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
        console.log('ok');
        return false;
    });
})(jQuery);
// скрипт карты
var maps_obj = {
	selector : document.querySelector('#selection_map'),
	obl_onMap : document.querySelectorAll('option'),
	element_onMap : document.querySelectorAll('.map_element'),
	name : document.querySelector('#change_name'),
	status : document.querySelector('#change_status'),
	adress : document.querySelector('#change_adress'),
};

maps_obj.change_name_arr = [
	'Бурик Виталий Николаевич',
	'Бурик Виталий Николаевич',
	'Бурик Виталий Николаевич',
	'Ржевский Игорь Владимирович',
	'Пыльский Евгений Александрович',
	'Пыльский Евгений Александрович',
	'Пыльский Евгений Александрович',
	'Бурик Виталий Николаевич',
	'Бурик Виталий Николаевич',
	'Бурик Виталий Николаевич',
	'name',
];
maps_obj.change_status_arr = [
	'региональный директор по Акмолинской области',
	'региональный директор по Акмолинской области',
	'региональный директор по Акмолинской области',
	'региональный директор по Северо-Казахстанской Области',
	'региональный директор по Костанайской области',
	'региональный директор по Костанайской области',
	'региональный директор по Костанайской области',
	'региональный директор по Акмолинской области',
	'региональный директор по Акмолинской области',
	'региональный директор по Акмолинской области',
	'status',
];

maps_obj.change_adress_arr = [
	'Кокшетау Восточная промзона, проезд 17, 2/2',
	'Кокшетау Восточная промзона, проезд 17, 2/2',
	'Кокшетау Восточная промзона, проезд 17, 2/2',
	'г. Петропавловск ул.правды, 66',
	'г. Костанай Сарыкольская трасса 3-й',
	'г. Костанай Сарыкольская трасса 3-й',
	'г. Костанай Сарыкольская трасса 3-й',
	'Кокшетау Восточная промзона, проезд 17, 2/2',
	'Кокшетау Восточная промзона, проезд 17, 2/2',
	'Кокшетау Восточная промзона, проезд 17, 2/2',
	'adress'
];
maps_obj.changePositionOnMaps = function(i){
	document.querySelector('.active_elem').classList.remove('active_elem');
	maps_obj.element_onMap[i].classList.add('active_elem');
};

maps_obj.selector.onchange = function(){
	switch(maps_obj.selector.value){
		case 'Акмолинская':
			maps_obj.changePositionOnMaps(0);
			changeInitMap(0);
		break;
		case 'Алматинская':
			maps_obj.changePositionOnMaps(1);
			changeInitMap(1);
		break;
		case 'Карагандинская':
			maps_obj.changePositionOnMaps(2);
			changeInitMap(2);
		break;
		case 'Северно-Казахстанская':
			maps_obj.changePositionOnMaps(3);
			changeInitMap(3);
		break;
		case 'Костанайская':
			maps_obj.changePositionOnMaps(4);
			changeInitMap(4);
		break;
		case 'Актюбинская':
			maps_obj.changePositionOnMaps(5);
			changeInitMap(5);
		break;
		case 'Западно-Казахстанская':
			maps_obj.changePositionOnMaps(6);
			changeInitMap(6);
		break;
		case 'Южно-Казахстанская':
			maps_obj.changePositionOnMaps(7);
			changeInitMap(7);
		break;
		case 'Кызылординская':
			maps_obj.changePositionOnMaps(8);
			changeInitMap(8);
		break;
		case 'Жамбылская':
			maps_obj.changePositionOnMaps(9);
			changeInitMap(9);
		break;
		case 'Восточно-Казахстанская':
			maps_obj.changePositionOnMaps(10);
			changeInitMap(10);
		break;
	}
};

for (var i = 0; i < maps_obj.element_onMap.length; i++) {
	(function(){
		var j = i;
		maps_obj.element_onMap[i].onclick = function(){
			maps_obj.changePositionOnMaps(j);
			changeInitMap(j);
			maps_obj.selector.value = maps_obj.obl_onMap[j].value;
		}
	}());
};

function changeInitMap(i){
	maps_obj.name.textContent = maps_obj.change_name_arr[i];
	maps_obj.status.textContent = maps_obj.change_status_arr[i];	
	maps_obj.adress.textContent = maps_obj.change_adress_arr[i];
};

