import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Going App</title>
        <meta name="description" content="Landing Page for Going App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.pageHeader}>
          {/* <h1 className={styles.appName}>GOING</h1> */}
          
          <Parallax className={styles.parallax} speed={-20}>
            <Image
            priority
            src="/images/Layer9.svg"
            className={styles.backgroundImage}
            alt=""
            layout="fill"
          />
          </Parallax>
          <Parallax className={styles.parallax} speed={-55}>
            <Image
            priority
            src="/images/Layer10.svg"
            className={styles.backgroundImage}
            alt=""
            layout="fill"
          />
          </Parallax>
          <Parallax className={styles.parallax} speed={-15}>
            <Image
            priority
            src="/images/Layer8.svg"
            className={styles.backgroundImage}
            alt=""
            layout="fill"
          />
          </Parallax>
          <Parallax className={styles.parallax} speed={0}>
            <Image
            priority
            src="/images/Layer7.svg"
            className={styles.backgroundImage}
            alt=""
            layout="fill"
          />
          </Parallax>
          
          <Parallax className={styles.parallax} speed={12.5}>
            <Image
            priority
            src="/images/Layer6.svg"
            className={styles.backgroundImage}
            alt=""
            layout="fill"
          />
          </Parallax>
          <Parallax className={styles.parallax} speed={10}>
            <Image
              priority
              src="/images/Layer5.svg"
              className={styles.backgroundImage}
              alt=""
              layout="fill"
            />
          </Parallax>
          
          <Parallax className={styles.parallax} speed={10}>
            <Image
              priority
              src="/images/Layer4.svg"
              className={styles.backgroundImage}
              alt=""
              layout="fill"
            />
          </Parallax>
          
          <Parallax className={styles.parallax} speed={15}>
            <Image
              priority
              src="/images/Layer3.svg"
              className={styles.backgroundImage}
              alt=""
              layout="fill"
            />
          </Parallax>
          
          <Parallax className={styles.parallax} speed={15}>
            <Image
              priority
              src="/images/Layer2.svg"
              className={styles.backgroundImage}
              alt=""
              layout="fill"
            />
          </Parallax>
          
          <Parallax className={styles.parallax} speed={20}>
            <Image
              priority
              src="/images/Layer1.svg"
              className={styles.backgroundImage}
              alt=""
              layout="fill"
            />
          </Parallax>
        </div>

        <div className={styles.pageRest} />
      </main>
    </div>
  )
}
