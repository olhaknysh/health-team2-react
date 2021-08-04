import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов')
    .trim()
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
});
export default loginSchema;
