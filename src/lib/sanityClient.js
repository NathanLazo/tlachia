import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'n5oy0vpj',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
})