import { useSelector, useDispatch } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';
import React, { useEffect } from 'react';

const SampleContainer = () => {
    const { post, users } = useSelector((state) => state.sample);
    const { 'sample/GET_POST': loadingPost, 'sample/GET_USERS': loadingUsers } = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(1));
        dispatch(getUsers(1));
    }, [dispatch]);

    return <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />;
};

export default SampleContainer;
