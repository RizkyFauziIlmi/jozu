import { Flex, Grid, GridItem, IconButton, Text, Image, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Card from "../../components/Card"
import { MdFirstPage, MdLastPage } from 'react-icons/md'
import Head from "next/head"
import Loading from "../../components/Loading"

export default function OngoingPage({ datas }) {
    const router = useRouter()

    if (datas === undefined) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Head>
                <title>{`Ongoing | ${datas.currentPage}`}</title>
            </Head>
            <Flex flexDir={'column'} alignItems={'center'}>
                <Heading display={['block', 'block', 'block', 'none']}>Ongoing</Heading>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} p={'2rem'} gap={'1rem'}>
                    {datas.ongoing.map((value, index) => {
                        return (
                            <GridItem key={index}>
                                <Card data={value} />
                            </GridItem>
                        )
                    })}
                </Grid>
                <Flex alignItems={'center'} gap={'0.3rem'} fontWeight={'bold'} pb={"0.5rem"}>
                    <IconButton icon={<MdFirstPage />} disabled={datas.currentPage === "1" ? true : false} onClick={() => router.push(`/ongoing/${parseInt(datas.currentPage) - 1}`)} />
                    <Text>{datas.currentPage}</Text>
                    <IconButton icon={<MdLastPage />} isDisabled={datas.currentPage === "3" ? true : false} onClick={() => router.push(`/ongoing/${parseInt(datas.currentPage) + 1}`)} />
                </Flex>
            </Flex>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { page: "1" } },
            { params: { page: "2" } },
            { params: { page: "3" } }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context

    const response = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/ongoing/${params.page}`)
    const data = await response.json()

    return {
        props: {
            datas: data
        },
        revalidate: 60
    }
}