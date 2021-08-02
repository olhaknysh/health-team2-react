import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import FormControl from '../FormControl/FormControl';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import loginSchema from '../../utils/schemas/LoginSchema';
import authOperations from '../../redux/auth/auth-operation';
import routes from '../../utils/routes';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Вход</h3>

        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={values => {
            dispatch(authOperations.login(values));
          }}
        >
          {({ values, handleChange }) => (
            <Form>
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
                <ButtonAuth>Вход</ButtonAuth>
                <Link to={routes.register} className={styles.regBtn}>
                  <ButtonAuth view="btnReg">Регистрация</ButtonAuth>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
};

export default LoginForm;
