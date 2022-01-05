import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/veloport">veloport</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>
            <Routes>
                <Route path=":username" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default Profiles;
