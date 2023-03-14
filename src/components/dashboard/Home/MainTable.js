import Link from 'next/link';
import React from 'react';

const MainTable = ({ projects, HandleEdit, handleDelete, setOpenCreateModal }) => {
    return (
        <main className="flex-1">
            <div className="py-6">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">Proyectos</h1>
                            <p className="mt-2 text-sm text-gray-700">Da click en un proyecto para dirigirte a su dashboard, si no cuentas con un proyecto, da click en agregar proyecto.</p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#DFB600] hover:bg-[#B59400] px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#9e8102] focus:ring-offset-2 sm:w-auto"
                                onClick={() => setOpenCreateModal(true)}
                            >
                                Agregar proyecto
                            </button>
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
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-blue-600">
                                                    Editar
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-red-600">
                                                    Eliminar
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {projects.map((project) => (
                                                <tr key={project._id} className="cursor-pointer">
                                                    <td className="whitespace-nowrap">
                                                        <Link href={`/dashboard/${project.product._key.toLowerCase()}/${project._id}`}>
                                                            <button className="flex justify-self-auto w-full h-auto hover:bg-gray-200">
                                                                <div className="flex w-[50%] whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                    {project.name}
                                                                    <p className="text-xs text-gray-500 uppercase">#{project._id?.slice(15, 22)}...</p>
                                                                </div>
                                                                <td className="whitespace-nowrap w-auto px-3 py-4 text-sm text-gray-500">{project.product._key}</td>
                                                            </button>
                                                        </Link>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-600 z-50">
                                                        <button
                                                            className="w-auto h-auto hover:underline"
                                                            onClick={(e) => {
                                                                HandleEdit(e, project._id, project.name);
                                                            }}
                                                        >
                                                            Editar
                                                        </button>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-red-600 z-50">
                                                        <button
                                                            className="w-auto h-auto hover:underline"
                                                            onClick={(e) => {
                                                                handleDelete(e, project._id, project.name);
                                                            }}
                                                        >
                                                            Eliminar
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
