import React, {Component} from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        const data = [12, 5, 6, 6, 9, 10];
        this.drawBarChart(data)
    }

    drawBarChart(data) {
        let h = this.props.height;
        let w = this.props.width;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 500);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - (10 * d) - 3)
            .attr("transform", "rotate(-90")
    }

    render() {
        return (
            <div className="flex justify-center p-10 ">
                <div id='vis0' className="w-3/4 h-3/4">
                    <div id={"#" + this.props.id}/>
                </div>
            </div>
        )
    }
}

export default BarChart;