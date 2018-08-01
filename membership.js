function checkTotal() 
{
	document.listForm.total.value = '';
	var sum = 0;
	for (i=0;i<document.listForm.DurationofSubscriptionradio.length;i++) {
		if (document.listForm.DurationofSubscriptionradio[i].checked) {
			sum = sum + parseInt(document.listForm.DurationofSubscriptionradio[i].value);
			break;
		}
	}
	for (i=0;i<document.listForm.SpecialSubscriptionscheckbox.length;i++) {
		if (document.listForm.SpecialSubscriptionscheckbox[i].checked) {
			sum = sum + parseInt(document.listForm.SpecialSubscriptionscheckbox[i].value);
		}
	}
	document.listForm.total.value = sum + " JDs";
}
	
function alertjoin() {
	 alert("\nWelcome Aboard "+document.listForm.inputname.value+" !");
}
