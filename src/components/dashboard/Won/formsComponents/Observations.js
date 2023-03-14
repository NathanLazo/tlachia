import React from 'react';

const Observations = ({ setObservation }) => {
    return (
        <div className="mx-4 mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-3">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <fieldset>
                                <legend className="text-base font-medium text-gray-900">Descripción</legend>
                                <div className="mt-4 space-y-4">
                                    <textarea
                                        id="descripcion"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-[#DFB600] focus:border-[#DFB600] "
                                        placeholder="Observaciones..."
                                        onChange={(e) => {
                                            setObservation(e.target.value);
                                        }}
                                    ></textarea>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Observations;
