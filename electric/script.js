function animateCounter(start, end, duration, elementId) {
    let range = end - start;
    let current = start;
    let increment = range / (duration / 50);
    let counter = document.getElementById(elementId);

    let updateCounter = setInterval(() => {
        current += increment;
        counter.innerText = Math.floor(current).toLocaleString(); // Adds commas

        if (current >= end) {
            counter.innerText = end.toLocaleString();
            clearInterval(updateCounter);
        }
    }, 50);
}

window.onload = function () {
    animateCounter(4538764, 8688865, 5000, "counter1");
    animateCounter(5101, 7500, 5000, "counter2");
    animateCounter(5.94, 4.32, 5000, "counter3");
    animateCounter(11, 15, 5000, "counter4");
    animateCounter(996, 1200, 5000, "counter5");
    animateCounter(653, 850, 5000, "counter6");
    animateCounter(4329, 5000, 5000, "counter7");
    animateCounter(326458, 400000, 5000, "counter8");
};



const ctx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Usage in kWh',
            data: [120, 150, 180, 170, 160, 190],
            borderColor: 'blue',
            fill: false,
        }]
    }
});






