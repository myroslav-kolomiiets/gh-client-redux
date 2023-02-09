import React from 'react';
import styles from './Info.module.css';

export function Info() {
    return (
        <div className={styles.info}>
            {'По Вашому запиту не знайдено жодного репозиторія'}
        </div>
    );
}
