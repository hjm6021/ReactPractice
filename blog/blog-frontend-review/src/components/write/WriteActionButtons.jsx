import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    }
`;
const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;

const WriteActionButtons = ({ onPublish, onCancel, isEdit }) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton cyan onClick={onPublish}>
                {isEdit ? 'EDIT' : 'PUBLISH'}
            </StyledButton>
            <StyledButton onClick={onCancel}>CANCEL</StyledButton>
        </WriteActionButtonsBlock>
    );
};

export default WriteActionButtons;
