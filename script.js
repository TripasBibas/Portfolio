window.addEventListener('scroll', () => {
    const circles = document.querySelectorAll('.deco-circle');
    let scrollValue = window.scrollY;
    
    circles.forEach((circle, index) => {
        let speed = (index + 1) * 0.1;
        circle.style.transform = `translateY(${scrollValue * speed}px)`;
    });
});