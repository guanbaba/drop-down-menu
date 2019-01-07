function prepareNav() {
	var mainMenu = document.getElementById("main_menu");
	var links = mainMenu.getElementsByTagName("li");
	var subMenu = document.getElementById("sub_menu");
	var subMenuContent = document.getElementById("sub_menu_content");
	var subMenuBtn = document.getElementById("sub_menu_btn");
	for (let i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			if (hasClass(subMenu, "active")) { //用一个class来标示子菜单是否打开
				positionChange(subMenuContent, -i * 400);
			} else {
				addClass(subMenu, "active");
				subMenu.style.display = "block";
				subMenuContent.style.marginLeft = (-i * 400) + "px";
			}
		}
	}
	subMenuBtn.onclick = function() {
		subMenu.style.display = "none";
		removeClass(subMenu, "active");
	}
}

function positionChange(elem, finalX) {
	if (elem.timeout)
		clearTimeout(elem.timeout);
	var currentX = parseInt(elem.style.marginLeft);
	var increment = 0;
	if (finalX == currentX)
		return;
	else if (finalX < currentX) {
		increment = Math.ceil((currentX - finalX) / 10.0);
		elem.style.marginLeft = (currentX - increment) + "px";
	} else if (finalX > currentX) {
		increment = Math.ceil((finalX - currentX) / 10.0);
		elem.style.marginLeft = (currentX + increment) + "px";
	}
	elem.timeout = setTimeout(function() {
		positionChange(elem, finalX)
	}, 10);
}

function addClass(elem, newClass) {
	var oldClass = elem.className;
	if (oldClass) {
		newClass = oldClass + " " + newClass;
		elem.className = newClass;
	} else {
		elem.className = newClass;
	}
}

function removeClass(elem, targetClass) {
	elem.className = elem.className.replace(targetClass, "");
	elem.className = elem.className.replace("  ", " ");
	elem.className = elem.className.trim();
}

function hasClass(elem, classString) {
	if (!elem.className) {
		return false;
	} else {
		if (elem.className.indexOf(classString) > -1)
			return true;
		else
			return false;
	}
}

window.onload = prepareNav;