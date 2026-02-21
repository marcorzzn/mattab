/**
 * ProfilePage — User profile view.
 */
export default function ProfilePage() {
    return (
        <div className="page profile-page">
            <div className="page__header">
                <h1 className="page__title">Profilo</h1>
                <p className="page__desc">Il tuo profilo pubblico, i tuoi post e paper.</p>
            </div>
            <div className="placeholder-card">
                <span className="placeholder-card__icon">👤</span>
                <span>Login richiesto — Sprint 2</span>
            </div>
        </div>
    );
}
