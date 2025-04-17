// Your code here.
let element;
let offsetx,offsety, cubeleft,cubetop;
let cubes=document.querySelectorAll(".item")
cubes.forEach((cube)=>{

	cube.addEventListener("mousedown",(e)=>{
       cube.style.position="absolute"
		element=cube;
		offsetx=e.clientX;
			offsety=e.clientY;
		cubeleft=cube.offsetLeft;
		cubetop=cube.offsetTop;
	cube.addEventListener("mousemove",(e)=>{

let mousepositionX=e.clientX-(offsetx+cubeleft);
		let mousepositionY=e.clientY-(offsety+cubetop);
 cube.style.left=`${mousepositionX}px`
		cube.style.top=`${mousepositionY}px`
	})
})

document.onmouseup=()=>{
	element=null;
	document.onmousemove=null
}












