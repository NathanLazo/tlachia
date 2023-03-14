import React from 'react';

const Packaging = () => {
    return (
        <div className="mx-4">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-3">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="packaging" className="block text-sm font-medium text-gray-700">
                                        Tipo de empaquetado
                                    </label>
                                    <input
                                        type="text"
                                        name="packaging"
                                        id="packaging"
                                        className="mt-1 focus:ring-[#DFB600] focus:border-[#DFB600] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                                        Peso
                                    </label>
                                    <input
                                        type="text"
                                        name="weight"
                                        id="weight"
                                        className="mt-1 focus:ring-[#DFB600] focus:border-[#DFB600] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                    Foto
                                </label>
                                <div className="mt-1 flex items-center">
                                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                    <button
                                        type="button"
                                        name="photo"
                                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DFB600]"
                                    >
                                        Cambiar Foto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packaging;
