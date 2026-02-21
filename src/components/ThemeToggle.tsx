import { useState, useEffect } from 'react';

/**
 * ThemeToggle — Dark/Light theme switch
 * Persists preference to localStorage.
 */
export default function ThemeToggle() {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        return (localStorage.getItem('mattab-theme') as 'dark' | 'light') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('mattab-theme', theme);
    }, [theme]);

    return (
        <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            aria-label="Cambia tema"
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}
