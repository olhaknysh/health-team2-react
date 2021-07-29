import React from 'react'

import styles from './AuthThumb.module.css';


const AuthThumb = ({ children }) => {

    return (
        <div className={styles.thumb} >
            {children}
        </div>
    );
};

export default AuthThumb