import Head from 'next/head';
import { FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Home.module.css';
import ParallaxComponent from '../components/parallax';

import AppCommunityDesc from '../components/appCommunityDesc';
import AppFeatures from '../components/appFeatures';

export default function Home() {

  const redirectToGooglePlay = () => {
    window.location.assign('https://play.google.com/store/apps/details?id=com.going.goingapp')
  }

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

          <section className={styles.callToDownload}>
            <strong className={styles.callTitle}>Venha fazer parte!</strong>
            <span className={styles.callSubtitle}>Faça o download agora</span>

            <button className={styles.storeButton} onClick={() => redirectToGooglePlay()}>
              <FaGooglePlay size={45} color="#179DC7" />
            </button>

            <span className={styles.soonText}>Em breve também na App Store</span>
          </section>
        </div>
      </main>
    </div>
  )
}
