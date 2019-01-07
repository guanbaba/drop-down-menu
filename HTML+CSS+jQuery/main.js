$(document).ready(function(){
	var lists=$(".mainlist").children("li");
	for(let i=0;i<lists.length;i++){
		if($(lists[i]).children(".sublist").length>0){
			$(lists[i]).mouseover(function(){
				$(lists[i]).children(".sublist").show();
			})
			$(lists[i]).mouseout(function(){
				$(lists[i]).children(".sublist").hide();
			})
		}
	}
})