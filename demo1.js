 function drag(id){
	var oBox = document.getElementById(id);
	var disX = 0;
	var disY =0;
	oBox.addEventListener('mouseover',function(event){
		var event = event || window.event;
		disX = event.pageX - oBox.offsetLeft;
		disY = event.pageY - oBox.offsetTop;
		
		oBox.addEventListener('mousemove',function(event){
			oBox.style.left = event.pageX - disX + 'px'; 
			oBox.style.top = event.pageY - disY + 'px'; 
		}, false);
		oBox.addEventListener('mouseup', function(){
			this.onmouseover= null;
			this.onmousemove= null;
			this.onmouseup= null;
		}, false)
	}, false);
	return false;
}