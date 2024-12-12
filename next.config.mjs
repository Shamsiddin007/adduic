import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("src/i18n/requests.ts")

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // bu yerda konfiguratsiya sozlamalaringizni kiriting
  turbo: false, // Turbopack o'chiriladi va Webpack ishlatiladi
  reactStrictMode: false,
  images: {
    domains: ['leuscgqzalmrfujkzpbd.supabase.co'],  // Supabase domenini qo'shing
  }
};

export default withNextIntl(nextConfig);
