import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { VStack } from '@chakra-ui/react';
import Signature from '../components/Main/Signature';
import About from '../components/Main/About';
import Links from '../components/Main/Links';

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
        <VStack py={12} px={24} w="100%" spacing={36} background="beige">
          <Header />
          <Signature />
          <About />
          <Links />
        </VStack>
      </main>
    </>
  );
}
