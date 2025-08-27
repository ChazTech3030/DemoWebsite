function changeColour(){
	let elements = document.getElementsByTagName("p"); //elements[0]
	for (let ele of elements){
		if (ele.style.backgroundColor == "black") {
			ele.style.color = "black";
			ele.style.backgroundColor = "white";
		} else {
			ele.style.color = "white";
			ele.style.backgroundColor = "black";
		}
	}



}