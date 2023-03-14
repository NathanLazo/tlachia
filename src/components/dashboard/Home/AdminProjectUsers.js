import React from 'react';

const MainTable = ({ projects }) => {
    return (
        <main className="flex-1">
            <div className="py-6">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">Administración de acceso</h1>
                            <p className="mt-2 text-sm text-gray-700">Al dar click en editar personal podrás configurar los accesos y añadir nuevo personal a cada proyecto</p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="flex justify-self-auto w-auto">
                                                    <div className=" w-[50%] py-3.5 pl-4 pr-5 text-left text-sm font-semibold text-gray-900 sm:pl-6">Nombre</div>
                                                    <div className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Producto</div>
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-green-500">
                                                    Agregar usuarios
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {projects.map((project) => (
                                                <tr key={project._id} className="cursor-pointer">
                                                    <td className="whitespace-nowrap">
                                                        <button
                                                            className="flex justify-self-auto w-full h-auto hover:bg-gray-200"
                                                            onClick={() => {
                                                                console.log('users list');
                                                            }}
                                                        >
                                                            <div className="flex w-[50%] whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                {project.name}
                                                                <p className="text-xs text-gray-500 uppercase">#{project._id?.slice(15, 22)}...</p>
                                                            </div>
                                                            <td className="whitespace-nowrap w-auto px-3 py-4 text-sm text-gray-500">{project.product._key}</td>
                                                        </button>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500 z-50">
                                                        <button
                                                            className="w-auto h-auto hover:underline"
                                                            onClick={() => {
                                                                console.log('agregar usuario');
                                                            }}
                                                        >
                                                            Agregar usuario
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default MainTable;
