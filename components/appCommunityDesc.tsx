import { MdHiking, MdAttractions, MdGroup } from 'react-icons/md';

import styles from './AppCommunity.module.css';

export default function AppCommunityDesc() {
  return (
    <div className={styles.pageSection}>
      <span className={styles.sectionTitle}>Além disso, a vida é melhor compartilhada!
        <br />
        E aqui você pode fazer parte de uma comunidade repleta de amantes de viagem, como você.
      </span>

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
  )
}