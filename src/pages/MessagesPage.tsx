/**
 * MessagesPage — Private encrypted DMs.
 */
export default function MessagesPage() {
    return (
        <div className="page messages-page">
            <div className="page__header">
                <h1 className="page__title">Messaggi</h1>
                <p className="page__desc">Chat private, crittografate end-to-end.</p>
            </div>
            <div className="placeholder-card">
                <span className="placeholder-card__icon">🔐</span>
                <span>I messaggi privati arriveranno con lo Sprint 7</span>
            </div>
        </div>
    );
}
