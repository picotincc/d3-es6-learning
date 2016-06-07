import Chart from "./Chart";

export default class StackAreaChart extends Chart{

    constructor(props)
    {
        super(props);
        this.render();
    }

    render()
    {
        this._renderStackAreaChart();
    }

    _init()
    {
        super._init();

        this.area = d3.svg.area()
                          .x(d => this.xScale(d.x))
                          .y0(d => this.yScale(d.y0))
                          .y1(d => this.yScale(d.y + d.y0));

        this.areaStack = d3.layout.stack()
                    .values(d => d.values);

        this.colorScale = d3.scale.category10();
    }

    _renderStackAreaChart()
    {
        const formatData = this._dataProcess(this.data);
        if(this.stackPath === undefined)
        {
            this.stackPath = this.bodyGroup.selectAll("path")
                                           .data(this.areaStack(formatData))
                                           .enter()
                                           .append("path")
                                           .attr("class", item => `area ${item.name}`);
        }

        this.stackPath.attr("d", d => this.area(d.values))
                      .style("fill", (d, i) => this.colorScale(i));


    }

    _dataProcess(data)
    {
        const result = [
            {
                name: "A",
                values: []
            },
            {
                name: "B",
                values: []
            },
            {
                name: "C",
                values: []
            }
        ];

        data.forEach((item) => {
            result[0].values.push({
                x: item.month,
                y: item.a
            });
            result[1].values.push({
                x: item.month,
                y: item.b
            });
            result[2].values.push({
                x: item.month,
                y: item.c
            });
            return item;
        });

        return result;

    }



    _initScales()
    {
        this.xScale = d3.scale.linear().domain([ 0, 12 ]).range([ 0, this.width - this.margin.left - this.margin.right ]);
        this.yScale = d3.scale.linear().domain([ 0, 100 ]).range([this.height - this.margin.top - this.margin.bottom, 0 ]);
    }

    _renderAxisX()
    {
        if(this.axisXGroup === undefined)
        {
            this.axisXGroup = this.svg.append("g")
                                      .classed("axis axis-x", true)
                                      .attr("transform", `translate(${this.margin.left}, ${this.height - this.margin.bottom})`);
        }
        this.axisXGroup.transition().duration(600).call(this.xAxis);
    }

    _renderAxisY()
    {
        if (this.axisYGroup === undefined) {
            this.axisYGroup = this.svg.append("g")
                                      .classed("axis axis-y", true)
                                      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        }

        this.axisYGroup.transition().duration(600).call(this.yAxis);

    }






}
