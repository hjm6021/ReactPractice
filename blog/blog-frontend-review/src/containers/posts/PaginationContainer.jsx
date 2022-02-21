import Pagination from '../../components/posts/Pagination';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = () => {
    const location = useLocation();
    const params = useParams();

    const { tag, page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    if (!posts || loading) return null;
    const { username } = params;

    return <Pagination tag={tag} username={username} page={parseInt(page, 10)} lastPage={lastPage} />;
};

export default PaginationContainer;
