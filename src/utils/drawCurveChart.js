import { GoogleCharts } from "google-charts";


export function drawChart(
    {
        data = [],
        title = '# Chart Title',
        elementId = null

    }
) {
    if (!elementId) {
        console.error("Element ID is required to render the chart.");
        return;
    }

    if (!data.length) {
        console.error("Data is required to render the chart.");
        return;
    }

    GoogleCharts.load(() => {

        const chartData = GoogleCharts.api.visualization.arrayToDataTable(data);
        
        const options = {
            title,
            curveType: "function",
            legend: { position: "top" },
        };
        
        const chart = new GoogleCharts.api.visualization.LineChart(
            document.getElementById(elementId)
        );
    
        chart.draw(chartData, options);
    })
}