import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PostListPage />} />
                <Route path="/@:username" element={<PostListPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/@:username/:postId" element={<PostPage />} />
            </Routes>
        </div>
    );
}

export default App;
