import Head from "next/head"
import { Flex, Image } from '@chakra-ui/react'

export default function Loading() {
    return (
        <>
            <Head>
                <title>Loading...</title>
            </Head>
            <Flex p={'1rem'} width={"100%"} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Image boxShadow={'dark-lg'} borderRadius={'1rem'} src="https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif" alt="loading" />
            </Flex>
        </>
    )
}