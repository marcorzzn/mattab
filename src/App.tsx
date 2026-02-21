import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FeedPage from './pages/FeedPage';
import SubtabPage from './pages/SubtabPage';
import ProfilePage from './pages/ProfilePage';
import NotebookPage from './pages/NotebookPage';
import PaperPage from './pages/PaperPage';
import WikiPage from './pages/WikiPage';
import MessagesPage from './pages/MessagesPage';

/**
 * mattab — Main App Shell
 *
 * Layout: Header (top) + Sidebar (left) + Content (right).
 * Uses HashRouter for GitHub Pages compatibility (no server-side routing).
 */
export default function App() {
    return (
        <HashRouter>
            <div className="app">
                <Header />
                <div className="app__body">
                    <Sidebar />
                    <main className="content">
                        <Routes>
                            <Route path="/" element={<FeedPage />} />
                            <Route path="/t/:slug" element={<SubtabPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/profile/:pubkey" element={<ProfilePage />} />
                            <Route path="/notebooks" element={<NotebookPage />} />
                            <Route path="/paper/:id" element={<PaperPage />} />
                            <Route path="/paper" element={<PaperPage />} />
                            <Route path="/wiki" element={<WikiPage />} />
                            <Route path="/wiki/:slug" element={<WikiPage />} />
                            <Route path="/messages" element={<MessagesPage />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </HashRouter>
    );
}
