import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import FormControl from '../FormControl/FormControl';
import registerSchema from '../../utils/schemas/RegisterSchema';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import routes from '../../utils/routes';
import authOperations from '../../redux/auth/auth-operation';
import authSelectors from '../../redux/auth/auth-selectors'

import styles from './RegisterForm.module.scss';


const RegisterForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.authError)

    async function registerSubmit(values) {
        try {
            await dispatch(authOperations.register(values));
            if (error) {
                return;
            }
            const { login, password } = values;
            await dispatch(authOperations.login({ login, password }));
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Регистрация</h3>
            <Formik
                initialValues={{
                    name: '',
                    login: '',
                    password: '',
                }}
                validationSchema={registerSchema}
                onSubmit={values => {
                    registerSubmit(values);
                }}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <FormControl
                            label="Имя"
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Имя *"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <FormControl
                            label="Логин"
                            name="login"
                            type="text"
                            id="login"
                            placeholder="Логин *"
                            value={values.login}
                            onChange={handleChange}
                        />
                        <FormControl
                            label="Пароль"
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Пароль *"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <div className={styles.btnThumb}>
                            <ButtonAuth>Регистрация</ButtonAuth>
                            <Link to={routes.login} className={styles.regBtn}>
                                <ButtonAuth view="btnReg">Вход</ButtonAuth>
                            </Link>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default RegisterForm;
