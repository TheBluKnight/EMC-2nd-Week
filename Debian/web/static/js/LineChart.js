
// Main chart
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July","August", "September" ,"October", "November","December"],
datasets: [{
label: "Monthly Profit",
fillColor: "#fff",
backgroundColor: 'rgba(255, 255, 255, .3)',
borderColor: 'rgba(255, 204, 0)',
data: [3600, 2400, 7600, 2344, 5660, 1200, 6500,7800,11265,9631,7000,17689],

}]
},
options: {
    
legend: {
labels: {
    fontColor: "#fff",
}
},
scales: {
xAxes: [{
    gridLines: {
        display: true,
        color: "rgba(255,255,255,.25)"
    },
    ticks: {
        fontColor: "#fff",
    },
}],
yAxes: [{
    display: true,
    gridLines: {
        display: true,
        color: "rgba(255,255,255,.25)"
    },
    ticks: {
        fontColor: "#fff",
    },
}],
}
}
});