import { Box, Button, Divider, Flex, Grid, GridItem, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Iframe from 'react-iframe'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs'
import Download from '../../components/Download'
import Loading from '../../components/Loading'

export default function Episode({ datas }) {
    const router = useRouter()
    const [src, setSrc] = useState("")
    const [fullscreen, setFullscreen] = useState(false)

    if (datas === undefined) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Head>
                <title>{datas?.title}</title>
            </Head>
            <Flex flexDir={'column'} p={'2rem'} overflowX={'hidden'} alignItems={'center'} width={'100%'} height={'100vh'}>
                <Heading fontSize={['md','md','md','2xl']} p={'1rem'}>{datas?.title}</Heading>
                {src === ""
                    ? <Iframe
                        url={src === "" ? datas.streamLink : src}
                        position={'relative'}
                        allowFullScreen
                    />
                    :
                    <Flex zIndex={fullscreen ? 99999 : 'unset'} background={'url("https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif")'} top={0} left={0} right={0} bottom={0} position={fullscreen ? 'absolute' : 'relative'}>
                        <Iframe
                            url={src === "" ? datas.streamLink : src}
                            width='100%'
                            height='100%'
                            allowFullScreen
                        />
                        <IconButton colorScheme={'green'} bottom={5} right={5} onClick={() => setFullscreen(!fullscreen)} position={'absolute'} icon={fullscreen ? <BsFullscreenExit /> : <BsFullscreen />} />
                    </Flex>
                }
                <Flex gap={'0.5rem'} p={'1rem'} flexWrap={'wrap'} justifyContent={'center'}>
                    {datas?.relative.map((value, index) => {
                        return (
                            <Button size={'sm'} key={index} onClick={() => value.title_ref === "See All Episodes" ? router.push(`/anime/${value.link_ref}`) : router.push(`/episode/${value.link_ref}`)}>{value.title_ref}</Button>
                        )
                    })}
                    {src === "" ? "" : <Button size={'sm'} onClick={() => {
                        setSrc("")
                        setFullscreen(false)
                    }}>Streaming</Button>}
                </Flex>
                <Download quality_ref={'low'} datas={datas} setSrc={setSrc} />
                <Download quality_ref={'medium'} datas={datas} setSrc={setSrc} />
                <Download quality_ref={'high'} datas={datas} setSrc={setSrc} />
            </Flex>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { endpoint: "kdjns-episode-11-sub-indo" || null } }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/episode/${params.endpoint}`)
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}