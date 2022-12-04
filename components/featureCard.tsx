import styles from './Feature.module.css';

interface Feature {
  title: string,
  description: string
}

export default function FeatureCard(feature: Feature) {
  return (
    <div className={styles.featureCard}>
      <strong className={styles.featureTitle}>{feature.title}</strong>
      <p className={styles.featureDesc}>{feature.description}</p>
    </div>
  )
}