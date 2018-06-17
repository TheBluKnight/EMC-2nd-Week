 var ctxPA = document.getElementById("polarChart").getContext('2d');
        var myPolarChart = new Chart(ctxPA, {
            type: 'polarArea',
            data: {
                labels: ["Money-kAED", "Water-Litre", "Food", "Animal Count", "Workers Count","Profit-kAED"],
                datasets: [
                    {
                        data: [150, 250, 144, 70, 8,200],
                        backgroundColor: ["rgba(0, 204, 0, 0.4)", "rgba(51, 204, 255, 0.4)", "rgba(255, 255, 102, 0.4)", "rgba(255, 80, 80, 0.4)", "rgba(255, 153, 0, 0.4)", "rgba(204, 102, 153, 0.4)"],
                        hoverBackgroundColor: ["rgba(0, 204, 0, 0.5)", "rgba(51, 204, 255, 0.5)", "rgba(255, 255, 102, 0.5)", "rgba(255, 80, 80, 0.5)", "rgba(255, 153, 0, 0.5)", "rgba(204, 102, 153, 0.5)"]
                    }
                ]
            },
            options: {
                responsive: true
            }    
        });
                    