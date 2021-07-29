import React from 'react'

import AuthThumb from '../../components/AuthThumb/AuthThumb';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/common/Container/Container';


const LoginPage = () => {
    return (
        <>
            <AuthThumb>
                
                    <Header />
                    <LoginForm />
               
            </AuthThumb>
        </>
    );
}

export default LoginPage;
