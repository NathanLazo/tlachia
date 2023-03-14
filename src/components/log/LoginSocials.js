import FacebookIcon from '@assets/facebook-icon';
import GithubIcon from '@assets/github-icon';
import TwitterIcon from '@assets/twitter-icon';
import React from 'react';

const LoginSocials = ({ text }) => {
    return (
        <div>
            <p className="text-sm font-medium text-gray-700">{text}</p>
            <div className="mt-1 grid grid-cols-3 gap-3">
                <div>
                    <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">Facebook</span>
                        <FacebookIcon />
                    </div>
                </div>

                <div>
                    <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">Twitter</span>
                        <TwitterIcon />
                    </div>
                </div>

                <div>
                    <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">GitHub</span>
                        <GithubIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSocials;
