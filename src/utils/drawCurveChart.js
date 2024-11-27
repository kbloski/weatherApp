export function drawChart(
    {
        data = [],
        title = '# Chart Title',
        elementId = null

    }
) {
    var data = google.visualization.arrayToDataTable(data);
    
    var options = {
        title,
        curveType: "function",
        legend: { position: "top" },
    };
    
    var chart = new google.visualization.LineChart(
        document.getElementById(elementId)
    );

    chart.draw(data, options);
}