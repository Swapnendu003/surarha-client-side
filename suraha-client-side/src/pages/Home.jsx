import React from 'react';

const Home = () => {
    const containerStyle = {
        fontFamily: "'Mulish', sans-serif",
    };

    return (
        <div className="container flex mx-auto mt-10 items-center" style={containerStyle}>
            <div className="container flex flex-col items-start p-6 rounded-md ">
                <h1 className='text-2xl font-extrabold mb-4 text-black-800'>Get Your Rehab Done Virtually !!</h1>
                <div className="text-left overflow-auto max-h-32">
                    <p className="text-black-700">
                        Suraha provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                        Suraha provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                        Suraha provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                    </p>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4">Get out of Addiction</button>
            </div>
            <div className="container">
                <img src="/images/illustration.png" alt="" />
            </div>
        </div>
    );
}

export default Home;
    