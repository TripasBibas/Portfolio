const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.bg-shape');
    let value = window.scrollY;
    shapes.forEach((shape, i) => {
        shape.style.transform = `translateY(${value * (0.1 * (i + 1))}px) rotate(${value * 0.05}deg)`;
    });
});