import { useRef } from 'react';
import styles from './Feature.module.css';
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface Feature {
  title: string,
  description: string,
  animation: any
}

export default function FeatureCard(feature: Feature) {
  const animationRef = useRef<LottieRefCurrentProps | null>(null);

  const startAnimation = () => {
    animationRef.current?.play();
  }

  const stopAnimation = () => {
    animationRef.current?.stop();
  }

  return (
    <div className={styles.featureCard} 
      onMouseEnter={() => startAnimation()}
      onMouseLeave={() => stopAnimation()}
    >
      <div className={styles.animationContainer}>
        <Lottie
          animationData={feature.animation}
          className={styles.animation}
          lottieRef={animationRef}
          loop={false}
          width={300}
          height={100}
          autoPlay={false}
        />
      </div>
      <strong className={styles.featureTitle}>{feature.title}</strong>
      <p className={styles.featureDesc}>{feature.description}</p>
    </div>
  )
}