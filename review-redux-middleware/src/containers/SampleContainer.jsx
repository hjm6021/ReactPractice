import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPost, getUsers } from '../modules/sample';
import Sample from '../components/Sample';

const SampleContainer = () => {
    const { loadingPost, loadingUsers, post, users } = useSelector(({ sample, loading }) => ({
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS'],
        post: sample.post,
        users: sample.users,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(1));
        dispatch(getUsers());
    }, [dispatch]);

    return <Sample loadingPost={loadingPost} loadingUsers={loadingUsers} post={post} users={users} />;
};

export default SampleContainer;
