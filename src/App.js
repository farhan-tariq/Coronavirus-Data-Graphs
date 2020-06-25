import React from 'react';
import {fetchGlobalData} from './api';
import Cards from './components/cards/cards';
import Nav from './components/layout/nav.jsx';
import ChartWrapper from "./components/charts/ChartWrapper";

class App extends React.Component {
    state = {
        globalData: {},
    }

    async componentDidMount() {
        const globalData = await fetchGlobalData();
        this.setState({globalData});
    }


    render() {
        const {globalData} = this.state;
        return (
            <div>
                <Nav/>
                <Cards data={globalData}/>
                <ChartWrapper/>
            </div>
        )
    }
}

export default App;
