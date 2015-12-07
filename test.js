	window.onlaod = function () {
		var oUl = document.getElementsByTagName('ul')[0],
			aStrong = oUl.getElementsByTagName('strong'),
			aSpan = oUl.getElementsByClassName('span'),
			aEm = oUl.getElementsByClassName('em'),
			ali = oUl.getElementsByTagName('li'),
			op = document.getElementsByTagName('p')[0],
			arrPrice = [];
		for (var i = 0; i < ali.length; i++) {
			arrPrice.push(0);
		}

		for (var i = 0; i < ali.length; i++) {
			alert(ali[i]);
			count(ali[i]);
		}

		function sum() {
			var num = 0;
			var price = 0;
			var iMax = 0;

			//将价格压进数组
			for (var i = 0; i < aStrong.length; i++) {
				num += Number(aStrong[i].innerHTML);
				price += parseFloat(aSpan[i].innerHTML);
				//如果数量不为0
				if (aStrong[i].innerHTML > 0) {
					arrPrice[i] = parseFloat(aEm[i].innerHTML);
				} else {
					arrPrice[i] = 0;
				}
			}

			for (var i = 0; i < arrPrice.length; i++) {

				if (iMax < arrPrice[i]) {
					iMax = arrPrice[i];
				}
			}

			op.innerHTML = '共购买了 <strong>' + num + '</strong> 件商品，单价最贵是：<strong>' + iMax + '</strong>元，合计 <strong>' + price + '</strong> 元；';
		};

		function count(li) {
			var aBtn = li.getElementsByTagName('input'),
				oStrong = li.getElementsByTagName('strong')[0],
				oEm = li.getElementsByTagName('em')[0],
				oSpan = li.getElementsByTagName('span')[0],
				num = Number(oStrong.innerHTML),
				price = parseFloat(oEm.innerHTML);

			aBtn[0].onclick = function () {

				if (num > 0)

					num--;
				//					oSpan.style.background = 'red';
				oStrong.innerHTML = num;
				oSpan.innerHTML = num * price + '元';
				sum();
			};
			aBtn[1].onclick = function () {
				num++;
				oStrong.innerHTML = num;
				oSpan.innerHTML = num * price + '元';
				sum();
			};
		};
	}
