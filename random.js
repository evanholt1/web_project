var randNum=Math.floor((Math.random()*3));
	if(randNum<1)document.getElementById("about").style.backgroundImage = "url('images/rbgi1.png')";
	else if(randNum <2) document.getElementById("about").style.backgroundImage = "url('images/rbgi2.png')";
	else document.getElementById("about").style.backgroundImage = "url('images/rbgi3.png')";