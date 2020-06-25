import React from 'react';
import {fetchCountries, fetchData} from "../../api";
import ChartSelector from "./ChartSelector";
import ChartContainer from "./ChartContainer";
import CountrySelector from "./countrySelector";

class ChartWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            data: {},
            chartType: 'line',
            chartLibrary: 'chart-js',
            country: 'Global',
            countries: {},
            loaded: false
        }
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleChartChange = this.handleChartChange.bind(this);
    }

    async componentDidMount() {
        const countries = await fetchCountries()
        const data = await fetchData(this.state.country)
        console.log(data)
        this.setState({countries: countries, data: data, loaded: true})
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country)
        this.setState({country: country, data: data, loaded: true});
    }

    handleChartChange = async (name, event) => {
        this.setState({chartType: name, chartLibrary: event})
    }

    render() {
        if (this.state.loaded) {
            return (
                <div>
                    <div className="flex flex-no-wrap justify-center ">
                        <div className="mr-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Select Country </label>
                            <CountrySelector loaded={this.state.loaded} countries={this.state.countries} handleCountryChange={this.handleCountryChange}/>
                        </div>
                        <div className="mr-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Line Chart Library </label>
                            <ChartSelector name={'line'} handleChange={this.handleChartChange}/>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Bar Chart Library </label>
                            <ChartSelector name={'bar'} handleChange={this.handleChartChange}/>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="w-3/4 h-3/4">
                            <ChartContainer id ={this.state.id} country={this.state.country} data={this.state.data} chartType={this.state.chartType} chartLibrary={this.state.chartLibrary}/>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                Loading...
            </div>
        )
    }

}

export default ChartWrapper;