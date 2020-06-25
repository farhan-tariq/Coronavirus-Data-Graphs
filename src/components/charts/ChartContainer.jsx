import React from 'react';
import ChartJsLineChart from './chart-js/LineChart';
import RoughLineChart from './rough-wiz/LineChart';
import D3LineChart from './d3/LineChart';
import D3BarChart from './d3/BarChart';


class ChartContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {getChart(this.props.chartType, this.props.chartLibrary, this.props.data)}
            </div>
        )
    }
}

function getChart(chartType, chartLibrary, data) {
    if (chartType === 'line') {
        if (chartLibrary === 'chart-js') {
            return (<ChartJsLineChart props={data}/>);
        }

        if (chartLibrary === 'rough-wiz') {
            return (<RoughLineChart props={data}/>);
        }

        if (chartLibrary === 'd3-js') {
            return (<D3LineChart props={data}/>);
        }

    }
    if (chartType === 'bar') {
        if (chartLibrary === 'd3-js') {
            return (<D3BarChart props={data}/>);
        }
    }
}

export default ChartContainer;