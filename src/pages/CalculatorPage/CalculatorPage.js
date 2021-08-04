import { useMedia } from 'react-use';
import s from './CalculatorPage.module.scss';
import RightSideBar from '../../components/RightSideBar';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/common/Container';

export default function CalculatorPage() {

    const isWide = useMedia('(min-width: 480px)');

    return (
        <>
            {isWide ?
                <div className={s.bgContainer}>
                    <div className={s.background}></div>
                </div>
                : ''
            }
            <Container>
                <div className={s.calculatorFlexBox}>
                    <div className={s.calculatorCalorieFormItem}>
                          <CalculatorCalorieForm />
                    </div>
                    <div className={s.RightSideBarItem}>
                           <RightSideBar />
                    </div>
                </div>
           </Container>
        </>
    )
}