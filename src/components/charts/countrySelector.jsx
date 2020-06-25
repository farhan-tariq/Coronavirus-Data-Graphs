import React from 'react';


const Countries = ({countries, handleCountryChange}) => {
    if (countries[0]) {
        return (
            <select className="block  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    defaultValue={''} onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="Global">Global</option>
                {countries.map(({Country, Slug}, i) => <option key={i + 1} value={Slug}>{Country}</option>)}
            </select>
        );
    }
    return null;
};
export default Countries;