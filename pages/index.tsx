import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Parallax } from 'react-scroll-parallax';
import ParallaxComponent from '../components/parallax';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Going App</title>
        <meta name="description" content="Landing Page for Going App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ParallaxComponent />

        <div className={styles.pageRest}>
          <h1 className={styles.pageTitle}>Todos possuem um motivo para viajar. Então me diz, qual é o SEU?</h1>
        </div>
      </main>
    </div>
  )
}
