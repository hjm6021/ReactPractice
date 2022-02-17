import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PostListPage />} />
                <Route path="/@:username" element={<PostListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/@:username/:postId" element={<PostPage />} />
            </Routes>
        </div>
    );
};

export default App;
