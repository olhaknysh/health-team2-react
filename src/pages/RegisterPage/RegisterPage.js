import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
    
    const isWide = useMedia('(min-width: 480px)');
    
    return (
        <>
            {isWide ?
              <div className={s.bgContainer}>
               <div className={s.background1}></div>
               <div className={s.background2}></div>
               <div className={s.background3}></div>
               <div className={s.background4}></div>
             </div> 
             : ''
            }
            
             <Container>Page content</Container>
        </>
    )
}