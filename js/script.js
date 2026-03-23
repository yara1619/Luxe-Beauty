document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تعريف العناصر (المنيو والهيدر)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.navbar');

    // 2. وظيفة منيو الموبايل
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // تحريك بسيط للخطوط (اختياري)
            menuToggle.style.transform = navLinks.classList.contains('active') ? 'scale(1.1)' : 'scale(1)';
        });
    }

    // 3. إغلاق المنيو عند الضغط على أي رابط (للموبايل)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 4. دالة التحكم في شكل الهيدر عند النزول (Scroll)
    const handleNavbarScroll = () => {
        const scrollValue = window.scrollY || document.documentElement.scrollTop;

        if (scrollValue > 50) {
            nav.style.background = "rgba(10, 10, 10, 0.98)"; 
            nav.style.padding = "12px 8%"; 
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
            nav.style.borderBottom = "1px solid rgba(212, 175, 55, 0.4)";
        } else {
            nav.style.background = "rgba(18, 18, 18, 0.95)";
            nav.style.padding = "20px 8%"; 
            nav.style.boxShadow = "none";
            nav.style.borderBottom = "1px solid rgba(212, 175, 55, 0.2)";
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // تشغيلها فوراً عند تحميل الصفحة


    // 5. تأثير الظهور التدريجي (Scroll Reveal)
    const revealElements = document.querySelectorAll('.f-card, .service-card-premium, .stat-box, .about-text-box');
    
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealObserver.observe(el);
    });

});