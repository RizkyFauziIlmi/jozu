import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Genres({ datas }) {
    const router = useRouter()

    return(
        <Flex flexWrap={'wrap'} gap={'1rem'} justifyContent={'center'} alignItems={'center'} height={'100vh'} p={'2rem'}>
            {datas.genres.map((value, index) => {
                return(
                    <Flex boxShadow={'lg'} onClick={() => router.push(`/genres/${value.endpoint}/1`)} cursor={'pointer'} justifyContent={'center'} alignItems={'center'} key={index} bgColor={"rgba(0,0,0,0.5)"} borderRadius={'0.5rem'} fontWeight={'bold'} height={['10%','15%','20%','30%']} width={['100%','30%','30%','30%']}>
                        <Text>{value.genre}</Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/genres")
    const data = await response.json()

    return {
        props: {
            datas: data
        }
    }
}