import React, {useEffect} from 'react';
import * as d3 from 'd3'

const LineChart = (props) => {

console.log("here")
    useEffect(() => {
        drawLineChart(props);
    });

    function drawLineChart(data) {
        var margin = {top: 10, right: 30, bottom: 30, left: 50},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;


        var svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleTime()
            .domain(d3.extent(props, function (d) {
                return d.date;
            }))
            .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + (height + 5) + ")")
            .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));

        var y = d3.scaleLinear()
            .domain(d3.extent(props, function (d) {
                return +d.value;
            }))
            .range([height, 0]);

        svg.append("g")
            .attr("transform", "translate(-5,0)")
            .call(d3.axisLeft(y).tickSizeOuter(0));

        // Add the area
        svg.append("path")
            .datum(props)
            .attr("fill", "#69b3a2")
            .attr("fill-opacity", .3)
            .attr("stroke", "none")
            .attr("d", d3.area()
                .x(function (d) {
                    return x(d.date)
                })
                .y0(height)
                .y1(function (d) {
                    return y(d.confirmed)
                })
            )

        // Add the line
        svg.append("path")
            .datum(props)
            .attr("fill", "none")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", 4)
            .attr("d", d3.line()
                .x(function (d) {
                    return x(d.date)
                })
                .y(function (d) {
                    return y(d.confirmed)
                })
            )

        // Add the line
        svg.selectAll("myCircles")
            .data(props)
            .enter()
            .append("circle")
            .attr("fill", "red")
            .attr("stroke", "none")
            .attr("cx", function (d) {
                return x(d.date)
            })
            .attr("cy", function (d) {
                return y(d.confirmed)
            })
            .attr("r", 3)
    }

    return (
        <div className="flex justify-center p-10 ">
            <div id='vis0' className="w-3/4 h-3/4">
                <div id={"#" + this.props.id}/>
            </div>
        </div>
    )
}
export default LineChart;