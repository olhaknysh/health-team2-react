import { useMedia } from 'react-use';
import s from './CalculatorPage.module.scss';
import RightSideBar from '../../components/RightSideBar';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/common/Container';
import { ToastContainer } from 'react-toastify';
export default function CalculatorPage() {
  const isWide = useMedia('(min-width: 480px)');

  return (
    <>
      {isWide ? (
        <div className={s.bgContainer}>
          <div className={s.background}></div>
        </div>
      ) : (
        ''
      )}
      <ToastContainer />
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
  );
}
