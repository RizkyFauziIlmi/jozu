import { Flex } from "@chakra-ui/react"
import Head from "next/head"
import List from "../../components/List"

export default function AnimeList({ datas }) {
    return (
        <>
            <Head>
                <title>Anime List</title>
            </Head>
            <Flex flexDir={'column'} gap={'1rem'} overflowX={'hidden'} p={'2rem'}>
                <List datas={datas} filter={"1"}/>
                <List datas={datas} filter={"2"}/>
                <List datas={datas} filter={"3"}/>
                <List datas={datas} filter={"4"}/>
                <List datas={datas} filter={"8"}/>
                <List datas={datas} filter={"9"}/>
                <List datas={datas} filter={"A"}/>
                <List datas={datas} filter={"B"}/>
                <List datas={datas} filter={"C"}/>
                <List datas={datas} filter={"D"}/>
                <List datas={datas} filter={"E"}/>
                <List datas={datas} filter={"F"}/>
                <List datas={datas} filter={"G"}/>
                <List datas={datas} filter={"H"}/>
                <List datas={datas} filter={"I"}/>
                <List datas={datas} filter={"J"}/>
                <List datas={datas} filter={"K"}/>
                <List datas={datas} filter={"L"}/>
                <List datas={datas} filter={"M"}/>
                <List datas={datas} filter={"N"}/>
                <List datas={datas} filter={"O"}/>
                <List datas={datas} filter={"P"}/>
                <List datas={datas} filter={"Q"}/>
                <List datas={datas} filter={"R"}/>
                <List datas={datas} filter={"S"}/>
                <List datas={datas} filter={"T"}/>
                <List datas={datas} filter={"U"}/>
                <List datas={datas} filter={"V"}/>
                <List datas={datas} filter={"W"}/>
                <List datas={datas} filter={"Y"}/>
                <List datas={datas} filter={"Z"}/>
            </Flex>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/anime-list")
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}