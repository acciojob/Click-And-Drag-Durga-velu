// Your code here.
let element;
let offsetX,offsetY;
let cubes=document.querySelectorAll(".item")
cubes.forEach((cube)=>{

	cube.addEventListener("mousedown",(e)=>{
       cube.style.position="absolute"
		element=cube;
		offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
	document.onmousemove=(e)=>{
                 if (element) {
                let mouseX = e.clientX - offsetX;
let mouseY = e.clientY - offsetY;
	
                element.style.left = mouseX + "px";
                element.style.top = mouseY + "px";
            }
        };
})
});
document.onmouseup=()=>{
	element=null;
	document.onmousemove=null;
}












