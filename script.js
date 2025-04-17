// Your code here.
let element
let cubes=document.querySelectorAll(".item")
cubes.forEach((cube)=>{

	cube.addEventListener("mousedown",()=>{
       cube.style.position="absolute"
		element=cube;
		document.onmousemove=(e)=>{
			let x=e.pageX;
			let y=e.pageY;
			element.style.left=x -50 + "px";
		element.style.top=y -50 + "px";
		}
		
	})
})

document.onmouseup=()=>{
	element=null;
	document.onmousemove=null
}












