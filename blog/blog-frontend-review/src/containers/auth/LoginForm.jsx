import AuthForm from '../../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { chagneInput, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [error, setError] = useState(null);
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(chagneInput({ form: 'login', key: name, value: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    };
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            setError('로그인 실패');
            return;
        }
        if (auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            navigate('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [user, navigate]);

    return (
        <div>
            <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </div>
    );
};

export default LoginForm;
