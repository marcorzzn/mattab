/**
 * FeedPage — Main feed aggregating posts from followed subtabs.
 * Will show the 3D Knowledge Graph at the top in Sprint 8.
 */
export default function FeedPage() {
    return (
        <div className="page feed-page">
            <div className="page__header">
                <h1 className="page__title">Feed</h1>
                <p className="page__desc">I post dai subtab che segui.</p>
            </div>
            <div className="feed-page__graph-slot">
                {/* Sprint 8: KnowledgeGraph3D goes here */}
                <div className="placeholder-card">
                    <span className="placeholder-card__icon">🧠</span>
                    <span>Grafo della Conoscenza — Coming soon</span>
                </div>
            </div>
            <div className="feed-page__posts">
                <div className="placeholder-card">
                    <span className="placeholder-card__icon">📄</span>
                    <span>I post appariranno qui dopo lo Sprint 3</span>
                </div>
            </div>
        </div>
    );
}
