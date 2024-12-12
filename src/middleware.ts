import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
    localeDetection: false
})

export const config = {
    matcher: ['/', '/(en|uz|ru)/:path*']
}
