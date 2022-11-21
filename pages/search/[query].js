import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import Card from '../../components/Card'
import Loading from "../../components/Loading"

export default function Search({ datas }) {
    const router = useRouter()
    const { query } = router.query

    if (datas === undefined) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Head>
                <title>{`Search | ${query}`}</title>
            </Head>
            <Flex p={'2rem'} flexDir={'column'} alignItems={'center'}>
                <Heading pb={'1.5rem'} size={['md', 'md', 'md', 'lg']} textAlign={'center'}>{`Results for '${query}' (${datas.search.length})`}</Heading>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={'1rem'}>
                    {datas.search.map((value, index) => {
                        return (
                            <GridItem key={index}>
                                <Card data={value} />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Flex>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { query: "https://otakudesu-anime-api.vercel.app/api/v1/search/oregairu" || null } }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/search/${params.query}`)
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}