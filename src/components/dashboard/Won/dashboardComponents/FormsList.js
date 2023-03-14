import React from 'react';

const FormsList = ({ formSelected, fieldsArray, handleForm }) => {
    return (
        <div className={formSelected ? 'hidden lg:block flex-shrink-0 order-first' : 'lg:block flex-shrink-0 order-first'}>
            <div className="h-screen relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
                <div className="h-16 bg-white px-6 flex flex-col justify-center border-b border-gray-200">
                    <div className="flex items-baseline space-x-3">
                        <h2 className="text-lg font-bold text-gray-900">{fieldsArray[0]?.title || 'Granja Tlachia'}</h2>
                    </div>
                </div>
                <nav aria-label="Forms list" className="min-h-0 flex-1 overflow-y-auto">
                    <ul className="border-b border-gray-200 divide-y divide-gray-200">
                        {fieldsArray[0]?.forms.map((form) => (
                            <li key={form.id} className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#DFB600] focus:border-[#DFB600]">
                                <div className="flex justify-between space-x-3">
                                    <div className="min-w-0 flex-1">
                                        <button className="block focus:outline-none" onClick={() => handleForm(form.formId)}>
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-sm font-medium text-gray-900 truncate">{form.title}</p>
                                            <p className="text-sm text-gray-500 truncate">{form.description}</p>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#DFB600] focus:border-[#DFB600]">
                            <div className="flex justify-between space-x-3">
                                <div className="min-w-0 flex-1">
                                    <button className="block focus:outline-none" onClick={() => handleForm('observations')}>
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-gray-900 truncate">Observaciones</p>
                                        <p className="text-sm text-gray-500 truncate">Registro adicional de observaciones</p>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default FormsList;
