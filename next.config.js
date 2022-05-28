/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["content-tooling.spotifycdn.com"]
  },
  webpack: (config) => {
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    return config;
},
}

module.exports = nextConfig
