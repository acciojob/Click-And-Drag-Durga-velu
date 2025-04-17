let element;
let offsetX, offsetY;

let cubes = document.querySelectorAll(".item");
cubes.forEach((cube) => {
    cube.addEventListener("mousedown", (e) => {
        e.preventDefault(); // Prevent default behavior (like text selection)
        element = cube; // Set the current cube to be dragged
        cube.style.position = "absolute"; // Make it absolute to move freely

        // Calculate the offset based on the mouse position relative to the cube
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;

        // Add mousemove event to the document
        document.onmousemove = (e) => {
            if (element) {
                let mouseX = e.clientX - offsetX; // Adjust position based on offset
                let mouseY = e.clientY - offsetY; // Adjust position based on offset

                // Optional: Boundary checks
                const container = document.querySelector('.items'); // Assuming '.items' is the container
                const containerRect = container.getBoundingClientRect();
                const elementRect = element.getBoundingClientRect();

                // Ensure the element stays within the container
                if (mouseX < containerRect.left) mouseX = containerRect.left;
                if (mouseX + elementRect.width > containerRect.right) mouseX = containerRect.right - elementRect.width;
                if (mouseY < containerRect.top) mouseY = containerRect.top;
                if (mouseY + elementRect.height > containerRect.bottom) mouseY = containerRect.bottom - elementRect.height;

                element.style.left = mouseX + "px";
                element.style.top = mouseY + "px";
            }
        };
    });
});

// Mouseup event to stop dragging
document.onmouseup = () => {
    element = null; // Reset the element
    document.onmousemove = null; // Remove the mousemove event listener
};