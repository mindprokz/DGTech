
$(document).ready(function() {
	 var trigger = $('#hamburger'),
        isClosed = false,
        main_menu = $('#main_menu');

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        trigger.removeClass('hambur_no_bg');
        trigger.addClass('hambur_yes_bg');
        main_menu.removeClass('menu_is_open');
        main_menu.addClass('menu_is_closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        trigger.removeClass('hambur_yes_bg');
        trigger.addClass('hambur_no_bg');
        main_menu.removeClass('menu_is_closed');
        main_menu.addClass('menu_is_open');
        isClosed = true;
      }
    };
    $('.main_meni__link').on('click',function(){
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        trigger.removeClass('hambur_no_bg');
        trigger.addClass('hambur_yes_bg');
        main_menu.removeClass('menu_is_open');
        main_menu.addClass('menu_is_closed');
        isClosed = false;
    });

    // common js
    $(".fancybox").click(function() {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '80%',
			height: '80%',
			autoSize: false,
			closeClick: false,
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	});
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
	$(window).scroll(function(){
		var st = $(this).scrollTop();

		$('#top__content').css({
			"transform" : "translate(-50%,-" + (50 + st/4) + "%)",
			"-webkit-transform" : "translate(-50%,-" + (50 + st/3) + "%)",
		});
	});
	// $('div[data-type="background"]').each(function(){
 //        var $bgobj = $(this); // создаем объект
 //        $(window).scroll(function() {
 //            var yPos = -($(window).scrollTop() / 6); // вычисляем коэффициент 
 //            // Присваиваем значение background-position
 //            var coords = 'center '+ (-yPos + 'px');
 //            // Создаем эффект Parallax Scrolling
 //            $bgobj.css({ backgroundPosition: coords });
 //        });
 //    });
    $(window).scroll(function(){
		 var st = $(this).scrollTop();
		$('#top__content').css({
			"transform" : "translate(-50%,-" + (60 - st/12) + "%)",
			"-webkit-transform" : "translate(-50%,-" + (60 - st/12) + "%)",
		});  
		$('#main__video').css({
			"transform" : "translate(0%," + st/16 + "%)",
			"-webkit-transform" : "translate(0%," + st/16 + "%)",
		});   	
    });
});
;(function($){
   $(document).on('click', 'a[href^=#]', function () {
        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
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
	'Байбухинов Каусат Самангазинович',
	'Бурик Виталий Николаевич',
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
	'региональный директор по Восточно-Казахстанской области',
	'региональный директор по Акмолинской области',
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
	'Усть-Каменогорск, левый берег, ул. Базовая,1',
	'Кокшетау Восточная промзона, проезд 17, 2/2',
];
maps_obj.maps_coord = [
	new google.maps.LatLng(53.270541,69.441158),
	new google.maps.LatLng(53.270541,69.441158),
	new google.maps.LatLng(53.270541,69.441158),
	// 
	new google.maps.LatLng(54.867135,69.122864),
	// 
	new google.maps.LatLng(53.195503,63.733208),
	new google.maps.LatLng(53.195503,63.733208),
	new google.maps.LatLng(53.195503,63.733208),
	// 
	new google.maps.LatLng(53.270541,69.441158),
	new google.maps.LatLng(53.270541,69.441158),
	new google.maps.LatLng(53.270541,69.441158),
	// 
	new google.maps.LatLng(49.936834,82.649166),
	//
	new google.maps.LatLng(53.270541,69.441158),
];
// гугл мапс
var map;
// координаты карты
var oz = new google.maps.LatLng(51.138668,71.474600);
var MY_MAPTYPE_ID = 'custom_style';
function initialize() {
	// стили 
	var featureOpts = [ 
		{ "stylers": 
			[	{ "hue": "#0000ff" }, 
				{ "saturation": 50 }, 
				{ "lightness": 10 }, 
				{ "gamma": 1 }, 
				{ "visibility": "on" }, 
				{ "weight": 0.5 }
			] 
		} ];
	// Опции карты
	var mapOptions = {
			zoom: 15,
			center: oz,
			disableDefaultUI: true,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};
 
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var styledMapOptions = {
			name: 'Custom Style'
		};
	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	var marker = new google.maps.Marker({
			position: oz,
			map: map,
			title: 'Филиал в Астане',
			icon : 'img/maps_arrow.png',
	});
	var marker1 = new google.maps.Marker({
			position: maps_obj.maps_coord[0],
			map: map,
			title: 'Филиал в Астане',
			icon : 'img/maps_arrow.png',
	});
	var marker1 = new google.maps.Marker({
			position: maps_obj.maps_coord[3],
			map: map,
			title: 'Филиал в Астане',
			icon : 'img/maps_arrow.png',
	});
	var marker1 = new google.maps.Marker({
			position: maps_obj.maps_coord[4],
			map: map,
			title: 'Филиал в Астане',
			icon : 'img/maps_arrow.png',
	});
	var marker1 = new google.maps.Marker({
			position: maps_obj.maps_coord[10],
			map: map,
			title: 'Филиал в Астане',
			icon : 'img/maps_arrow.png',
	});
	};
initialize();

maps_obj.changePositionOnMaps = function(i){
	if(document.querySelector('.active_elem')){
		document.querySelector('.active_elem').classList.remove('active_elem');
		maps_obj.element_onMap[i].classList.add('active_elem');
	}else{
		maps_obj.element_onMap[i].classList.add('active_elem');
		document.querySelector('#main__direction').style.display = 'none';
		document.querySelector('#second__direction').style.display = 'block';
	};
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
		case 'Павлодарская':
			maps_obj.changePositionOnMaps(11);
			changeInitMap(11);
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
			map.setCenter(maps_obj.maps_coord[j]);
		}
	}());
};

function changeInitMap(i){
	maps_obj.name.textContent = maps_obj.change_name_arr[i];
	maps_obj.status.textContent = maps_obj.change_status_arr[i];	
	maps_obj.adress.textContent = maps_obj.change_adress_arr[i];
};
//smooth scroll

(function () {
  
// Scroll Variables (tweakable)
var defaultOptions = {
 
    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 1000, // [px]
    stepSize         : 120, // [px]
 
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,
 
    // Acceleration
    accelerationDelta : 20,  // 20
    accelerationMax   : 1,   // 1
 
    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,     // [px]
 
    // Other
    touchpadSupport   : true,
    fixedBackground   : true, 
    excluded          : ''    
};
 
var options = defaultOptions;
 
 
// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var deltaBuffer = [];
var isMac = /^Mac/.test(navigator.platform);
 
var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };
 
 
/***********************************************
 * SETTINGS
 ***********************************************/
 
var options = defaultOptions;
 
 
/***********************************************
 * INITIALIZE
 ***********************************************/
 
/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}
 
/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (initDone || !document.body) return;
 
    initDone = true;
 
    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();
 
    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }
 
    /**
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {
 
        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' + 
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);
        
        // DOM changed (throttled) to fix height
        var pendingRefresh;
        var refresh = function () {
            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) return; // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };
  
        setTimeout(refresh, 10);
 
        // TODO: attributeFilter?
        var config = {
            attributes: true, 
            childList: true, 
            characterData: false 
            // subtree: true
        };
 
        observer = new MutationObserver(refresh);
        observer.observe(body, config);
 
        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');   
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }
 
    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}
 
/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
}
 
 
/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = Date.now();
 
/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {
    
    directionCheck(left, top);
 
    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: Date.now()
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  
 
    var scrollWindow = (elem === document.body);
    
    var step = function (time) {
        
        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }
 
        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (1000 / options.frameRate + 1)); 
        } else { 
            pending = false;
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}
 
 
/***********************************************
 * EVENTS
 ***********************************************/
 
/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {
 
    if (!initDone) {
        init();
    }
    
    var target = event.target;
    var overflowing = overflowingAncestor(target);
 
    // use default if there's no overflowing
    // element or default action is prevented   
    // or it's a zooming event with CTRL 
    if (!overflowing || event.defaultPrevented || event.ctrlKey) {
        return true;
    }
    
    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') || 
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
       isNodeName(activeElement, 'object')) {
        return true;
    }
 
    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    
    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }
 
    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }
    
    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }
 
    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}
 
/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {
 
    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // our own tracked active element could've been removed from the DOM
    if (!document.contains(activeElement)) {
        activeElement = document.activeElement;
    }
 
    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable || 
         event.defaultPrevented   ||
         modifier ) {
      return true;
    }
    
    // spacebar should trigger button press
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;
 
    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }
 
    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt+10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }
 
    scrollArray(elem, x, y);
    event.preventDefault();
    scheduleClearCache();
}
 
/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}
 
 
/***********************************************
 * OVERFLOW
 ***********************************************/
 
var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();
 
var cache = {}; // cleared out after a scrolling session
var clearCacheTimer;
 
//setInterval(function () { cache = {}; }, 10 * 1000);
 
function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () { cache = {}; }, 1*1000);
}
 
function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}
 
//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |
 
function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) || 
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot()); 
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while (el = el.parentElement);
}
 
function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}
 
// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}
 
// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}
 
 
/***********************************************
 * HELPERS
 ***********************************************/
 
function addEvent(type, fn) {
    window.addEventListener(type, fn, false);
}
 
function removeEvent(type, fn) {
    window.removeEventListener(type, fn, false);  
}
 
function isNodeName(el, tag) {
    return (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}
 
function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}
 
var deltaBufferTimer;
 
if (window.localStorage && localStorage.SS_deltaBuffer) {
    deltaBuffer = localStorage.SS_deltaBuffer.split(',');
}
 
function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY)
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        if (window.localStorage) {
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        }
    }, 1000);
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
} 
 
function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}
 
function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}
 
function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList && 
                         elem.classList.contains('html5-video-controls'));
            if (isControl) break;
        } while (elem = elem.parentNode);
    }
    return isControl;
}
 
var requestFrame = (function () {
      return (window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();
 
var MutationObserver = (window.MutationObserver || 
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);  
 
var getScrollRoot = (function() {
  var SCROLL_ROOT;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 1);
      if (document.body.scrollTop != bodyScrollTop)
        (SCROLL_ROOT = document.body);
      else 
        (SCROLL_ROOT = document.documentElement);
      window.scrollBy(0, -1);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();
 
 
/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}
 
function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;
 
    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}
 
var wheelEvent;
if ('onwheel' in document.createElement('div'))
    wheelEvent = 'wheel';
else if ('onmousewheel' in document.createElement('div'))
    wheelEvent = 'mousewheel';
 
if (wheelEvent) {
    addEvent(wheelEvent, wheel);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}
 
})();