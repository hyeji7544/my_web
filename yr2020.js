function habitTxt(self) {
	var habits = [
	'Read books of interest and leave review'
	,'Bible study everyday'
	,'Write journals'
	,'Take pictures'
	,'Workout >=3 a week'
	,'Weekend beach walk/short trip'
	,'Try new cafe/restaurant'
	,'Catch up with friends'
	,'Learn electives 2hrs per week e.g.Ted, Tutorial'
	];
	var i = 0;
	while(i < habits.length){
		if(self.value === habits[i]){
			habitDesc = habits[i];
			break;
		} else {
			i = i + 1;
		}
	};
}


function txtChanger(self) {
	habitTxt(self);
	if(self.value === habitDesc){
		self.style.color='hotpink';
		self.value = 'Superb 💕';
	} else {
		self.style.color='black';
		self.value = habitDesc;
	};
}
