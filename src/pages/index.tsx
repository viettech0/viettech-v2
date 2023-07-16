import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

import styles from '../styles/Home.module.css';

import { Header } from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>VietTech</title>
        <meta name="description" content="Community. Mentorship. Experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <p style={{ fontFamily: `'Space Grotesk', sans-serif`, fontSize: '48px' }}>FIND</p>
      </main>
    </>
  );
}