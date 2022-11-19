import { Button, UnorderedList, ListItem, Heading, Divider, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function List({ datas, filter }) {
    const router =  useRouter()

    return (
        <Flex flexDir={'column'} p={'2rem'} pb={'unset'}>
            <Heading size={'sm'}>{filter}</Heading> 
            <Divider />       
            <UnorderedList>
                {datas.manga_list.filter(value => value.title.startsWith(`${filter}`)).map((value, index) => {
                    return (
                        <ListItem key={index}>
                            <Button onClick={() => router.push(`anime/${value.endpoint.replace("https://otakudesu.bid/anime/", "")}`)} variant={'link'}>{value.title}</Button>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </Flex>
    )
}