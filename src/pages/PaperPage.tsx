import { useParams } from 'react-router-dom';

/**
 * PaperPage — View and collaborate on academic papers.
 */
export default function PaperPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="page paper-page">
            <div className="page__header">
                <h1 className="page__title">Paper {id ? `#${id}` : ''}</h1>
                <p className="page__desc">Paper accademici collaborativi, firmati crittograficamente.</p>
            </div>
            <div className="placeholder-card">
                <span className="placeholder-card__icon">📝</span>
                <span>L'editor paper arriverà con lo Sprint 5</span>
            </div>
        </div>
    );
}
