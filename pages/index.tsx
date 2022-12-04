import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ParallaxComponent from '../components/parallax';
import FeatureCard from '../components/featureCard';
import { MdHiking, MdAttractions, MdGroup } from 'react-icons/md'

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

          <div className={styles.pageSection}>
            <span className={styles.sectionTitle}>Encontre outros amantes de viagem como você!</span>

            <div className={styles.communityDescCont}>
              <section className={`${styles.communityDesc} ${styles.firstDesc}`}>
                <MdHiking size={120} color="#179DC7" />
                <p className={styles.communityDescInfo}>Revele para o mundo as suas melhores experiências de viagem e quais atividades o mundo precisa conhecer!</p>
              </section>

              <section className={`${styles.communityDesc} ${styles.secDesc}`}>
                <MdAttractions size={120} color="#179DC7" />
                <p className={styles.communityDescInfo}>Descreva os lugares mais perfeitos que você conheceu e veja quem mais concorda com a sua opinão!</p>
              </section>

              <section className={`${styles.communityDesc} ${styles.thirdDesc}`}>
                <MdGroup size={120} color="#179DC7" />
                <p className={styles.communityDescInfo}>Faça parte de uma comunidade de pessoas que sabem que a vida é feita de experiências e compartilhar elas é muito melhor</p>
              </section>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
