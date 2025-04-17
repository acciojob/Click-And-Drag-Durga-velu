const items = document.querySelector('.items');
        let isMouseDown = false;
        let startX, scrollLeft;

        items.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            items.classList.add('active');
            startX = e.pageX - items.offsetLeft;
            scrollLeft = items.scrollLeft;
        });

        items.addEventListener('mouseleave', () => {
            isMouseDown = false;
            items.classList.remove('active');
        });

        items.addEventListener('mouseup', () => {
            isMouseDown = false;
            items.classList.remove('active');
        });

        items.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - items.offsetLeft;
            const scroll = (x - startX) * 3;
            items.scrollLeft = scrollLeft - scroll;
        });