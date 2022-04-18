function setRem() {
	let width = document.documentElement.clientWidth;
	let htmlFontsize = width/3.75;
	document.documentElement.style.fontSize = htmlFontsize+'px';
}
window.addEventListener('resize',()=>{
	setRem();
})
setRem();
