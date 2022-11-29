import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Going App</title>
        <meta name="description" content="Landing Page for Going App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.pageHeader}>
          <h1 className={styles.appName}>GOING</h1>
          
          <Image
            priority
            src="/images/landscape.png"
            className={styles.backgroundImage}
            alt=""
            layout="fill"
          />

        </div>
      </main>
    </div>
  )
}
