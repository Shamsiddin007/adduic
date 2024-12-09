import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "uz", "ru"]

export default getRequestConfig( async ({locale}: {locale: string}) => {

    if (!locales.includes(locale)) notFound();

    return {
        messages: (await import(`messages/${locale}.json`)).default
    }
})
