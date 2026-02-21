import { useState } from 'react';

/**
 * SearchBar — Minimal fuzzy search across the platform.
 * Will integrate Fuse.js with Gun data in future sprints.
 */
export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [focused, setFocused] = useState(false);

    return (
        <div className={`search-bar ${focused ? 'search-bar--focused' : ''}`}>
            <span className="search-bar__icon">⌕</span>
            <input
                className="search-bar__input"
                type="text"
                placeholder="Cerca persone, paper, tag, subtab…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                spellCheck={false}
            />
            {query && (
                <button
                    className="search-bar__clear"
                    onClick={() => setQuery('')}
                    aria-label="Cancella ricerca"
                >
                    ✕
                </button>
            )}
        </div>
    );
}
