import Image from 'next/image';
import React from 'react';
import QRImage from '@images/qr.png';
export default function qr() {
    return <Image src={QRImage} alt="QR for testing" width={500} height={500} />;
}
