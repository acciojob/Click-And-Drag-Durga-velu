// Your code here.
let element;
let offsetX, offsetY;

const container = document.querySelector(".items");
const cubes = document.querySelectorAll(".item");

cubes.forEach((cube) => {
  cube.addEventListener("mousedown", (e) => {
    e.preventDefault();
    element = cube;
    cube.style.position = "absolute";
    cube.style.zIndex = 1000;

    const cubeRect = cube.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Offset of mouse inside cube
    offsetX = e.clientX - cubeRect.left;
    offsetY = e.clientY - cubeRect.top;

    document.onmousemove = (e) => {
      if (!element) return;

      let mouseX = e.clientX - containerRect.left - offsetX;
      let mouseY = e.clientY - containerRect.top - offsetY;

      // Enforce boundaries
      const maxX = container.clientWidth - cube.offsetWidth;
      const maxY = container.clientHeight - cube.offsetHeight;

      mouseX = Math.max(0, Math.min(mouseX, maxX));
      mouseY = Math.max(0, Math.min(mouseY, maxY));

      element.style.left = mouseX + "px";
      element.style.top = mouseY + "px";
    };
  });
});

// Stop dragging
document.onmouseup = () => {
  element = null;
  document.onmousemove = null;
};













