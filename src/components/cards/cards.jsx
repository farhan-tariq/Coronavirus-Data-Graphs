import React from 'react';
import CountUp from 'react-countup';

const Cards = (props) => {
    if (!props.data.confirmed) {
        return 'Loading....';
    }
    return (
        <div className="container mx-auto py-20">
            <div className="lg:flex lg:flex-wrap">
                <div className="lg:w-1/3 px-10 pb-6">
                    <div className="bg-white rounded-lg shadow-xl p-5">
                        <h2 className="border-l-4 border-blue-600 -ml-5 py-3 pl-4 font-normal text-xl text-gray-600">
                            Infected
                        </h2>
                        <div className="-mt-2 text-3xl text-gray-900">
                            <CountUp start={0} end={props.data.confirmed} duration={2} separator=","/>
                        </div>
                        <div className="text-l text-gray-700">
                            <h2>{new Date(props.data.lastUpdate).toDateString()}</h2>
                        </div>
                        <div className="text-md text-gray-800">
                            <h2>COVID-19 - Global Cases</h2>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 px-10 pb-6">
                    <div className="bg-white rounded-lg shadow-xl p-5">
                        <h2 className="border-l-4 border-green-600 -ml-5 py-3 pl-4 font-normal text-xl text-gray-600">
                            Recovered
                        </h2>
                        <div className="-mt-2 text-3xl text-gray-900">
                            <CountUp start={0} end={props.data.recovered} duration={2} separator=","/>
                        </div>
                        <div className="text-l text-gray-700">
                            <h2>{new Date(props.data.lastUpdate).toDateString()}</h2>
                        </div>
                        <div className="text-md text-gray-800">
                            <h2>COVID-19 - Global Recoveries</h2>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 px-10 pb-6">
                    <div className="bg-white rounded-lg shadow-xl p-5">
                        <h2 className="border-l-4 border-red-600 -ml-5 py-3 pl-4 font-normal text-xl text-gray-600">
                            Deaths
                        </h2>
                        <div className="-mt-2 text-3xl text-gray-900">
                            <CountUp start={0} end={props.data.deaths} duration={2} separator=","/>
                        </div>
                        <div className="text-l text-gray-700">
                            <h2>{new Date(props.data.lastUpdate).toDateString()}</h2>
                        </div>
                        <div className="text-md text-gray-800">
                            <h2>COVID-19 - Global Deaths</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
