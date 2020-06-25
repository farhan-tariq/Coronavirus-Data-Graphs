import React from 'react'

const ChartSelector = ({name, handleChange}) => {
    if (name) {
        return (
            <select
                className="block bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={name} onChange={(e) => handleChange(name, e.target.value)}>
                <option key={1} value={'chart-js'}>ChartJS</option>
                <option key={2} value={'rough-wiz'}>RoughWiz</option>
                <option key={3} value={'d3-js'}>D3.js</option>
            </select>
        )
    }
    return null;
};

export default ChartSelector;