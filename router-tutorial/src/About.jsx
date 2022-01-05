import { useLocation } from 'react-router-dom';
import qs from 'qs';
const About = () => {
    const location = useLocation();
    const query = qs.parse(location['search'], { ignoreQueryPrefix: true });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>상세페이지</p>
            {showDetail && <p>detail값을 true로 했을 경우!</p>}
        </div>
    );
};

export default About;
