/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVICE_CODE: process.env.SERVICE_CODE,
        TEMPLATE_CODE: process.env.TEMPLATE_CODE,
        USER_CODE: process.env.USER_CODE,
        RECAPTCHA_CODE: process.env.RECAPTCHA_CODE,
    }
}

module.exports = nextConfig
