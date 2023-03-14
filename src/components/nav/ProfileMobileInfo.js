import React, { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';
import { client } from '@lib/sanityClient';

const ProfileMobileInfo = () => {
    const { userId } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const fetch = async (SanityClient = client) => {
        const query = `*[_type == "users" && _id == "${userId}"] {
            "name": name,
            "email": email,
        }`;
        const userFromDB = await SanityClient.fetch(query);
        setName(userFromDB[0].name);
        setEmail(userFromDB[0].email);
    };

    useEffect(() => {
        fetch();
    }, [userId]);

    return (
        <div className="flex items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-black">{/* Profile image goes here */}</div>
            </div>
            <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{name}</div>
                <div className="text-sm font-medium text-gray-500">{email}</div>
            </div>
        </div>
    );
};

export default ProfileMobileInfo;
