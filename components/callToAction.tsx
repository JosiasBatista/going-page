import { FaGooglePlay } from 'react-icons/fa';

import styles from './actionCall.module.css';

export default function CallToAction() {
  
  const redirectToGooglePlay = () => {
    window.location.assign('https://play.google.com/store/apps/details?id=com.going.goingapp')
  }
  
  return (
    <section className={styles.callToDownload}>
      <strong className={styles.callTitle}>Venha fazer parte!</strong>
      <span className={styles.callSubtitle}>Faça o download agora</span>

      <button className={styles.storeButton} onClick={() => redirectToGooglePlay()}>
        <FaGooglePlay size={45} color="#179DC7" />
      </button>

      <span className={styles.soonText}>Em breve também na App Store</span>
    </section>
  )
}