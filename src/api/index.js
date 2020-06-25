const fetch = require('node-fetch');

const url_1 = "https://api.covid19api.com";
const url_2 = "https://covid19.mathdro.id";

export const fetchData = async (country) => {
    try {
        if (country !== 'Global') {
            const fetch_response = await fetch(`${url_1}/total/dayone/country/${country}`);
            const jsonData = await fetch_response.json();

            return jsonData.map(({Confirmed, Deaths, Recovered, Date}) => ({
                confirmed: Confirmed,
                deaths: Deaths,
                recovered: Recovered,
                date: Date
            }));
        } else {
            return fetchGlobalTotals();
        }
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const fetch_response = await fetch(`${url_1}/countries`);
        const jsonData = await fetch_response.json();
        return sortJsonByCountry(jsonData);
    } catch (error) {
        return error;
    }
};

export const fetchGlobalData = async () => {
    try {
        const fetch_response = await fetch(`${url_1}/summary`);
        const jsonData = await fetch_response.json();
        return {
            confirmed: jsonData.Global.TotalConfirmed,
            deaths: jsonData.Global.TotalDeaths,
            recovered: jsonData.Global.TotalRecovered,
            lastUpdate: jsonData.Date
        };
    } catch (error) {
        console.log(error)
        return error;
    }
}

function sortJsonByCountry(jsonData) {
    jsonData.sort(function (a, b) {
        return a.Country.localeCompare(b.Country);
    });
    return jsonData;
}

async function fetchGlobalTotals() {
    const object = [];
    const fetch_response = await fetch(`${url_2}/api/daily`);
    const jsonData = await fetch_response.json();
    jsonData.map(x => object.push({
        date: x.reportDate,
        confirmed: x.totalConfirmed,
        deaths: x.deaths.total,
        recovered: 0
    }));
    return object;
}
