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
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import LeftNavbar from "./LeftNavbar";
import { useRouter } from "next/router";

export default function RightNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [input, setInput] = useState("")
    const btnRef = useRef()
    const router = useRouter()

    return (
        <Flex gap={'0.5rem'} width={['100vw', '100vw', '100vw', '20vw']} display={'flex'} height={['max-content', 'max-content', 'max-content', '100vh']} p={['1rem', '1rem', '1rem', '2rem']}>
            <InputGroup>
                <InputLeftElement>
                    <BsSearch />
                </InputLeftElement>
                <Input borderRadius={"2xl"} placeholder="Title...." onChange={(e) => setInput(e.target.value)}/>
                <InputRightElement width='5rem'>
                    <Button onClick={() => router.push(`/search/${input}`)} h='1.75rem' size='sm' display={input === "" ? 'none' : 'block'}>Search</Button>
                </InputRightElement>
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