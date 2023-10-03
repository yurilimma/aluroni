import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'
import stylesTema from 'styles/Tema.module.scss'
import React from 'react';

export default function PaginaPadrao({ children} : {children?: React.ReactNode}){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código da massa
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet /> {/* funciona como o children, recebe o componente passado por parâmetro do element(do route.js) */}
                {children}
            </div>
        </>
    )
}