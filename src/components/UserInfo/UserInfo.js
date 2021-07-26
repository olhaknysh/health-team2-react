import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserInfo.module.scss';


export default function UserInfo() {

    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => dispatch(authOperations.logOut()), [dispatch]);

    return (
        <div className={s.useInfoContainer}> 
            <span className={s.nickName}>{name}</span>
            <button onClick={()=>onLogout()} className={s.logOutButton}>Выйти</button>
        </div>
    );
}
