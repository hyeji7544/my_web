
var buttons = {
	setTxtColor:function (self, color){
	self.style.color = color;
	},
	setBGColor:function (self, color){
	self.style.backgroundColor = color;
	},
	setBorder:function (self, property){
		self.style.border = property;
	}
};

function habitDesc(self) {
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
			desc = habits[i];
			break;
		} else {
			i = i + 1;
		}
	};
};

function habitDescChanger(self) {
	habitDesc(self);
	if(self.value === desc){
		buttons.setTxtColor(self,'hotpink');
		buttons.setBGColor(self,'honeydew');
		buttons.setBorder(self,'thin solid black');
		self.value = 'Superb 💕';
	} else {
		buttons.setTxtColor(self,'black');
		buttons.setBGColor(self,'white');
		self.value = desc;
	};
};
