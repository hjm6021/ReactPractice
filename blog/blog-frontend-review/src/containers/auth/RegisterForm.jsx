import AuthForm from '../../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { chagneInput, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [error, setError] = useState(null);
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(chagneInput({ form: 'register', key: name, value: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if ([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력해주세요.');
            return;
        }
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(chagneInput({ form: 'register', key: 'password', value: '' }));
            dispatch(chagneInput({ form: 'register', key: 'passwordConfirm', value: '' }));
            return;
        }
        dispatch(register({ username: username, password: password }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정입니다.');
                return;
            }
            setError('회원가입 실패');
            return;
        }
        if (auth) {
            dispatch(check());
        }
    }, [authError, auth, dispatch]);

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
            <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </div>
    );
};

export default RegisterForm;
