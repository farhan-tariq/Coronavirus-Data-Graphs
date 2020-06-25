import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = (data) => {
    const lineChart = (
        data.props ? (
            <Line
                data={{
                    labels: data.props.map((x) => new Date(x.date).toLocaleDateString()),
                    datasets: [{
                        data: data.props.map((x) => x.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        backgroundColor: '#c8ceff',
                        fill: false,
                    }, {
                        data: data.props.map((x) => x.recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: '#d8f2e2',
                        fill: false,
                    }, {
                        data: data.props.map((x) => x.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: '#FFCCCB',
                        fill: false,
                    },
                    ],
                }}
            />
        ) : null
    );

    return (
        <div>
            {lineChart}
        </div>
    );

}
export default LineChart;
