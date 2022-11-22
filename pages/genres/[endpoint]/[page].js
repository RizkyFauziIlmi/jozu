import { useRouter } from "next/router"
import Loading from "../../../components/Loading"
import Head from "next/head"
import { Flex, Heading, Grid, GridItem, IconButton, Text } from '@chakra-ui/react'
import Card from "../../../components/Card"
import { MdFirstPage, MdLastPage } from 'react-icons/md'

export default function Genre({ datas }) {
    const router = useRouter()
    const { endpoint, page } = router.query

    if (datas === undefined) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Head>
                <title>{`${endpoint} | ${page}`}</title>
            </Head>
            <Flex flexDir={'column'} alignItems={'center'}>
                <Heading display={['block', 'block', 'block', 'none']}>{`${endpoint} Genre`}</Heading>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} p={'2rem'} gap={'1rem'}>
                    {datas.genreAnime.map((value, index) => {
                        return (
                            <GridItem key={index}>
                                <Card data={value} />
                            </GridItem>
                        )
                    })}
                </Grid>
                <Flex alignItems={'center'} gap={'0.3rem'} fontWeight={'bold'} pb={"0.5rem"}>
                    <IconButton icon={<MdFirstPage />} disabled={page === "1" ? true : false} onClick={() => router.push(`/genres/${endpoint}/${parseInt(page) - 1}`)} />
                    <Text>{page}</Text>
                    <IconButton icon={<MdLastPage />} disabled={datas.genreAnime.length < 15 ? true : false} onClick={() => router.push(`/genres/${endpoint}/${parseInt(page) + 1}`)} />
                </Flex>
            </Flex>
        </>
    )
}

export async function getStaticPaths() {
    const response = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/genres")
    const data = await response.json()

    const paths = data.genres.map((value, index) => (
        {
            params: { endpoint: value.endpoint, page: '1' || null }
        }
    ))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context

    const response = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/genres/${params.endpoint}/${params.page}`)
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}