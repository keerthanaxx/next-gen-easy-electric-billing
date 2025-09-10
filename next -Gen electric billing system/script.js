document.addEventListener('DOMContentLoaded', () => {

    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / 200; // Adjust for animation speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCount();
        });
    };

    // Use Intersection Observer to trigger the animation when the section is visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    const dataPanelsSection = document.querySelector('.data-panels-section');
    if (dataPanelsSection) {
        observer.observe(dataPanelsSection);
    }
});