import { Button, UnorderedList, ListItem, Heading, Divider, Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function List({ datas, filter }) {
    const router = useRouter()

    return (
        <Flex flexDir={'column'}>
            <Heading size={'sm'}>{filter}</Heading>
            <Divider />
            <UnorderedList>
                {datas.manga_list.filter(value => value.title.startsWith(`${filter}`)).map((value, index) => {
                    return (
                        <ListItem key={index} width={'100%'}>
                            <Button width={'100%'} onClick={() => router.push(`anime/${value.endpoint.replace("https://otakudesu.bid/anime/", "")}`)} variant={'link'}>
                                <Text textAlign={'left'} width={"100%"}>{value.title}</Text>
                            </Button>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </Flex>
    )
}