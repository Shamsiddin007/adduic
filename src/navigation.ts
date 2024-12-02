import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './i18n/requests';
 
export const { Link, usePathname } = createSharedPathnamesNavigation({locales, /* ... */});
