import styles from '../styles/Layout.module.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import Nav from './Nav'
import Header from './Header'
import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
        <Head>
            <title>Next Avert</title>
            <meta name='keywords' content='asuntovertailu, asuntokauppa, asunto' />s
        </Head>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout