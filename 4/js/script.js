$(function(){
		$( "#accordion" ).accordion({
		collapsible: true,
		active: false
		}); 
	});

$(function(){
	$("#open").button().click(function(){
		$('#dialog').dialog("open");
	})

	$('#dialog').dialog({
	autoOpen: false,
	buttons:{
			Оформить: function (event, ui) {
					$( "#confirm" ).dialog("open");
					var n = $("#name").val();
					var kg = $("#weight").val();
					var m = $("#meat").val();
					var d = $("#date").val();
					var t = $("#town").val();
					var s = $("#street").val();
					var p = $("#promocod").val();
					var price = $( "#result" ).val(4234);
					
					if ((t=="Москва")&(s=="Санкт-Петербург"))  {
					    var price = $( "#result" ).val(4200);
					}
					if (($("#town").val()=="Москва")&($("#street").val()=="Уфа")) {
					    var price = $( "#result" ).val(6820);
					}
					if (($("#town").val()=="Москва")&($("#street").val()=="Ижевск")) {
					    var price = $( "#result" ).val(4780);
					}
					if (($("#town").val()=="Москва")&($("#street").val()=="Казань")) {
					    var price = $( "#result" ).val(8450);
					}
					if (($("#town").val()=="Москва")&($("#street").val()=="Самара")) {
					    var price = $( "#result" ).val(8750);
					}
					
					if (($("#town").val()=="Уфа")&($("#street").val()=="Санкт-Петербург")) {
					    var price = $( "#result" ).val(4200);
					}
					if (($("#town").val()=="Уфа")&($("#street").val()=="Москва")) {
					    var price = $( "#result" ).val(6820);
					}
					if (($("#town").val()=="Уфа")&($("#street").val()=="Ижевск")) {
					    var price = $( "#result" ).val(4780);
					}
					if (($("#town").val()=="Уфа")&($("#street").val()=="Казань")) {
					    var price = $( "#result" ).val(8450);
					}
					if (($("#town").val()=="Уфа")&($("#street").val()=="Самара")) {
					    var price = $( "#result" ).val(8750);
					}
				
					
					if (($("#town").val()=="Санкт-Петербург")&($("#street").val()=="Уфа")) {
					    var price = $( "#result" ).val(4200);
					}
					if (($("#town").val()=="Санкт-Петербург")&($("#street").val()=="Москва")) {
					    var price = $( "#result" ).val(6820);
					}
					if (($("#town").val()=="Санкт-Петербург")&($("#street").val()=="Ижевск")) {
					    var price = $( "#result" ).val(4780);
					}
					if (($("#town").val()=="Санкт-Петербург")&($("#street").val()=="Казань")) {
					    var price = $( "#result" ).val(8450);
					}
					if (($("#town").val()=="Санкт-Петербург")&($("#street").val()=="Самара")) {
					    var price = $( "#result" ).val(8750);
					}
					
					
					if (($("#town").val()=="Ижевск")&($("#street").val()=="Уфа")) {
					    var price = $( "#result" ).val(4200);
					}
					if (($("#town").val()=="Ижевск")&($("#street").val()=="Москва")) {
					    var price = $( "#result" ).val(6820);
					}
					if (($("#town").val()=="Ижевск")&($("#street").val()=="Санкт-Петербург")) {
					    var price = $( "#result" ).val(4780);
					}
					if (($("#town").val()=="Ижевск")&($("#street").val()=="Казань")) {
					    var price = $( "#result" ).val(8450);
					}
					if (($("#town").val()=="Ижевск")&($("#street").val()=="Самара")) {
					    var price = $( "#result" ).val(8750);
					}
					
					
					if (($("#town").val()=="Казань")&($("#street").val()=="Уфа")) {
					    var price = $( "#result" ).val(4200);
					}
					if (($("#town").val()=="Казань")&($("#street").val()=="Москва")) {
					    var price = $( "#result" ).val(6820);
					}
					if (($("#town").val()=="Казань")&($("#street").val()=="Санкт-Петербург")) {
					    var price = $( "#result" ).val(4780);
					}
					if (($("#town").val()=="Казань")&($("#street").val()=="Ижевск")) {
					    var price = $( "#result" ).val(8450);
					}
					if (($("#town").val()=="Казань")&($("#street").val()=="Самара")) {
					    var price = $( "#result" ).val(8750);
					}
					
					
					if (($("#town").val()=="Самара")&($("#street").val()=="Уфа")) {
					    var price = $( "#result" ).val(4200);
					}
					if (($("#town").val()=="Самара")&($("#street").val()=="Москва")) {
					    var price = $( "#result" ).val(6820);
					}
					if (($("#town").val()=="Самара")&($("#street").val()=="Санкт-Петербург")) {
					    var price = $( "#result" ).val(4780);
					}
					if (($("#town").val()=="Самара")&($("#street").val()=="Ижевск")) {
					    var price = $( "#result" ).val(8450);
					}
					if (($("#town").val()=="Самара")&($("#street").val()=="Казань")) {
					    var price = $( "#result" ).val(8750);
					}
					
					if (m=="Первый класс")  {
					    var price = ($( "#result" ).val())*3;
					}
					if (m=="Бизнес-класс")  {
					    var price = ($( "#result" ).val())*2;
					    
					    console.log(price);
					}
					if (p=="SALE")  {
					    var price = (($( "#result" ).val())*9)/10;
					}

            document.getElementById('Price').value = price;
				},
			Закрыть: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});

$("#slider").slider({
	range: "min",
	value: 0,
	min: 1,
	max: 32,
	step: 1,
	slide: function(event, ui) {
		$("#weight").val($("#slider").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#weight").val($("#slider").slider("option", "value"));
	}
});
$("#weight").val($("#slider").slider("option", "value"));

$( "#date" ).datepicker({
	dateFormat: "dd.mm.yy"
	});

$("#tip").tooltip();

var availableTags = [
		"Уфа",
		"Москва",
		"Санкт-Петербург",
		"Челябинск",
		"Нижний-Новгород",
		"Смоленск",
		"Сочи",
		"Краснодар",
		"Учалы",
		"Самара",
		];
		$( "#town" ).autocomplete({
		source: availableTags
		});

	$('#confirm').dialog({

	autoOpen: false,
	buttons:{
	    
			Подтвердить: function (event, ui) {
				$( "#succ" ).dialog("open");
				$( "#dialog" ).dialog("close")
				$(this).dialog('close');
				},
			Отмена: function() {
			$(this).dialog('close');
			
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});

$('#succ').dialog({
	autoOpen: false,
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});
}) 


