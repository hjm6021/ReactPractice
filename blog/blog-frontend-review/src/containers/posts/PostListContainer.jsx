import PostList from '../../components/post/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listPosts } from '../../modules/posts';
import qs from 'qs';
import { useParams, useLocation } from 'react-router-dom';

const PostListContainer = () => {
    const dispatch = useDispatch();
    const { posts, error, loading, user } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
        user: user.user,
    }));
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        const { username } = params;
        const { page, tag } = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(listPosts({ page, username, tag }));
    }, [dispatch, location, params]);

    return <PostList loading={loading} posts={posts} error={error} showWriteButton={user} />;
};

export default PostListContainer;
