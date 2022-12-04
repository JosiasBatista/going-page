import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ParallaxComponent from '../components/parallax';
import FeatureCard from '../components/featureCard';

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

          <section className={styles.appFeatures}>
            <FeatureCard
              title="Escreva Diários"
              description="Compartilhe suas jornadas através de diários.
              Compartilhe com o mundo em diários públicos ou guarde seus momentos em diários privados."
            />
            <FeatureCard
              title="Encontre Destinos"
              description="Compartilhe suas jornadas através de diários.
              Compartilhe com o mundo em diários públicos ou guarde seus momentos em diários privados."
            />
            <FeatureCard
              title="Descubra Atividades"
              description="Compartilhe suas jornadas através de diários.
              Compartilhe com o mundo em diários públicos ou guarde seus momentos em diários privados."
            />
          </section>
        </div>
      </main>
    </div>
  )
}
