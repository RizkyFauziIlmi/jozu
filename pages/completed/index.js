import { Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react"
import Card from "../../components/Card"
import { MdFirstPage, MdLastPage } from 'react-icons/md'
import { useRouter } from "next/router"
import Head from "next/head"

export default function Completed({ datas }) {
    const router = useRouter()

    return(
        <>
            <Head>
                <title>{`Completed | ${datas.currentPage}`}</title>
            </Head>
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
                    <IconButton icon={<MdFirstPage />} disabled={datas.currentPage === "1" ? true : false} /> 
                    <Text>{datas.currentPage}</Text>
                    <IconButton icon={<MdLastPage />} disabled={datas.currentPage === "46" ? true : false} onClick={() => router.push(`/completed/${parseInt(datas.currentPage) + 1}`)} />
                </Flex>
            </Flex>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/completed/1")
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}