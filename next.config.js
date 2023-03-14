const withPWA = require('next-pwa')({
    dest: 'public',
});

module.exports = withPWA({
    reactStrictMode: true,
    env: {
        SECRET: process.env.SECRET,
        SANITY_TOKEN: process.env.SANITY_TOKEN,
        SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    },
    compress: true,
    swcMinify: false, // it should be false by default
});
