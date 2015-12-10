function box() {
	var val = undefined;
	return {
		set: function (newVal) {
			val = newVal;
		}
		get: function () {
			return val;
		}
		type: function () {
			return typeof (val);
		}
	};
}
