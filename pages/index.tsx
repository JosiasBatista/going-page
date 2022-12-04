import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ParallaxComponent from '../components/parallax';
import FeatureCard from '../components/featureCard';

import WriteDiary from '../public/animations/write-diary.json';
import FindDestination from '../public/animations/find-destination.json';
import DiscoverActivity from '../public/animations/discover-activity.json';

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

          <section className={styles.appFeatures}>
            <FeatureCard
              animation={WriteDiary}
              title="Escreva Diários"
              description="Compartilhe suas jornadas através de diários.
              Compartilhe com o mundo em diários públicos ou guarde seus momentos em diários privados."
            />
            <FeatureCard
              animation={FindDestination}
              title="Encontre Destinos"
              description="Encontre os melhores destinos seja qual for o tipo de viagem que você deseja fazer.
              Viagens em família, românticas ou sozinho, descubra o melhor lugar para tudo!"
            />
            <FeatureCard
              animation={DiscoverActivity}
              title="Descubra Atividades"
              description="Não sabe o que fazer nos lugares aonde você vai viajar?
              Descubra as melhores atividades e programe o que você irá fazer!"
            />
          </section>

        </div>
      </main>
    </div>
  )
}
