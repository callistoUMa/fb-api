function changePage(id){
	var pages = document.getElementsByClassName('content');
	for(var i = 0; i < pages.length; i++){
	pages[i].style.display = 'none';}
	document.getElementById(id).style.display = 'block';
	return;
	}