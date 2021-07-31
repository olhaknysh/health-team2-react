import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import FormControl from '../FormControl/FormControl'
import registerSchema from '../../utils/schemas/RegisterSchema';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import styles from "./RegisterForm.module.scss";
import routes from '../../utils/routes';


const RegisterForm = () => {
     
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Регистрация</h3>

            <Formik
                initialValues={{
                    name:'',
                    login: '',
                    password: '',
                }}
                validationSchema={registerSchema}
                //Нужно подвязать onSubmit к redux
                // onSubmit={register}
            >
                <Form>
                    <FormControl
                        label="Имя"
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Имя"
                    />

                    <FormControl
                        label="Логин"
                        name="login"
                        type="text"
                        id="login"
                        placeholder="Логин"
                    />

                    <FormControl
                        label="Пароль"
                        name="password"
                        type="text"
                        id="password"
                        placeholder="Пароль"
                    />
                    <div className={styles.btnThumb}>
                        <Link to={routes.login} className={styles.regBtn}><ButtonAuth view="btnReg">Вход</ButtonAuth></Link>
                        <ButtonAuth >Регистрация</ButtonAuth>
                    
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default RegisterForm
