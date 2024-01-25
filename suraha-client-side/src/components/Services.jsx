import React from 'react';
import { IoRemoveOutline } from "react-icons/io5";
const Services = () => {
    const containerStyle = {
        fontFamily: "'Mulish', sans-serif",
    };
    const backgroundStyle = {
        backgroundImage: 'url("/images/Vector.png")',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' // Adjust the height as needed
    };

    const cardContents = [
        {
            title: 'AI-Powered Recovery Assistant',
            description:
                'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            image: '/images/Frame-1.png',
        },
        {
            title: 'Virtual Reality (VR) Therapy Module',
            description:
                'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/Frame-5.png',
        },
        {
            title: 'Predictive Relapse Risk Analysis',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/Frame-2.png',
        },
        {
            title: 'Emotion Recognition for Virtual Therapy Sessions',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/Frame-3.png',
        },
        {
            title: 'Emotion Recognition for Virtual Therapy Sessions',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/Frame-4.png',
        },
    ];

    return (
        <>
            <div>
                <h2 className="text-4xl font-bold text-black mb-8 text-center mt-8" style={containerStyle}>Services</h2>
               
            </div>

            <div style={backgroundStyle}>

                <div className="flex flex-wrap justify-center">
                    {cardContents.map((cardContent, index) => (
                        <div
                            key={index}
                            className="max-w-sm m-4 p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <img
                                src={cardContent.image}
                                alt={cardContent.title}
                                className="mb-3 rounded-md"
                            />
                            <a href="#" className="block">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {cardContent.title}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                {cardContent.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Services;
