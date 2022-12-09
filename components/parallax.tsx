
import Image from 'next/image';
import styles from './Parallax.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function ParallaxComponent() {
  return (
    <div className={styles.pageHeader}>
      
      <Parallax className={styles.parallaxBackground} speed={0}>
        <Image
          priority
          src="/images/Layer9.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>

      
      <Parallax className={styles.parallax} speed={-40}>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="/images/Layer10.svg"
            className={styles.backgroundImageLogo}
          />
          <img
            src="/images/Layer10Small.svg"
            className={styles.backgroundImageLogo}
          />
        </picture>
      </Parallax>

      <Parallax className={styles.parallax} speed={-15}>
        <Image
          priority
          src="/images/Layer8.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>

      <Parallax className={styles.parallax} speed={0}>
        <Image
          priority
          src="/images/Layer7.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
      
      <Parallax className={styles.parallax} speed={12.5}>
        <Image
          priority
          src="/images/Layer6.svg"
          className={styles.backgroundImageWater}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
      
      <Parallax className={styles.parallax} speed={10}>
        <Image
          priority
          src="/images/Layer5.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
      
      <Parallax className={styles.parallax} speed={12}>
        <Image
          priority
          src="/images/Layer4.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
      
      
      <Parallax className={styles.parallax} speed={15}>
        <Image
          priority
          src="/images/Layer3.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
      
      <Parallax className={styles.parallax} speed={17.5}>
        <Image
          priority
          src="/images/Layer2.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
      
      <Parallax className={styles.parallax} speed={30}>
        <Image
          priority
          src="/images/Layer1.svg"
          className={styles.backgroundImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Parallax>
    </div>
  )
}