import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';

// import authOperations from '../../redux/auth/authOperations';
// import isLoading  from '../../redux/loading/loadingSelector';

import FormControl from '../FormControl/FormControl';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import loginSchema from '../../utils/schemas/LoginSchema';
import styles from "./LoginForm.module.css"
import Container from '../common/Container';


const LoginForm = () => {
    const dispatch = useDispatch();

    return (
      <Container>
        <div className={styles.container}>
            <h3 className={styles.title}>Вход</h3>

        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validationSchema={loginSchema}
            //Нужно подвязать onSubmit к redux
            // onSubmit={login}
        >
            <Form>
                <FormControl
                    label="Логин"
                    name="login"
                    type="text"
                    id="login"
                    placeholder="Логин *"
                />

                <FormControl
                    label="Пароль"
                    name="password"
                    type="text"
                    id="password"
                    placeholder="Пароль *"
                />
                <div className={styles.btnThumb}>
                    <ButtonAuth>Вход</ButtonAuth>
                    <Link to="/registration" className={styles.regBtn}><ButtonAuth view="btnReg">Регистрация</ButtonAuth></Link>
                    
                </div>
            </Form>
            </Formik>
            </div>
            </Container>
    );
};

export default LoginForm