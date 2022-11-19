import '../styles/globals.css'
import { ChakraProvider, Flex, Image, Spinner } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  if (loading) {
    return (
      <ChakraProvider>
        <Head>
          <title>Loading...</title>
        </Head>
        <Layout>
          <Flex width={"100%"} height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Image boxShadow={'dark-lg'} borderRadius={'1rem'} src="https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif" alt="loading" />
          </Flex>
        </Layout>
      </ChakraProvider>
    )
  } else {
    return (
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    )
  }
}

export default MyApp
