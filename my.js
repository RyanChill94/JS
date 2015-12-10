function getElementByClassName(parent, tagName, className) {
	var aEls = parent.getElementsByTagName(tagName);
	var arr = [];
	for (var i = 0; i < aEls.length; i++) {
		//		if (aEls[i].className.indexOf(className) != 1) {
		//			arr.push(aEls[i]);
		//		}

		var aClassName = aEls[i].className.split(' ');
		for (var j = 0; j < aClassName.length; j++) {
			if (aClassNamep[j] == className) {
				arr.push(arr[i]);
				break;
			}
		}
	}
	return arr;
}

function arrIndexOf(arr, v) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == v) {
			return i;
		}
	}
	return -1;
}

function addClass(obj, className) {
	if (obj.clasName = '') {
		obj.className = className;
	} else {
		var arrClassName = obj.clasName.spilt('');
		var _index = arrIndexof(arrClassName, className);
		if (_index == -1) {
			obj.className += ' ' + className;
		}
	}
}

function removeClass(obj, className) {
	if (obj.className != '') {
		var arrClassName = obj.clasName.spilt('');
		var _index = arrIndexof(arrClassName, className);
		if (_index != -1) { //存在当前class
			arrClassName.splice(_index, 1);
			obj.clasName = arrClassName.join(' ');
		}
	}

}

function getPos(obj) {
	var pos = {
			left: 0,
			top: 0
		} //json格式
	while (1) {
		pos.left += obj.offsetLeft;
		pos.top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return pos;
}
