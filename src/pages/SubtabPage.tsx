import { useParams } from 'react-router-dom';

/**
 * SubtabPage — Community view for a specific STEM discipline.
 */
export default function SubtabPage() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className="page subtab-page">
            <div className="page__header">
                <h1 className="page__title">t/{slug}</h1>
                <p className="page__desc">Post, discussioni e wiki di questo subtab.</p>
            </div>
            <div className="subtab-page__content">
                <div className="placeholder-card">
                    <span className="placeholder-card__icon">💬</span>
                    <span>I thread del subtab appariranno qui</span>
                </div>
            </div>
        </div>
    );
}
