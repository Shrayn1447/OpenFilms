/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'st.kp.yandex.net',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'avatars.mds.yandex.net',
            port: '',
            pathname: '/get-kinopoisk-image/**',
          },
          {
            protocol: 'https',
            hostname: 'avatars.mds.yandex.net',
            port: '',
            pathname: '/get-kinopoisk-image/**',
          }
        ],
      },
}

module.exports = nextConfig
