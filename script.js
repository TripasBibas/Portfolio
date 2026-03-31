function toggleComp(id) {
      const item = document.getElementById(id);
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.comp-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
        setTimeout(() => {
          item.querySelectorAll('.eval-fill').forEach(b => { b.style.width = b.dataset.width + '%'; });
        }, 50);
      }
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
            e.target.classList.add('visible'); obs.unobserve(e.target); 
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 100;
      sections.forEach(s => {
        const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
        if (!link) return;
        if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) link.classList.add('active');
        else link.classList.remove('active');
      });
    });