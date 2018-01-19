var h = prompt('enter value','');
	h=h**3;
alert('Величина піднесеного до кубу введеного числа дорівнює '+h);
/*-----------------------------------------------------------------*/

var yearTime = prompt('Введіть місяць року','');
	
	if(yearTime =='Червень' || yearTime =='Липень' || yearTime =='Серпень' || yearTime =='червень' || yearTime =='липень' || yearTime =='серпень'){
	alert('Літо');
}	
	else if(yearTime=='Вересень' || yearTime =='Жовтень' || yearTime =='Листопад' || yearTime=='вересень' || yearTime =='жовтень' || yearTime =='листопад'){
	alert('Осінь');	
}
	else if(yearTime=='Грудень' || yearTime =='Січень' || yearTime =='Лютий' || yearTime=='грудень' || yearTime =='січень' || yearTime =='лютий'){
	alert('Зима');
}
	else if(yearTime=='Березень' || yearTime =='Квітень' || yearTime =='Травень' || yearTime=='березень' || yearTime =='квітень' || yearTime =='травень'){
	alert('Весна');	
}
	else{
	alert('Error');		
}
/*-----------------------------------------------------------------*/

var numberArr = prompt('Введіть число від 0 до 50','');
	if (numberArr >=0 && numberArr <= 12.5) {
		alert('Число відноситься до 1-ї чверті');	
	}
	else if (numberArr >12.5 && numberArr <= 25) {
		alert('Число відноситься до 2-ї чверті');	
	}
	else if (numberArr >25 && numberArr <= 37.5) {
		alert('Число відноситься до 3-ї чверті');	
	}
	else if (numberArr >37.5 && numberArr <= 50) {
		alert('Число відноситься до 4-ї чверті');	
	}
	else{
		alert('Error');
	}
	/*-----------------------------------------------------------------*/

	var yearTimeTern = prompt('Введіть місяць року','');
	(yearTimeTern=='Березень' || yearTimeTern =='Квітень' || yearTimeTern =='Травень' || yearTimeTern=='березень' || yearTimeTern =='квітень' || yearTimeTern =='травень') ? alert('Весна') : (yearTimeTern =='Червень' || yearTimeTern =='Липень' || yearTimeTern =='Серпень' || yearTimeTern =='червень' || yearTimeTern =='липень' || yearTimeTern =='серпень') ? alert('Літо') : (yearTimeTern =='Вересень' || yearTimeTern =='Жовтень' || yearTimeTern =='Листопад' || yearTimeTern =='вересень' || yearTimeTern =='жовтень' || yearTimeTern =='листопад') ? alert('Осінь') : (yearTimeTern =='Грудень' || yearTimeTern =='Січень' || yearTimeTern =='Лютий' || yearTimeTern =='грудень' || yearTimeTern =='січень' || yearTimeTern =='лютий') ? alert('Зима') : alert('Error');