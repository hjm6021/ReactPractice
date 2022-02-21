import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { updatePost, writePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { title, body, tags, post, postError, originalPostId } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId,
    }));

    const onPublish = () => {
        if (originalPostId) {
            dispatch(updatePost({ originalPostId, title, body, tags }));
            return;
        }
        dispatch(writePost({ title, body, tags }));
    };

    const onCancel = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (post) {
            const { _id, user } = post;
            return navigate(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [post, postError, navigate]);

    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId} />;
};

export default WriteActionButtonsContainer;
