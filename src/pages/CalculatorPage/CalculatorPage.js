import { useMedia } from 'react-use';
import s from './CalculatorPage.module.scss';

import RightSideBar from '../../components/RightSideBar';

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
            <RightSideBar />
        </>
    )
}