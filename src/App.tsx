import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import gun from './network/gun-db';

/**
 * mattab — Main Application Component
 * 
 * A P2P Collaborative Math Workspace.
 * Users write Markdown+LaTeX in the editor, see a live preview,
 * and their notebooks are synced across the decentralized Gun.js network.
 */
function App() {
    const [content, setContent] = useState<string>(
        `# Benvenuto su mattab 🧮\n\nScrivi **Markdown** con formule $\\LaTeX$ inline!\n\nProva una formula a blocco:\n\n$$\\int_0^\\infty e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}$$\n\nOppure inline: l'energia è $E = mc^2$.\n`
    );
    const [peerCount, setPeerCount] = useState<number>(0);
    const [localSize, setLocalSize] = useState<string>('0 KB');

    // Sync content to Gun.js P2P network
    useEffect(() => {
        const notebook = gun.get('mattab-public').get('welcome-notebook');

        // Subscribe to changes from other peers
        notebook.on((data: any) => {
            if (data && data.content && data.content !== content) {
                setContent(data.content);
            }
        });

        return () => { notebook.off(); };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Publish local changes to the network
    const handleChange = (newContent: string) => {
        setContent(newContent);
        gun.get('mattab-public').get('welcome-notebook').put({ content: newContent });
    };

    // Estimate local storage usage (IndexedDB)
    useEffect(() => {
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(({ usage }) => {
                const kb = Math.round((usage || 0) / 1024);
                setLocalSize(kb < 1024 ? `${kb} KB` : `${(kb / 1024).toFixed(1)} MB`);
            });
        }
    }, [content]);

    // Simulate peer count from Gun (in production Gun tracks real connected peers)
    useEffect(() => {
        const interval = setInterval(() => {
            const peers = (gun as any)._.opt?.peers;
            if (peers) {
                setPeerCount(Object.keys(peers).length);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="header__logo">mattab</div>
                <div className="header__status">
                    <span className="header__dot" />
                    <span>Rete P2P Attiva</span>
                </div>
            </header>

            {/* Main */}
            <main className="main">
                <section className="hero">
                    <h1 className="hero__title">mattab</h1>
                    <p className="hero__subtitle">
                        Lo spazio matematico collaborativo, verificabile e decentralizzato. Ogni tab è un nodo.
                    </p>
                </section>

                {/* Editor Card */}
                <div className="editor-card">
                    <div className="editor-card__toolbar">
                        <button onClick={() => handleChange(content + '\n$$\\sum_{n=1}^{\\infty}$$')}>Σ Sommatoria</button>
                        <button onClick={() => handleChange(content + '\n$$\\int_{}^{}$$')}>∫ Integrale</button>
                        <button onClick={() => handleChange(content + '\n$$\\frac{}{}$$')}>½ Frazione</button>
                        <button onClick={() => handleChange(content + '\n$$\\sqrt{}$$')}>√ Radice</button>
                    </div>
                    <textarea
                        className="editor-card__textarea"
                        value={content}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Scrivi Markdown con formule LaTeX ($formula$ o $$formula$$)..."
                        spellCheck={false}
                    />
                </div>

                {/* Live Preview */}
                <div className="preview-panel">
                    <div className="preview-panel__label">Anteprima Live</div>
                    <div className="preview-panel__content">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </main>

            {/* P2P Status Bar */}
            <footer className="p2p-bar">
                <div className="p2p-bar__item">
                    🌐 Peer connessi: <strong>{peerCount}</strong>
                </div>
                <div className="p2p-bar__item">
                    💾 Locale: <strong>{localSize}</strong>
                </div>
                <div className="p2p-bar__item">
                    🔒 Dati sul tuo dispositivo
                </div>
            </footer>
        </div>
    );
}

export default App;
