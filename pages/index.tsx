import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <h1 className='red'>Hello</h1>
      <h1 className={styles.red}><span>nested from scss</span> Hello again</h1>
      <Link href="/harshal"><a>Click here</a></Link>
    </div>
  )
}
