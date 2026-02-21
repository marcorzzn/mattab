import { useParams } from 'react-router-dom';

/**
 * WikiPage — Shared collaborative wiki per subtab.
 */
export default function WikiPage() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className="page wiki-page">
            <div className="page__header">
                <h1 className="page__title">Wiki {slug ? `— ${slug}` : ''}</h1>
                <p className="page__desc">Enciclopedia condivisa della comunità. Ogni edit è versionato.</p>
            </div>
            <div className="placeholder-card">
                <span className="placeholder-card__icon">📖</span>
                <span>La wiki arriverà con lo Sprint 4</span>
            </div>
        </div>
    );
}
