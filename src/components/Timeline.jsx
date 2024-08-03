import React from 'react';

const Timeline = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <p className='text-2xl p-6 mb-1'>Our Journey:</p>
            <div className="min-h-screen flex justify-center">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Timeline Entry */}
                    <div className="flex flex-col md:flex-row w-full mb-3">
                        {/* Left Column */}
                        <div className="md:w-2/5 px-2 py-12 lg:py-3">
                            <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                <div className="text-gray-600 mb-2 flex justify-between">
                                    <div className="font-bold">Starting of PKM Hollowblocks</div>
                                    <div className="flex flex-row">
                                        <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                                            <i className="far fa-edit"></i>
                                        </button>
                                        <button className="text-red-500 hover:text-red-300 transition duration-200">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    PKM Hollow Blocks Unit 1 was established in the year 2010, with a vision to produce high quality of solid and hollow blocks, with high-tech
                                    machinery and skill force, We started producing 5000 blocks a day.
                                </div>
                            </div>
                        </div>
                        {/* Line Column */}
                        <div className="md:w-1/5 flex justify-center">
                            <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg ">
                                    <div>January</div>
                                    <div>2010</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Repeat Timeline Entries as needed */}
                    <div className="flex flex-col md:flex-row w-full mb-3">
                        {/* Left Column */}
                        <div className="md:w-2/5 px-2 py-12 lg:py-3">
                            {/* Optional content */}
                        </div>
                        {/* Line Column */}
                        <div className="md:w-1/5 flex justify-center">
                            <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg">
                                    <div>June</div>
                                    <div>2014</div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="md:w-2/5 px-2 py-12 lg:py-3">
                            <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5 ">
                                <div className="text-gray-600 mb-2 flex justify-between">
                                    <div className="font-bold">PKM Hollowblocks Unit-2</div>
                                </div>
                                <div className="text-gray-600">
                                    With the great success of the unit one and enormous support from our customers we expanded out manufacturing unit to meett the demand for our products.
                                    Our transition made us upgrade to the best in class machines to produce the blocks in high strength and rigidity.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full mb-3">
                        {/* Left Column */}
                        <div className="md:w-2/5 px-2 py-12 lg:py-3">
                            <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                <div className="text-gray-600 mb-2 flex justify-between">
                                    <div className="font-bold">Fly ash Bricks</div>
                                    <div className="flex flex-row">
                                        <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                                            <i className="far fa-edit"></i>
                                        </button>
                                        <button className="text-red-500 hover:text-red-300 transition duration-200">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    After Success of two manufacturing units we have expanded our product portfilo by getting into the market of manufacturing of Fly ash bricks.
                                </div>
                            </div>
                        </div>
                        {/* Line Column */}
                        <div className="md:w-1/5 flex justify-center">
                            <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg">
                                    <div>March</div>
                                    <div>2017</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Repeat Timeline Entries as needed */}
                    <div className="flex flex-col md:flex-row w-full mb-3">
                        {/* Left Column */}
                        <div className="md:w-2/5 px-2 py-12 lg:py-3">
                            {/* Optional content */}
                        </div>
                        {/* Line Column */}
                        <div className="md:w-1/5 flex justify-center">
                            <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg">
                                    <div>Feburary</div>
                                    <div>2019</div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="md:w-2/5 px-2 py-12 lg:py-3">
                            <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                <div className="text-gray-600 mb-2 flex justify-between">
                                    <div className="font-bold">Velavan Enterprise</div>
                                </div>
                                <div className="text-gray-600">
                                    We have started supplying all kinds of construction materials in partnership with the leading brands across Coimbatore, Tiruppur, Pollachi, Erode Districts
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full mb-3">
                        {/* Left Column */}
                        <div className="md:w-2/5 px-2 py-1 lg:py-3">
                            <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                <div className="text-gray-600 mb-2 flex justify-between">
                                    <div className="font-bold">Pebble Blocks</div>
                                    <div className="flex flex-row">
                                        <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                                            <i className="far fa-edit"></i>
                                        </button>
                                        <button className="text-red-500 hover:text-red-300 transition duration-200">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="text-gray-600 ">
                                    With the enromous experience of manufacturing bricks and blocks we have rebranded ourself and expanded our portfolio even further by introducing the paver blocks 
                                    our paver blocks are manufactured using the latest technology available
                                </div>
                            </div>
                        </div>
                        {/* Line Column */}
                        <div className="md:w-1/5 flex justify-center py-12 lg:py-0">
                            <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg">
                                    <div>September</div>
                                    <div>2022</div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Timeline;
