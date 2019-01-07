function prepareList(){
	var mainlist=document.getElementsByClassName("mainlist")[0];
	var lists=mainlist.getElementsByTagName("li");
	for(let i=0;i<lists.length;i++){
		if(lists[i].getElementsByClassName("sublist").length>0){
			lists[i].onmouseover=function(){
					this.getElementsByClassName("sublist")[0].style.display="block";
			}
			lists[i].onmouseout=function(){
					this.getElementsByClassName("sublist")[0].style.display="none";
			}
		}
	}
}
window.onload=prepareList;