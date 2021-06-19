import styles from './styles.module.scss'
import Switch from '../SwitchTop'
import { shade } from 'polished'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import PostHeader from '../PostHeader'

type IProps = {
    setTheme: any
    darkMode: boolean
}

const blogPost = {
    title: 'O melhor para você ouvir, sempre!',

    img: 'logoCF',
}

export function Header({ darkMode, setTheme }: IProps) {
    const [hasPosts, setPost] = useState(false)

    const { colors } = useContext(ThemeContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPost(true)
        }, 1000)
        return () => clearTimeout(timer)
    })

    if (hasPosts) {
        return (
            <header className={styles.headerContainer}>
                <PostHeader title={blogPost.title} img={blogPost.img} />

                <Switch
                    onChange={setTheme}
                    checked={darkMode}
                    checkedIcon={false}
                    uncheckedIcon={true}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    onColor={colors.secundary}
                    offColor={shade(0.15, colors.primary)}
                    onHandleColor={colors.handleColor}
                    offHandleColor={colors.handleColor}
                />
            </header>
        )
    }
    return <PostHeader />
}
