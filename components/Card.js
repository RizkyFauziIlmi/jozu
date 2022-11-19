import { Flex, Image, Text, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Card({ data }) {
    const [detail, setDetail] = useState(false)
    const router = useRouter()

    return (
        <Flex position={'relative'} boxShadow={'dark-lg'} height={'40vh'} onMouseEnter={() => setDetail(true)} onMouseLeave={() => setDetail(false)}>
            <Image cursor={'pointer'} transition={'0.5s ease-in-out'} opacity={detail ? 0.5 : 1} filter={detail ? "blur(1px)" : "unset"} onClick={() => setDetail(!detail)} src={data.thumb} alt={data.title} />
            {detail ? <Heading size={'md'} p={'0.5rem'} opacity={1} position={'absolute'} top={0}>{data.title}</Heading> : ""}
            <Button onClick={() => router.push(`/anime/${data.endpoint}`)} bgColor={'#545658'} top={"90%"} width={"90%"} left={"50%"} transform={"translate(-50%, -50%)"} borderRadius={'none'} position={'absolute'} >Watch Now</Button>
            <Text bgColor={'blue.900'} right={0} top={"50%"} p={'0.1rem'} pl={'0.3rem'} pr={'0.2rem'} fontSize={'xs'} borderTopLeftRadius={'0.5rem'} textAlign={'right'} borderBottomLeftRadius={'0.5rem'} position={'absolute'}>{data.updated_day || data.score}<br />{data.total_episode}</Text>
        </Flex>
    )
}