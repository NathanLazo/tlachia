import React, { useState } from 'react';
import Nav from '@containers/nav';
import Grid from '@components/transactions/Grid';
import SearchBar from '@components/transactions/SearchBar';
import { QrReader } from 'react-qr-reader';

import { ethers } from 'ethers';
import contractAbi from '@abi/abi.json';

const Transactions = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);

    const contractAddress = '0xAFaB5a1E8a2FB06A54F4C962c7079d3B5ddA57dD';

    if (input != '') {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let signer = tempProvider.getSigner();
        let contract = new ethers.Contract(contractAddress, contractAbi, signer);
        contract.retrieve(input).then((result) => {
            setResult(result);
        });
    }

    return (
        <>
            <Nav />
            <div className="flex flex-col container mx-auto">
                <SearchBar setInput={setInput} />
                <Grid result={result} contractAddress={contractAddress} />
                {input == '' && (
                    <QrReader
                        onResult={(result, error) => {
                            if (input == '') {
                                if (result) {
                                    setInput(result?.text);
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
            </div>
        </>
    );
};
export default Transactions;
