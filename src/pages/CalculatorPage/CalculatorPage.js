import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
import s from './CalculatorPage.module.scss';

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

           <Container>Page content</Container>

        </>
    )
}