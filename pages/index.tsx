import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ParallaxComponent from '../components/parallax';

import AppCommunityDesc from '../components/appCommunityDesc';
import AppFeatures from '../components/appFeatures';
import CallToAction from '../components/callToAction';

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
          <h1 className={styles.pageTitle}>Todos possuem um motivo para viajar. Então me diz, qual é o <b className={styles.boldTitle}>SEU?</b></h1>
          <span className={styles.pageSubtitle}>Independentemente do seu perfil de viajante, temos as funcionalidades certas para você</span>

          <AppFeatures />

          <AppCommunityDesc />

          <CallToAction />
        </div>
      </main>
    </div>
  )
}
