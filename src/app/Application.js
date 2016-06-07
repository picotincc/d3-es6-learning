import LineChart from "./chart/LineChart";
import PieChart from "./chart/PieChart";
import StackAreaChart from "./chart/StackAreaChart";

const keys = [ "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf" ];
const colors = [ "#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00" ];

export default class Application {

    run()
    {
        this.displayStackedAreaChart();
    }



    displayLineChart() {
        console.log("The application is running now ...");

        const data1 = [
            { month: 0, value: 5 },
            { month: 1, value: 5 },
            { month: 2, value: 5 },
            { month: 3, value: 5 },
            { month: 4, value: 5 },
            { month: 5, value: 5 },
            { month: 6, value: 5 },
            { month: 7, value: 5 },
            { month: 8, value: 5 },
            { month: 9, value: 5 },
            { month: 10, value: 5 },
            { month: 11, value: 5 },
            { month: 12, value: 5 }
        ];
        const data2 = [
            { month: 0, value: 2 },
            { month: 1, value: 4 },
            { month: 2, value: 5 },
            { month: 3, value: 6 },
            { month: 4, value: 6 },
            { month: 5, value: 9 },
            { month: 6, value: 6 },
            { month: 7, value: 4 },
            { month: 8, value: 3 },
            { month: 9, value: 0 },
            { month: 10, value: 4 },
            { month: 11, value: 6 },
            { month: 12, value: 3 }
        ];

        const lineChart = new LineChart({
            width: 700,
            height: 400,
            margin: { top: 20, right: 30, bottom: 20, left: 30 },
            data1,
            data2,
            xPath: "month",
            yPath: "value"
        });

        setTimeout(() => {
            data2[5]["value"] = 6;
            data2[9]["value"] = 2;

            lineChart.render();
        }, 1000);
    }


    randomData() {
        return keys.map(key => {
            return { key, value: Math.random() }
        });
    }


    runPieChart(){
        const pie = new PieChart({
            width: 500,
            height: 400,
            margin: {
                top: 30,
                right: 30,
                bottom: 30,
                left: 30
            },
            data: randomData(),
            colors
        });

        d3.select(".refresh").on("click", () => {
            pie.refresh(randomData());
        });
    }

    displayStackedAreaChart(){
        const stackData = [
            { month:0, a:20, b:30, c:50 },
            { month:1, a:20, b:30, c:50 },
            { month:2, a:30, b:40, c:30 },
            { month:3, a:30, b:40, c:30 },
            { month:4, a:40, b:40, c:20 },
            { month:5, a:50, b:40, c:10 },
            { month:6, a:30, b:20, c:50 },
            { month:7, a:10, b:30, c:60 },
            { month:8, a:30, b:50, c:20 },
            { month:9, a:70, b:10, c:20 },
            { month:10, a:50, b:40, c:10 },
            { month:11, a:30, b:40, c:30 },
            { month:12, a:50, b:20, c:30 }

        ];

        const stackAreaChart = new StackAreaChart({
            width: 700,
            height: 400,
            margin: {
                top: 30,
                right: 30,
                bottom: 30,
                left: 30
            },
            data: stackData
        });

    }
}
