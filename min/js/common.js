function changeInitMap(a){maps_obj.name.textContent=maps_obj.change_name_arr[a],maps_obj.status.textContent=maps_obj.change_status_arr[a],maps_obj.adress.textContent=maps_obj.change_adress_arr[a]}$(document).ready(function(){$(".count_element").on("click",function(){return ga("send","event","goal","goal"),yaCounterXXXXXXXX.reachGoal("goal"),!0}),(new WOW).init({boxClass:"wow",animateClass:"animated",offset:200,mobile:!1,live:!0}),$(".various").fancybox({maxWidth:800,maxHeight:600,fitToView:!1,width:"70%",height:"70%",autoSize:!1,closeClick:!1,openEffect:"elastic",closeEffect:"elastic"}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("img, a").on("dragstart",function(a){a.preventDefault()}),$(window).scroll(function(){var a=$(this).scrollTop();$("#top__content").css({transform:"translate(-50%,-"+(50+a/4)+"%)","-webkit-transform":"translate(-50%,-"+(50+a/3)+"%)"})}),$(window).scroll(function(){var a=$(this).scrollTop();$("#top__content").css({transform:"translate(0%,"+(60-a/12)+"%)","-webkit-transform":"translate(-50%,-"+(60-a/12)+"%)"}),$("#main__video").css({transform:"translate(0%,"+a/8+"%)","-webkit-transform":"translate(0%,"+a/8+"%)"})})}),function(a){a(document).on("click","a[href^=#]",function(){return a("html, body").animate({scrollTop:a('a[name="'+this.hash.slice(1)+'"]').offset().top},1e3),!1})}(jQuery);var maps_obj={selector:document.querySelector("#selection_map"),obl_onMap:document.querySelectorAll("option"),element_onMap:document.querySelectorAll(".map_element"),name:document.querySelector("#change_name"),status:document.querySelector("#change_status"),adress:document.querySelector("#change_adress")};maps_obj.change_name_arr=["Бурик Виталий Николаевич","Бурик Виталий Николаевич","Бурик Виталий Николаевич","Ржевский Игорь Владимирович","Пыльский Евгений Александрович","Пыльский Евгений Александрович","Пыльский Евгений Александрович","Бурик Виталий Николаевич","Бурик Виталий Николаевич","Бурик Виталий Николаевич","name"],maps_obj.change_status_arr=["региональный директор по Акмолинской области","региональный директор по Акмолинской области","региональный директор по Акмолинской области","региональный директор по Северо-Казахстанской Области","региональный директор по Костанайской области","региональный директор по Костанайской области","региональный директор по Костанайской области","региональный директор по Акмолинской области","региональный директор по Акмолинской области","региональный директор по Акмолинской области","status"],maps_obj.change_adress_arr=["Кокшетау Восточная промзона, проезд 17, 2/2","Кокшетау Восточная промзона, проезд 17, 2/2","Кокшетау Восточная промзона, проезд 17, 2/2","г. Петропавловск ул.правды, 66","г. Костанай Сарыкольская трасса 3-й","г. Костанай Сарыкольская трасса 3-й","г. Костанай Сарыкольская трасса 3-й","Кокшетау Восточная промзона, проезд 17, 2/2","Кокшетау Восточная промзона, проезд 17, 2/2","Кокшетау Восточная промзона, проезд 17, 2/2","adress"],maps_obj.changePositionOnMaps=function(a){document.querySelector(".active_elem").classList.remove("active_elem"),maps_obj.element_onMap[a].classList.add("active_elem")},maps_obj.selector.onchange=function(){switch(maps_obj.selector.value){case"Акмолинская":maps_obj.changePositionOnMaps(0),changeInitMap(0);break;case"Алматинская":maps_obj.changePositionOnMaps(1),changeInitMap(1);break;case"Карагандинская":maps_obj.changePositionOnMaps(2),changeInitMap(2);break;case"Северно-Казахстанская":maps_obj.changePositionOnMaps(3),changeInitMap(3);break;case"Костанайская":maps_obj.changePositionOnMaps(4),changeInitMap(4);break;case"Актюбинская":maps_obj.changePositionOnMaps(5),changeInitMap(5);break;case"Западно-Казахстанская":maps_obj.changePositionOnMaps(6),changeInitMap(6);break;case"Южно-Казахстанская":maps_obj.changePositionOnMaps(7),changeInitMap(7);break;case"Кызылординская":maps_obj.changePositionOnMaps(8),changeInitMap(8);break;case"Жамбылская":maps_obj.changePositionOnMaps(9),changeInitMap(9);break;case"Восточно-Казахстанская":maps_obj.changePositionOnMaps(10),changeInitMap(10)}};for(var i=0;i<maps_obj.element_onMap.length;i++)!function(){var a=i;maps_obj.element_onMap[i].onclick=function(){maps_obj.changePositionOnMaps(a),changeInitMap(a),maps_obj.selector.value=maps_obj.obl_onMap[a].value}}();