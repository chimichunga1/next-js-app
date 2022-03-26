import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web dev newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Next js </h1>
    </div>
  )
}
