const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {};

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching,
})(config);

module.exports = nextConfig;
