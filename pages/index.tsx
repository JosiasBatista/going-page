import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ParallaxComponent from '../components/parallax';

import AppCommunityDesc from '../components/appCommunityDesc';
import AppFeatures from '../components/appFeatures';
import CallToAction from '../components/callToAction';
import ClientIdentification from '../components/clientIdentification';

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
          <h1 className={styles.pageTitle}>Você já ficou perdido,<br/><b className={styles.boldTitle}>sem saber para onde ir?</b></h1>
          
          <ClientIdentification />

          <AppFeatures />

          <AppCommunityDesc />

          <CallToAction />
        </div>
      </main>
    </div>
  )
}
