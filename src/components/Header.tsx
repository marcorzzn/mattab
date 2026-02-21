import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

/**
 * Header — Top bar with logo, search, and controls.
 */
export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">mattab</Link>
            <SearchBar />
            <div className="header__actions">
                <div className="header__status">
                    <span className="header__dot" />
                    <span>P2P</span>
                </div>
                <ThemeToggle />
                <Link to="/profile" className="header__avatar" aria-label="Profilo">
                    👤
                </Link>
            </div>
        </header>
    );
}
