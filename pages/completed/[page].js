import { Flex, Grid, GridItem, IconButton, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import { MdFirstPage, MdLastPage } from 'react-icons/md'
import Head from "next/head";

export default function CompletedPage({ datas }) {
    const router = useRouter()

    if (datas === undefined) {
        return (
            <>
                <Head>
                    <title>Loading...</title>
                </Head>
                <Flex width={"100%"} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Image boxShadow={'dark-lg'} borderRadius={'1rem'} src="https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif" alt="loading" />
                </Flex>
            </>
        )
    }

    return (
        <Flex flexDir={'column'} alignItems={'center'}>
            <Grid templateColumns={"repeat(4, 1fr)"} p={'2rem'} gap={'1rem'}>
                {datas.completed.map((value, index) => {
                    return(
                        <GridItem key={index}>
                            <Card data={value}/>
                        </GridItem>
                    ) 
                })}
            </Grid>
            <Flex alignItems={'center'} gap={'0.3rem'} fontWeight={'bold'} pb={"0.5rem"}>
                <IconButton icon={<MdFirstPage />} disabled={datas.currentPage === "1" ? true : false} onClick={() => router.push(`/completed/${parseInt(datas.currentPage) - 1}`)}/> 
                <Text>{datas.currentPage}</Text>
                <IconButton icon={<MdLastPage />} disabled={datas.currentPage === "46" ? true : false} onClick={() => router.push(`/completed/${parseInt(datas.currentPage) + 1}`)} />
            </Flex>
        </Flex>
    )
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { page: "1" } },
            { params: { page: "2" } },
            { params: { page: "3" } },
            { params: { page: "4" } },
            { params: { page: "5" } },
            { params: { page: "6" } },
            { params: { page: "7" } },
            { params: { page: "8" } },
            { params: { page: "9" } },
            { params: { page: "10" } },
            { params: { page: "11" } },
            { params: { page: "12" } },
            { params: { page: "13" } },
            { params: { page: "14" } },
            { params: { page: "15" } },
            { params: { page: "16" } },
            { params: { page: "17" } },
            { params: { page: "18" } },
            { params: { page: "19" } },
            { params: { page: "20" } },
            { params: { page: "21" } },
            { params: { page: "22" } },
            { params: { page: "23" } },
            { params: { page: "24" } },
            { params: { page: "25" } },
            { params: { page: "26" } },
            { params: { page: "27" } },
            { params: { page: "28" } },
            { params: { page: "29" } },
            { params: { page: "30" } },
            { params: { page: "31" } },
            { params: { page: "32" } },
            { params: { page: "33" } },
            { params: { page: "34" } },
            { params: { page: "35" } },
            { params: { page: "36" } },
            { params: { page: "37" } },
            { params: { page: "38" } },
            { params: { page: "39" } },
            { params: { page: "40" } },
            { params: { page: "41" } },
            { params: { page: "42" } },
            { params: { page: "43" } },
            { params: { page: "44" } },
            { params: { page: "45" } },
            { params: { page: "46" } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/completed/${params.page}`)
    const data = await response.json()

    return {
        props: {
            datas: data
        },
        revalidate: 60
    }
}