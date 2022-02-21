import styled from 'styled-components';
import pallete from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;
const PostHead = styled.div`
    border-bottom: 1px solid ${pallete.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;
const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${pallete.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
    if (error) {
        if (error.response && error.response.status === 404) {
            return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
        }
        return <PostViewerBlock>오류 발생</PostViewerBlock>;
    }
    if (!post || loading) {
        return null;
    }
    const { title, body, user, publishedDate, tags } = post;
    return (
        <PostViewerBlock>
            <Helmet>
                <title>{title} - REACTERS</title>
            </Helmet>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo hasMarginTop user={user} publishedDate={publishedDate} />
                <Tags tags={tags} />
            </PostHead>
            {actionButtons}
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </PostViewerBlock>
    );
};

export default PostViewer;
