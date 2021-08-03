import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './DailyCaloriesForm.module.css';
import dailyRateOperations from '../../redux/dailyRate/dailyRateOperations';
import authSelectors from '../../redux/auth/auth-selectors';

const DailyCaloriesForm = ({ onShowModal }) => {
  const dispatch = useDispatch();
  const userData = useSelector(authSelectors.getUserData);
  const handleSubmit = values => {
    values.groupBlood = Number(values.groupBlood);
    dispatch(dailyRateOperations.onFetchDailyRates(values));

    setTimeout(() => {
      onShowModal();
    }, 1000);
  };

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    height: Yup.number()
      .min(100, 'Минимальное значение 100 см')
      .max(260, 'Максимальное значение 260 см')
      .required('Обязательно'),
    age: Yup.number()
      .min(12, 'Минимум 12 лет')
      .max(100, 'Максимум 100 лет')
      .required('Обязательно'),
    currentWeight: Yup.number()
      .min(40, 'Минимальный вес 40 кг')
      .max(200, 'Максимальный вес 200 кг')
      .required('Обязательно'),
    desireWeight: Yup.number()

      .min(40, 'Минимальный вес 40 кг')
      .max(150, 'Максимальный вес 150 кг')
      .required('Обязательно')
      .when('currentWeight', (currentWeight, schema) => {
        return schema.test({
          test: desireWeight => !!currentWeight && desireWeight < currentWeight,
          message: 'Желаемый вес должен быть меньше текущего',
        });
      }),
    groupBlood: Yup.number().required('Обязательно'),
  });

  return (
    <>
      <Formik
        validationSchema={DisplayingErrorMessagesSchema}
        initialValues={{
          height: userData && userData.height ? userData.height : '',
          age: userData && userData.age ? userData.age : '',
          currentWeight: userData && userData.currentWeight ? userData.currentWeight : '',
          desireWeight:
            userData && userData.desireWeight ? userData.desireWeight : '',
          groupBlood:
            userData && userData.groupBlood ? userData.groupBlood.toString() : '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>
              Просчитай свою суточную норму калорий прямо сейчас
            </h2>
            <div className={styles.inputWrapper}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <Field
                    placeholder=" "
                    className={`${styles.input} ${
                      errors.height && touched.height && styles.errorInput
                    }`}
                    name="height"
                    type="number"
                    min="100"
                    max="260"
                    required
                  />
                  <p
                    className={`${styles.labelValue} ${
                      errors.height && touched.height
                        ? styles.errorLabelValue
                        : ''
                    }`}
                  >
                    Рост*
                  </p>
                  {touched.height && errors.height && (
                    <div className={styles.error}>{errors.height}</div>
                  )}
                </label>
                <label className={styles.label}>
                  <Field
                    placeholder=" "
                    className={`${styles.input} ${
                      touched.age && errors.age && styles.errorInput
                    }`}
                    name="age"
                    type="number"
                    min="12"
                    max="100"
                    required
                  />
                  <p
                    className={`${styles.labelValue} ${
                      touched.age && errors.age ? styles.errorLabelValue : ''
                    }`}
                  >
                    Возраст*
                  </p>
                  {touched.age && errors.age && (
                    <div className={styles.error}>{errors.age}</div>
                  )}
                </label>

                <label className={styles.label}>
                  <Field
                    placeholder=" "
                    className={`${styles.input} ${
                      touched.currentWeight && errors.currentWeight && styles.errorInput
                    }`}
                    name="currentWeight"
                    type="number"
                    min="40"
                    max="200"
                    required
                  />
                  <p
                    className={`${styles.labelValue} ${
                      touched.currentWeight && errors.currentWeight
                        ? styles.errorLabelValue
                        : ''
                    }`}
                  >
                    Текущий вес*
                  </p>
                  {touched.currentWeight && errors.currentWeight && (
                    <div className={styles.error}>{errors.currentWeight}</div>
                  )}
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <Field
                    placeholder=" "
                    className={`${styles.input} ${
                      touched.desireWeight &&
                      errors.desireWeight &&
                      styles.errorInput
                    }`}
                    name="desireWeight"
                    type="number"
                    min="40"
                    max="150"
                    required
                  />
                  <p
                    className={`${styles.labelValue} ${
                      touched.desireWeight && errors.desireWeight
                        ? styles.errorLabelValue
                        : ''
                    }`}
                  >
                    Желаемый вес*
                  </p>
                  {touched.desireWeight && errors.desireWeight && (
                    <div className={styles.error}>{errors.desireWeight}</div>
                  )}
                </label>
                <div className={styles.radioGroupContainer}>
                  <p className={styles.radioTitle}>Группа крови*</p>

                  {touched.groupBlood && errors.groupBlood && (
                    <div className={styles.errorRadio}>{errors.groupBlood}</div>
                  )}
                  <div className={styles.radioWrapper} role="group">
                    <Field id="first" type="radio" name="groupBlood" value="1" />
                    <label htmlFor="first" className={styles.radioLabel}>
                      1
                    </label>
                    <Field
                      id="second"
                      type="radio"
                      name="groupBlood"
                      value="2"
                    />
                    <label htmlFor="second" className={styles.radioLabel}>
                      2
                    </label>
                    <Field id="third" type="radio" name="groupBlood" value="3" />
                    <label htmlFor="third" className={styles.radioLabel}>
                      3
                    </label>
                    <Field
                      id="fourth"
                      type="radio"
                      name="groupBlood"
                      value="4"
                    />
                    <label htmlFor="fourth" className={styles.radioLabel}>
                      4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.button} type="submit">
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DailyCaloriesForm;
