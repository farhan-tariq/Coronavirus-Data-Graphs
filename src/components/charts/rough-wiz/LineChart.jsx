import React from 'react';
import {Line} from 'react-roughviz';

const LineChart = (data) => {
    const lineChart = (
        data.props[0] ? (
                <Line
                    title='Covid-19 LineChart'
                    data={[
                        data.props.map((x) => x.deaths),
                        data.props.map((x) => x.recovered),
                        data.props.map((x) => x.confirmed)
                    ]}
                    colors={['red', 'green', 'blue']}
                    highlight={'coral'}
                    height={500}
                    width={1200}
                    interactive={false}
                    legend={true}
                    axisFontSize={'1rem'}
                    strokeWidth={15}
                    roughness={0.1}
                />
            ) :
            <div>
                <label className="flex justify-center block uppercase tracking-wide text-gray-700 text-2xl font-bold mb-2">
                    No data available
                </label>
                <Line
                    title='Covid-19 LineChart'
                    data={[]}
                    colors={['red', 'green', 'blue']}
                    highlight={'coral'}
                    height={500}
                    width={1200}
                    interactive={false}
                    legend={true}
                    axisFontSize={'1rem'}
                    strokeWidth={15}
                    roughness={0.1}
                />
            </div>

    );
    return (<div>{lineChart}</div>)
}
export default LineChart;