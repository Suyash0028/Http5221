/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS
class Friend {
	constructor(number,name){
		this.number = number;
		this.name = name;
	}
}


window.onload = function(){
	var faveThree = [];//FAVE 3 ARRAY
	var formHandle = document.forms.fave_form;
	var faveBlock = document.getElementById("faveBlock");
	var faveList = document.getElementById("faveList");
	formHandle.onsubmit = savePhoneDetails;


	function savePhoneDetails(){
		formHandle.style.display = "none";
		faveBlock.style.display = "block";
		const friend1 = new Friend(formHandle.phone1.value,formHandle.name1.value);
		const friend2 = new Friend(formHandle.phone2.value,formHandle.name2.value);
		const friend3 = new Friend(formHandle.phone3.value,formHandle.name3.value);
		
		faveThree.push(friend1, friend2, friend3);

		for (let index = 0; index < faveThree.length; index++) {
			const element = faveThree[index];
			faveList.innerHTML += "<li>" + element.name + "</li>";
		}
		return false;
	}
}//END OF onload FUNCTION