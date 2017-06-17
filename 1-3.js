function search(array, str) {
	for (i = 0; i < array.length; i++) {
		if (array[i].toLowerCase().indexOf(str.toLowerCase()) != -1 ) {return(true)}
	}
	return(false);
}