// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // bu yerda konfiguratsiya sozlamalaringizni kiriting
  turbo: false, // Turbopack o'chiriladi va Webpack ishlatiladi
  images: {
    domains: ['leuscgqzalmrfujkzpbd.supabase.co'],  // Supabase domenini qo'shing
  },
};

export default nextConfig;
