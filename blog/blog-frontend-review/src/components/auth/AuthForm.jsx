import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const textMap = {
    login: 'LOGIN',
    register: 'REGISTER',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput name="username" value={form.username} placeholder="ID" onChange={onChange} />
                <StyledInput name="password" value={form.password} type="password" placeholder="Password" onChange={onChange} />
                {type === 'register' && (
                    <StyledInput name="passwordConfirm" type="password" value={form.passwordConfirm} placeholder="Confirm Password" onChange={onChange} />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button cyan={true} fullWidth={true} style={{ marginTop: '1rem' }}>
                    {text}
                </Button>
            </form>
            <Footer>{text === 'LOGIN' ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>}</Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
