import { Link } from 'react-router-dom';
import Button from '../Button';
import paths from '../../utils/routes';
import styles from './DailyCaloriesDiaryInfo.module.scss'

const DailyCaloriesDiaryInfo = () => {
    return (  
        <div className={styles.container}>
            <p className={styles.text}>Пожалуйста, заполните сначала форму :)</p>
            <Link to={paths.calculator}>
                <Button
                    className={styles.buttonCalculator}
                    aria-label="button-calculator"
                >
                    Перейти к форме      
          </Button>
            </Link>
        </div>
    )
}

export default DailyCaloriesDiaryInfo;