import {
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import LeftNavbar from "./LeftNavbar";

export default function RightNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Flex gap={'0.5rem'} width={['100vw', '100vw', '100vw', '20vw']} display={'flex'} height={['max-content', 'max-content', 'max-content', '100vh']} p={['1rem', '1rem', '1rem', '2rem']}>
            <InputGroup>
                <Input borderRadius={"2xl"} placeholder="Search" />
                <InputLeftElement>
                    <BsSearch />
                </InputLeftElement>
            </InputGroup>
            <IconButton variant={'outline'} pl={'0.7rem'} icon={<AiOutlineMenu />} ref={btnRef} display={['unset', 'unset', 'unset', 'none']} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <LeftNavbar display={isOpen ? 'flex' : ""}/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}