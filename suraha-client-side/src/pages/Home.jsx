import React from 'react';

const Home = () => {
    const containerStyle = {
        fontFamily: "'Mulish', sans-serif",
        marginLeft: '10rem',
        
    };

    return (
        <div className="container mx-auto mt-10 items-center flex flex-col md:flex-row">
            <div className="flex flex-col items-start p-6 rounded-md w-full md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-black-800">
                    Get Your Rehab Done Virtually !!
                </h1>
                <div className="text-left overflow-auto max-h-32">
                    <p className="text-black-700">
                        Suraha provides progressive, and affordable healthcare, accessible
                        on mobile and online for everyone. Suraha provides progressive, and
                        affordable healthcare, accessible on mobile and online for
                        everyone. Suraha provides progressive, and affordable healthcare,
                        accessible on mobile and online for everyone.
                    </p>
                </div>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
                >
                    Get out of Addiction
                </button>
            </div>
            <div className="w-full md:w-1/2">
                <img src="/images/illustration.png" alt="" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Home;
