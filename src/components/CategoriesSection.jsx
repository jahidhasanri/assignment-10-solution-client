import React from 'react';

const CategoriesSection = ({ darkTheme }) => {
    return (
        <div>
            <section className={`py-12 mt-4 ${darkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10">Sports Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:mr-4 md:ml-4 xl:grid-cols-3 lg:grid-cols-4 gap-14">
                        {/* Category 1 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Cricket</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/1Qp27y1/setcomp-main-1-47.jpg"
                                    alt="Cricket"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Football</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/kgzRgsd/football-equipment-illustration-collection-set-207579-3564.jpg"
                                    alt="Football"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Basketball</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/wCzm8SG/amazon-gold-box-basketball-essentials-gear-equipment-apparel.webp"
                                    alt="Basketball"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 4 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Tennis</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/GHPSZNH/Ag-AAAB0-Agt-WHHGr-EOR63u5qg-EGw-ASA.jpg"
                                    alt="Tennis"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 5 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Swimming</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/wyvt27C/ROKA-Equipment.jpg"
                                    alt="Swimming"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 6 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Gym Equipment</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/gwYhV1n/71h-Lbft-SOQL.jpg"
                                    alt="Gym Equipment"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 7 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Cycling</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/DCy1QzG/blue-bicycle-sportswear-accessories-cycling-realistic-mockup-set-isolated-vector-illustration-1284-8.jpg"
                                    alt="Cycling"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 8 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Baseball</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/5rcJY7Z/baseball-bat-ball-batting-helmet-260nw-2393879275.webp"
                                    alt="Baseball"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 9 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Rugby</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/Fm91bQW/DALL-E-2024-10-20-10-15-55-A-highly-detailed-and-photorealistic-image-showcasing-equipment-clothing.webp"
                                    alt="Rugby"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 10 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Hockey</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/qBnhZ9Z/CLP-001-HOC-Feb-Wk1-S1-Bauer-1280x.jpg"
                                    alt="Hockey"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 11 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Golf</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/n3t9v7F/shutterstock-390627805.webp"
                                    alt="Golf"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Category 12 */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Volleyball</h3>
                            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src="https://i.ibb.co/ZLypXb1/71a-DG4a6-UEL-AC-SL1500.jpg"
                                    alt="Volleyball"
                                    className="w-full h-[300px] p-2 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CategoriesSection;
