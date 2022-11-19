import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Anime({ datas }) {
    const router = useRouter()
    const { endpoint } = router.query

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
        <>
            <Head>
                <title>{datas.anime_detail.title}</title>    
            </Head>        
            <Flex p={'2rem'} flexDir={'column'}>
                <Heading pb={'2.5rem'} size={'lg'}>{datas.anime_detail.title}</Heading>
                <Flex gap={'1rem'}>
                    <Image width={'20vw'} borderRadius={'lg'} boxShadow={'dark-lg'} alt={datas.anime_detail.thumb} src={datas.anime_detail.thumb} />
                    <Flex flexDir={'column'} gap={'0.5rem'} justifyContent={'space-between'}>
                        {datas.anime_detail.detail.map((value, index) => {
                            return (
                                <Text key={index}>{value}</Text>
                            )
                        })}
                    </Flex>
                </Flex>
                <Heading pt={'3rem'} fontSize={'lg'}>Sinopsis : </Heading>
                {datas.anime_detail.sinopsis.length === 0 ? "gak ada, cari sendiri di google aja 🙂" : ""}
                {datas.anime_detail.sinopsis.map((value, index) => {
                    return (
                        <Text key={index}>{value}</Text>
                    )
                })}
                <Flex flexDir={'column'} gap={'0.5rem'} pt={'3rem'}>
                    {datas.episode_list.map((value, index) => {
                        return(
                            <Button key={index} onClick={() => {
                                if (value.episode_title.includes("BATCH")) {
                                    router.push(`/batch/${value.episode_endpoint}`)
                                } else {
                                    router.push(`/episode/${value.episode_endpoint}`)
                                }
                            }}>
                                <Flex justifyContent={'space-between'} width={'100%'}>
                                    <Text noOfLines={1}>{value.episode_title}</Text>
                                    <Text>{value.episode_date}</Text>
                                </Flex>
                            </Button>
                        )
                    })}
                </Flex>
            </Flex>
        </>
    )
}

export async function getStaticPaths() {
    const response = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/anime-list")
    const data = await response.json()

    const paths = data.manga_list.map((value) => ({
        params: { endpoint: value.endpoint.replace("https://otakudesu.bid/anime/", "") }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/detail/${params.endpoint}`)
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}