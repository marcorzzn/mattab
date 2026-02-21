/**
 * NotebookPage — Private encrypted math notebooks.
 */
export default function NotebookPage() {
    return (
        <div className="page notebook-page">
            <div className="page__header">
                <h1 className="page__title">Quaderni</h1>
                <p className="page__desc">I tuoi appunti privati. Crittografati, solo tuoi.</p>
            </div>
            <div className="placeholder-card">
                <span className="placeholder-card__icon">🔒</span>
                <span>I quaderni privati arriveranno con lo Sprint 6</span>
            </div>
        </div>
    );
}
