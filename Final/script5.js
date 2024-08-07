document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('vaccineImpactChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Diseases Eradicated',
                'Lives Saved Annually',
                'Cases Prevented Annually',
                'Global Vaccine Coverage'
            ],
            datasets: [{
                label: 'Impact Statistics',
                data: [2, 154, 20, 80],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Impact (in millions)',
                    }
                }
            }
        }
    });
});
