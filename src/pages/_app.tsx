import '../styles/global.scss'
import { Header } from '../components/Header'
import styles from '../styles/app.module.scss'
import { Player } from '../components/Player'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import 'tailwindcss/tailwind.css'
import { useState } from 'react'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = () => {
        setDarkMode((prevState: any) => !prevState)
    }

    return (
        <div className={styles.wrapper}>
            <main>
                <ThemeProvider theme={darkMode ? dark : light}>
                    <Header setTheme={changeTheme} darkMode={darkMode} />
                    <Component {...pageProps} />
                    <GlobalStyles />
                </ThemeProvider>
            </main>
            <Player />
        </div>
    )
}
export default MyApp
