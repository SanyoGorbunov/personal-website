import AboutPage from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NumbersPage from './pages/NumbersPage';

type NavigationRoute = {
    label: string,
    href: string,
    page: () => JSX.Element
}

export const navigationRoutes: Array<NavigationRoute> = [
    { label: 'About me', href: '/', page: AboutPage },
    { label: 'Numbers', href: '/numbers', page: NumbersPage },
    { label: 'Privacy Policy', href: '/privacy-policy', page: PrivacyPolicy },
]