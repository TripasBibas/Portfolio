const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

window.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.bg-deco');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.02;
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        circle.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});