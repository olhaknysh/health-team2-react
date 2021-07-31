import s from './RightSideBar.module.scss';
import Container from '../common/Container'

const RightSideBar = () => {
  return <section className={s.container}>
    <Container>
      <div className={s.wrapper}>
        <div className={s.summaryBox}>
          <h2 className={s.heading}>Сводка за 20.06.2020</h2>
          <table className={s.table}>
            <tbody className={s.tableBody}>
              <tr>
                <td>Осталось</td>
                <td>000 ккал</td>
              </tr>
              <tr>
                <td>Употреблено</td>
                <td>000 ккал</td>
              </tr>
              <tr>
                <td>Дневная норма</td>
                <td>000 ккал</td>
              </tr>
              <tr>
                <td>n% от нормы</td>
                <td>000 ккал</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={s.dietBox}>
          <h3 className={s.heading}>Нерекомендуемые продукты</h3>
          <p className={s.dietParagraph}>Здесь будет отображаться Ваш рацион</p>
        </div>
      </div>
    </Container>
  </section>
}

export default RightSideBar;