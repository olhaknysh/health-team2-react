import { useSelector } from 'react-redux';
import s from './RightSideBar.module.scss';
import { authSelectors } from '../../redux/auth';
import { productsSelectors } from '../../redux/products';
import { calendarSelectors } from '../../redux/calendar'


const RightSideBar = () => {
    const notAllowedProducts = useSelector(authSelectors.notAllowedProducts);
    const dailyCalories = useSelector(authSelectors.dailyCalories);

    const totalCalories = useSelector(productsSelectors.totalEatedCalories);
    const leftCalories = useSelector(productsSelectors.leftCalories);
    const dailyNormalProcent = useSelector(productsSelectors.dailyNormalProcent);
    const date = useSelector(calendarSelectors.currentDate)

    const countedLeftCalories = () => {
        if (leftCalories > 0) {
            return Number.parseInt(leftCalories);
        } else if (leftCalories < 0) {
            return Number.parseInt(totalCalories - dailyCalories);
        }
    }


    return <aside className={s.container}>
        <div className={s.backgroundContainer}></div>

        <div className={s.wrapper}>
            <div className={s.summaryBox}>
                <h2 className={s.heading}>Сводка за {date}</h2>
                <table className={s.table}>
                    <tbody className={s.tableBody}>
                        <tr className={leftCalories < 0 ? `${s.texterror}` : ''} >
                            <td>{leftCalories > 0 ? "Осталось" : "Излишек"}</td>
                            <td >{leftCalories ? countedLeftCalories() : '000'} ккал</td>
                        </tr>
                        <tr>
                            <td>Употреблено</td>
                            <td>{totalCalories ? Number.parseInt(totalCalories) : '000'} ккал</td>
                        </tr>
                        <tr>
                            <td>Дневная норма</td>
                            <td>{dailyCalories ? Number.parseInt(dailyCalories) : '000'} ккал</td>
                        </tr>
                        <tr >
                            <td>n% от нормы</td>
                            <td>{dailyNormalProcent ? dailyNormalProcent : '000'} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={s.dietBox}>
                <h3 className={s.heading}>Нерекомендуемые продукты</h3>
                {notAllowedProducts ? <p className={s.dietParagraph}>{notAllowedProducts.join(', ')}</p> : <p className={s.dietParagraph}>Здесь будет отображаться Ваш рацион</p>}
            </div>
        </div>

    </aside >
}

export default RightSideBar;