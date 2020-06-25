import React from 'react';
import logo from "../../images/logo.png";

const Nav = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="flex py-2 justify-center">
                <h1 className="font-serif py-10 text-3xl font-medium text-gray-700 ">
                    Coronavirus Tracker
                </h1>
                <img src={logo} className="w-32" alt="Coronavirus"/>
            </div>
        </nav>
    );
}

export default Nav;
