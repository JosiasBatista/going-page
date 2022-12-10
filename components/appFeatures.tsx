import FeatureCard from "./featureCard";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { useRef } from "react";
import WriteDiary from "../public/animations/write-diary.json";
import FindDestination from "../public/animations/find-destination.json";
import DiscoverActivity from "../public/animations/discover-activity.json";

import styles from "./AppFeatures.module.css";

export default function AppFeatures() {
  const featureCards = useRef<HTMLDivElement>(null);

  const makeScrollRight = () => {
    if (featureCards.current) {
      featureCards.current.scrollLeft += 80;
    }
  }

  const makeScrollLeft = () => {
    if (featureCards.current) {
      featureCards.current.scrollLeft -= 80;
    }
  }

  return (
    <>
      <div className={styles.appFeatCont} ref={featureCards}>
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

      <section className={styles.scrollButtonCont}>
        <button className={styles.scrollButton} onClick={makeScrollLeft}>
          <FaArrowAltCircleLeft size={30} color="#179DC7" />
        </button>
        <button className={styles.scrollButton} onClick={makeScrollRight}>
          <FaArrowAltCircleRight size={30} color="#179DC7" />
        </button>
      </section>
    </>
  )
}