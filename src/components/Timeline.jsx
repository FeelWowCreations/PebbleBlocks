import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <h1 className='text-3xl font-bold p-6 mb-1 text-center'>Our Journey</h1>
            <div className="min-h-screen flex justify-center">
                <div className="w-full max-w-6xl mx-auto">
                    {timelineData.map((item, index) => (
                        <TimelineEntry key={index} data={item} isLeft={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TimelineEntry = ({ data, isLeft }) => {
    return (
        <motion.div 
            className={`flex flex-col md:flex-row w-full mb-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="md:w-5/12 px-4">
                <motion.div 
                    className="bg-white rounded-lg shadow-lg p-6"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">{data.title}</h2>
                        {data.editable && (
                            <div className="flex">
                                <motion.button 
                                    className="text-blue-500 mr-2"
                                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                                >
                                    <i className="far fa-edit"></i>
                                </motion.button>
                                <motion.button 
                                    className="text-red-500"
                                    whileHover={{ scale: 1.2, color: "#ef4444" }}
                                >
                                    <i className="far fa-trash-alt"></i>
                                </motion.button>
                            </div>
                        )}
                    </div>
                    <p className="text-gray-600">{data.description}</p>
                </motion.div>
            </div>
            <div className="md:w-2/12 flex justify-center items-center">
                <div className="w-1 h-full bg-green-300 relative">
                    <motion.div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="bg-white border-2 border-green-300 text-gray-600 rounded-full p-3 font-bold hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                            <div>{data.date.month}</div>
                            <div>{data.date.year}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const timelineData = [
    {
        title: "Starting of Hollowblocks ",
        date: {year: "2010" },
        description: "Hollow Blocks Unit 1 was established in the year 2010, with a vision to produce high quality of solid and hollow blocks, with high-tech machinery and skill force, We started producing 5000 blocks a day.",
        editable: true
    },
    {
        title: "Hollowblocks Unit-2",
        date: {year: "2014" },
        description: "With the great success of the unit one and enormous support from our customers we expanded out manufacturing unit to meett the demand for our products. Our transition made us upgrade to the best in class machines to produce the blocks in high strength and rigidity."
    },
    {
        title: "Fly ash Bricks",
        date: {year: "2017" },
        description: "After Success of two manufacturing units we have expanded our product portfilo by getting into the market of manufacturing of Fly ash bricks.",
        editable: true
    },
    {
        title: "Velavan Enterprise",
        date: {year: "2019" },
        description: "We have started supplying all kinds of construction materials in partnership with the leading brands across Coimbatore, Tiruppur, Pollachi, Erode Districts."
    },
    {
        title: "Pebble Blocks",
        date: {year: "2022" },
        description: "With the enromous experience of manufacturing bricks and blocks we have rebranded ourself and expanded our portfolio even further by introducing the paver blocks. Our paver blocks are manufactured using the latest technology available",
        editable: true
    }
];

export default Timeline;