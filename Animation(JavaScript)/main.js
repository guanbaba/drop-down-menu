function prepareList() {
	var mainlist = document.getElementsByClassName("mainlist")[0];
	var lists = mainlist.getElementsByTagName("li");
	for (let i = 0; i < lists.length; i++) {
		if (lists[i].getElementsByClassName("sublist").length > 0) {
			lists[i].onmouseenter = function(event) {
				var sublist = this.getElementsByClassName("sublist")[0];
				changeList(sublist, 1);
			}
			lists[i].onmouseleave = function(event) {
				var sublist = this.getElementsByClassName("sublist")[0];
				changeList(sublist, -1);
			}
		}
	}
}

function changeList(elem, direction) {
	if(elem.timeout)
		clearTimeout(elem.timeout);			//一定要为每个元素添加一个timeout属性，防止鼠标快速移动时出现死循环抖动
	var height = parseInt(elem.offsetHeight);
	var finalHeight = elem.getElementsByTagName("li").length * 40;
	if (direction==1) {
		if (height < finalHeight) {
			height++;
			elem.style.height = height + "px";
			elem.timeout=setTimeout(function() {
				changeList(elem, 1);
			}, 1);
		} else {
			return;
		}
	} else if (direction==-1) {
		if (height > 0) {
			height--;
			elem.style.height = height + "px";
			elem.timeout=setTimeout(function() {
				changeList(elem, -1);
			}, 1);
		} else {
			return;
		}
	}
}

window.onload = prepareList;