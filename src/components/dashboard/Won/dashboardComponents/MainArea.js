import React from 'react';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';

import Observations from '../formsComponents/Observations';
import SaveButton from '../formsComponents/SaveButton';

import Features from '../formsComponents/sagarpa/Features';
import Register from '../formsComponents/sagarpa/Register';

import Food from '../formsComponents/breeding/Food';

import Treatments from '../formsComponents/care/Treatments';
import Vaccines from '../formsComponents/care/Vaccines';

import TransportationInfo from '../formsComponents/transportation/TransportationInfo';
// Faltan imports de los UI por hacer

import Channel from '../formsComponents/slaughterhouse/Channel';
import Deliveries from '../formsComponents/slaughterhouse/Deliveries';
import Sacrifice from '../formsComponents/slaughterhouse/Sacrifice';
import PackagingSlaughter from '../formsComponents/slaughterhouse/Packaging';
import StorageSlaughter from '../formsComponents/slaughterhouse/Storage';

import CutsPackage from '../formsComponents/packaging/Cuts';
import Debone from '../formsComponents/packaging/Debone';
import PackagingPackage from '../formsComponents/packaging/Packaging';
import ReceptionPackage from '../formsComponents/packaging/Reception';
import StoragePackage from '../formsComponents/packaging/Storage';
import Injection from '../formsComponents/packaging/Injection';
import MeetPerformance from '../formsComponents/packaging/MeetPerformance';
import ExitPackage from '../formsComponents/packaging/Exit';

import CutsExhibition from '../formsComponents/exhibition/Cuts';
import ExitExhibition from '../formsComponents/exhibition/Exit';
import PackagingExhibition from '../formsComponents/exhibition/Packaging';
import ReceptionExhibition from '../formsComponents/exhibition/Reception';
import StorageExhibition from '../formsComponents/exhibition/Storage';

import { ethers } from 'ethers';
import contractAbi from '@abi/abi.json';

import { QrReader } from 'react-qr-reader';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

const MainArea = ({ form, setFormSelected }) => {
    const [observation, setObservation] = React.useState('');
    const [cow, setCow] = React.useState('');

    const contractAddress = '0xAFaB5a1E8a2FB06A54F4C962c7079d3B5ddA57dD';

    const handleSubmit = (e) => {
        e.preventDefault();
        window.ethereum.request({ method: 'eth_requestAccounts' }).catch((err) => {
            console.log(err);
        });

        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let signer = tempProvider.getSigner();
        let contract = new ethers.Contract(contractAddress, contractAbi, signer);
        contract.store(cow, observation).then((result) => {
            console.log(result);
            toast.success('Transacción exitosa');
        });
    };

    return (
        <section aria-labelledby="form-container" className="min-w-0 mx-4 flex-1 h-full flex flex-col overflow-hidden xl:order-last">
            <ArrowSmLeftIcon className=" lg:hidden ml-3 mt-4 h-10 w-10 text-gray-700 cursor-pointer" aria-hidden="true" onClick={() => setFormSelected(false)} />
            <div className="min-h-0 flex-1 overflow-y-auto">
                {/* Thread section*/}
                <form className="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8" onSubmit={handleSubmit}>
                    <p className="flex">
                        You can use this qr in your phone in order to follow the video tutorial
                        <Link href="/qr">
                            <p className="text-red-500 pl-1 cursor pointer">{'[Here]'}</p>
                        </Link>
                    </p>

                    {cow == '' && (
                        <QrReader
                            onResult={(result, error) => {
                                if (cow == '') {
                                    if (result) {
                                        setCow(result?.text);
                                    }

                                    if (error) {
                                        console.log(error);
                                    }
                                }
                            }}
                            style={{ width: '100%' }}
                            constraints={{
                                facingMode: 'environment',
                            }}
                        />
                    )}
                    {form == 'observations' && <Observations setObservation={setObservation} />}

                    {/* Sagarpa */}
                    {form == 'sagarpa_info' && <Features />}
                    {form == 'sagarpa_alta' && <Register />}

                    {/* Breeding */}
                    {form == 'crianza_alimento' && <Food />}

                    {/* Care */}
                    {form == 'cuidados_tratamientos' && <Treatments />}
                    {form == 'cuidados_vacunas' && <Vaccines />}

                    {/* Transportation */}
                    {/* Aquí faltan los formularios de transporte*/}
                    {form == 'transporte_info' && <TransportationInfo />}

                    {/* Slaughterhouse */}
                    {form == 'rastro_canal' && <Channel />}
                    {form == 'rastro_entregas' && <Deliveries />}
                    {form == 'rastro_sacrificio' && <Sacrifice />}
                    {form == 'rastro_empaquetado' && <PackagingSlaughter />}
                    {form == 'rastro_almacenamiento' && <StorageSlaughter />}

                    {/* Packaging */}
                    {form == 'empaquetado_corte' && <CutsPackage />}
                    {form == 'empaquetado_deshuese' && <Debone />}
                    {form == 'empaquetado_empaquetado' && <PackagingPackage />}
                    {form == 'empaquetado_recepcion' && <ReceptionPackage />}
                    {form == 'empaquetado_almacenamiento' && <StoragePackage />}
                    {form == 'empaquetado_inyeccion' && <Injection />}
                    {form == 'empaquetado_rendimiento' && <MeetPerformance />}
                    {form == 'empaquetado_salida' && <ExitPackage />}

                    {/* Exhibition */}
                    {form == 'exhibicion_corte' && <CutsExhibition />}
                    {form == 'exhibicion_salida' && <ExitExhibition />}
                    {form == 'exhibicion_empaquetado' && <PackagingExhibition />}
                    {form == 'exhibicion_recepcion' && <ReceptionExhibition />}
                    {form == 'exhibicion_almacenamiento' && <StorageExhibition />}

                    {form != '' && <SaveButton />}
                </form>
            </div>
        </section>
    );
};

export default MainArea;
