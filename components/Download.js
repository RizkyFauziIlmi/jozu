import { Flex, Heading, Text, Divider, Button } from "@chakra-ui/react"

export default function Download({ quality_ref = "high", datas, setSrc }) {
    if (quality_ref === "low") {
        return (
            <>
                <Flex width={'100%'} flexDir={'column'}>
                    <Heading fontSize={'lg'}>{datas?.quality.low_quality.quality}</Heading>
                    <Text opacity={0.5}>{datas?.quality.low_quality.size}</Text>
                </Flex>
                <Divider />
                <Flex width={'100%'} gap={'0.5rem'} p={'0.5rem'} flexWrap={'wrap'}>
                    {datas?.quality.low_quality.download_links.map((value, index) => {
                        return (
                            <Button size={'sm'} key={index} onClick={() => setSrc(`${value.link}`)}>{value.host}</Button>
                        )
                    })}
                </Flex>
            </>
        )
    } else if (quality_ref === "medium") {
        return (
            <>
                <Flex width={'100%'} flexDir={'column'}>
                    <Heading fontSize={'lg'}>{datas?.quality.medium_quality.quality}</Heading>
                    <Text opacity={0.5}>{datas?.quality.medium_quality.size}</Text>
                </Flex>
                <Divider />
                <Flex width={'100%'} gap={'0.5rem'} p={'0.5rem'} flexWrap={'wrap'} pb={'1rem'}>
                    {datas?.quality.medium_quality.download_links.map((value, index) => {
                        return (
                            <Button size={'sm'} key={index} onClick={() => setSrc(`${value.link}`)}>{value.host}</Button>
                        )
                    })}
                </Flex>
            </>
        )
    } else if (quality_ref === "high") {
        return (
            <>
                <Flex width={'100%'} flexDir={'column'}>
                    <Heading fontSize={'lg'}>{datas?.quality.high_quality.quality}</Heading>
                    <Text opacity={0.5}>{datas?.quality.high_quality.size}</Text>
                </Flex>
                <Divider />
                <Flex width={'100%'} gap={'0.5rem'} p={'0.5rem'} flexWrap={'wrap'}>
                    {datas?.quality.high_quality.download_links.map((value, index) => {
                        return (
                            <Button size={'sm'} key={index} onClick={() => setSrc(`${value.link}`)}>{value.host}</Button>
                        )
                    })}
                </Flex>
            </>
        )
    }
}