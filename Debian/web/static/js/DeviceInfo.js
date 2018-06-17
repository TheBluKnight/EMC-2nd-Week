$(function () {
    $('.min-chart#chart-Battery').easyPieChart({
        barColor: "#4caf50",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});

$(function () {
    $('.min-chart#chart-Temp').easyPieChart({
        barColor: "#ff9800 ",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});

$(function () {
    $('.min-chart#chart-Humd').easyPieChart({
        barColor: "#03a9f4  ",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});