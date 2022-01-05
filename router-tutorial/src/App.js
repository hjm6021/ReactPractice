import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/info" element={<About />} />
                <Route path="/history" element={<HistorySample />} />
                <Route path="/profiles/*" element={<Profiles />} />
            </Routes>
        </div>
    );
};

export default App;
