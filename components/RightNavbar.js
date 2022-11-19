import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'

export default function RightNavbar() {
    return(
        <Flex width={'20vw'} height={'100vh'} p={'2rem'}>
            <InputGroup>
                <Input borderRadius={"2xl"} placeholder="Search" />
                <InputLeftElement>
                    <BsSearch />
                </InputLeftElement>
            </InputGroup>
        </Flex>
    )
}