import { Flex } from "@chakra-ui/react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

export default function Layout({ children }) {
    return (
        <Flex justifyContent={'space-between'} flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
            <LeftNavbar />
            <Flex flexDir={'column'} width={['100vw', '100vw', '100vw', '65vw']} height={'100vh'} overflowY={'auto'}>{children}</Flex>
            <RightNavbar />
        </Flex>
    )
}