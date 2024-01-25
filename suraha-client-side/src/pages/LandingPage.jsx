import React from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import Services from '../components/Services';

const LandingPage = () => {
    return (
        <div className="relative">
            <img
                src="/images/element.png"
                alt="Left Image"
                className="absolute top-4 left-4 z-10 h-32 w-32 object-cover mt-6"
            />
            <div className="ml-24 mt-6 relative z-11">
                <Navbar />
                <Home />
                <Services />
            </div>
        </div>
    );
}

export default LandingPage;
