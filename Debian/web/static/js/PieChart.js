var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
        labels: ["Milk", "Eggs", "Corn", "Potato", "Tomato", "Corn","Total"],
        datasets: [
            {
                data: [250, 1080, 1200, 1250, 911, 1520 , 5891],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#3f51b5","#cddc39"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#5c6bc0","#dce775"]
            }
        ]
    },
    options: {
        responsive: true
    }    
});