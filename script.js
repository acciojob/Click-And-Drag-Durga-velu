// Your code here.
let element
let cubes=document.qurySelectorAll(".item")
cubes.forEach((cube)=>{

	cube.addEventListener("mousedown",()=>{
       cube.style.position="absolute"
		element=cube;
		document.onmousemove=(e)=>{
			let x=e.pageX;
			let y=e.pageY;
			element.style.left=x -50 + "px";
		element.style.right=y -50 + "px";
		}
		
	})
})

document.onmouseup=(e)=>{
	element=null;
}












