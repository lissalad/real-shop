import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>real shop</title>
        <meta name="description" content="this is a real shop" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <h1 className="bg-sky-500">tailwind is blue</h1>

       
    </div>
  )
}
