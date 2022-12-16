import Lottie from "lottie-react";

import WriteDiary from "../public/animations/write-diary.json";
import styles from "../styles/Diary.module.css";
import GoBack from "../components/goBack";

export default function Diary() {
  return (
    <div className={styles.pageContainer}>
      <GoBack />
      <section className={styles.pageHeader}>
        <Lottie
          animationData={WriteDiary}
          className={styles.animation}
          // width={'70%'}
          // height={'70%'}
          autoPlay={true}
        />
      </section>

      <h1 className={styles.pageTitle}>Escreva Diários</h1>
    </div>
  )
}