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
          <h1 className={styles.pageTitle}>Você já ficou perdido,<br/><b className={styles.boldTitle}>sem saber para onde ir?</b></h1>
          <span className={styles.pageSubtitle}>Todos nós amamos viajar, mas nem sempre o próximo destino de nossas vidas está claro.
            Entre tantas opções e tantos lugares que vemos diariamente fica difícil decidir ou descobrir o lugar perfeito.
            <br />
            <b>Assim como nós provavelmente você já se encontrou em alguma dessas situações:</b>
          </span>

          <section className={styles.clientIdentificationCont}>
            <div className={styles.clientIdentificationItem}>
              <strong>1.</strong>
              <span>Analisar vários destinos de viagem e não saber para onde ir.</span>
            </div>
            
            <div className={styles.clientIdentificationItem}>
              <strong>2.</strong>
              <span>Estar com o destino de viagem definido, mas não saber quais atividades e lugares visitar no seu destino</span>
            </div>

            
            <div className={styles.clientIdentificationItem}>
              <strong>3.</strong>
              <span>Quis relembrar detalhes de uma viagem que marcaram sua vida, mas nem todos os momentos dela estão salvos</span>
            </div>
          </section>

          <AppFeatures />

          <AppCommunityDesc />

          <CallToAction />
        </div>
      </main>
    </div>
  )
}
