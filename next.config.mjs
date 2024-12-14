import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("src/i18n/requests.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: false, // Turbopack o'chiriladi va Webpack ishlatiladi
  reactStrictMode: false,
  images: {
    domains: ['leuscgqzalmrfujkzpbd.supabase.co'],  // Supabase domenini qo'shing
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

