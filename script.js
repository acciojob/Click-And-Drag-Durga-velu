// Your code here.
let isDraggable=false
let offsetX,offsetY, cubeLeft,cubeTop;
let cubes=document.querySelectorAll(".item")
cubes.forEach((cube)=>{

	cube.addEventListener("mousedown",(e)=>{
		isDraggable=true;
		cube.style.position = "absolute";
		cube.style.zIndex = 1000;
		offsetX = e.clientX;
        offsetY = e.clientY; 
	
cubeLeft=cube.offsetLeft;
cubeTop=cube.offsetTop;
	})


document.addEventListener(("mousemove"),(e)=>{

	if(isDraggable){
		let mousepostionX=e.clientX-(offsetX+cubeLeft);
		let mousepostiony=e.clientY-(offsetY+cubeTop);
	
		cube.style.left=`${mousepostionX}px`
		cube.style.top=`${mousepostiony}px`
	}
	
})

});
document.onmouseup=()=>{
	element=null;
	document.onmousemove=null;
	isDraggable=false
}
