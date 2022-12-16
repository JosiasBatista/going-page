import Link from 'next/link';
import { MdArrowLeft } from 'react-icons/md';

import styles from './GoBack.module.css';

export default function GoBack() {
  return (
    <div className={styles.goBackContainer}>
      <Link href="/">
        <MdArrowLeft size={30} color="#FFF" />
      </Link>
    </div>
  )
}