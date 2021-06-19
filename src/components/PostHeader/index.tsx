/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './styles.module.scss'

interface IBlogPostTypes {
    title?: string
    img?: string
    time?: string
}

export default function BlogPost({ title, img, time }: IBlogPostTypes) {
    return (
        <header className={styles.container}>
            {img ? (
                <img src='logoCF.svg' width='150px' height='50px' alt='logo' />
            ) : (
                <Skeleton width={100} height={20} />
            )}
            <p>{title || <Skeleton width={100} height={20} />}</p>
        </header>
    )
}
