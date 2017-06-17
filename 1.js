function concate() {
	var type = typeof arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		currentType = typeof arguments[i];
		if (currentType != type || (currentType == 'object' && !Array.isArray(arguments[i]))) {
			return("Parameters belongs to different types");
		}
	}
	if (type == 'number') {
		sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum = sum + arguments[i];
		}
		return(sum);
	}
	if (type == 'string') {
		sum = '';
		for (var i = 0; i < arguments.length; i++) {
			sum = sum + arguments[i];
		}
	return(sum);
	}
	if (type == 'object') {
		sum = [];
		for (var i = 0; i < arguments.length; i++) {
			sum = sum.concat(arguments[i]);
		}
		return(sum);
	}
}