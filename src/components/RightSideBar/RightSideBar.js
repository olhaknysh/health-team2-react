import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './RightSideBar.module.scss';
import Container from '../common/Container';
import { authSelectors } from '../../redux/auth';
import { productsOperations, productsSelectors } from '../../redux/products';

const RightSideBar = ({ date = '08-01-2021' }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(productsOperations.getProductsByDay(date));
  // }, [date, dispatch]);

  // const totalCalories = state => state.products.productsByDay.totalCalories;
  // const totalCalories = 1
  // const leftCalories = 1;
  // const dailyNormalProcent = 2;

  const notAllowedProducts = useSelector(authSelectors.notAllowedProducts);
  const dailyCalories = useSelector(authSelectors.dailyCalories);

  const totalCalories = useSelector(productsSelectors.totalEatedCalories);
  const leftCalories = useSelector(productsSelectors.leftCalories);
  const dailyNormalProcent = useSelector(productsSelectors.dailyNormalProcent);

  return <section className={s.container}>
    <Container>
      <div className={s.wrapper}>
        <div className={s.summaryBox}>
          <h2 className={s.heading}>Сводка за {date}</h2>
          <table className={s.table}>
            <tbody className={s.tableBody}>
              <tr>
                <td>Осталось</td>
                <td>{leftCalories ? leftCalories : '000'} ккал</td>
              </tr>
              <tr>
                <td>Употреблено</td>
                <td>{totalCalories ? totalCalories : '000'} ккал</td>
              </tr>
              <tr>
                <td>Дневная норма</td>
                <td>{dailyCalories ? dailyCalories : '000'} ккал</td>
              </tr>
              <tr>
                <td>n% от нормы</td>
                <td>{dailyNormalProcent ? dailyNormalProcent : '000'} ккал</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={s.dietBox}>
          <h3 className={s.heading}>Нерекомендуемые продукты</h3>
          {notAllowedProducts ? <p className={s.dietParagraph}>{notAllowedProducts.join(', ')}</p> : <p className={s.dietParagraph}>Здесь будет отображаться Ваш рацион</p>}
        </div>
      </div>
    </Container>
  </section>
}

export default RightSideBar;