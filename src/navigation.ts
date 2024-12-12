import { createNavigation } from 'next-intl/navigation';
import { locales } from './i18n/requests';
 
export const { Link, usePathname } = createNavigation({locales, defaultLocale: "en"});
