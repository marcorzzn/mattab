import { NavLink } from 'react-router-dom';

/** Default starter subtabs */
const DEFAULT_SUBTABS = [
    { slug: 'matematica', name: 'Matematica', icon: '∑' },
    { slug: 'fisica', name: 'Fisica', icon: '⚛' },
    { slug: 'informatica', name: 'Informatica Teorica', icon: 'λ' },
    { slug: 'chimica', name: 'Chimica', icon: '⚗' },
    { slug: 'biologia', name: 'Biologia', icon: '🧬' },
];

/**
 * Sidebar — Left navigation panel.
 * Contains main nav links + followed subtabs.
 */
export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                <div className="sidebar__section">
                    <NavLink to="/" className="sidebar__link" end>
                        <span className="sidebar__icon">🏠</span>
                        <span>Feed</span>
                    </NavLink>
                    <NavLink to="/notebooks" className="sidebar__link">
                        <span className="sidebar__icon">📓</span>
                        <span>Quaderni</span>
                    </NavLink>
                    <NavLink to="/messages" className="sidebar__link">
                        <span className="sidebar__icon">✉️</span>
                        <span>Messaggi</span>
                    </NavLink>
                    <NavLink to="/wiki" className="sidebar__link">
                        <span className="sidebar__icon">📖</span>
                        <span>Wiki</span>
                    </NavLink>
                </div>

                <div className="sidebar__divider" />

                <div className="sidebar__section">
                    <div className="sidebar__heading">Subtab</div>
                    {DEFAULT_SUBTABS.map(s => (
                        <NavLink
                            key={s.slug}
                            to={`/t/${s.slug}`}
                            className="sidebar__link"
                        >
                            <span className="sidebar__icon">{s.icon}</span>
                            <span>{s.name}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </aside>
    );
}
