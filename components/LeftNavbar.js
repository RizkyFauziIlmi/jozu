import { Button, Flex, Heading, Modal, ModalOverlay, useDisclosure, ModalCloseButton, ModalBody, ModalContent, ModalHeader, ModalFooter, Divider, RadioGroup, Radio, HStack, useColorMode } from "@chakra-ui/react";
import { FcFilmReel } from 'react-icons/fc'
import { SlHome } from 'react-icons/sl'
import { BsCheck2All, BsArrowClockwise, BsListUl, BsFilm, BsDoorOpen } from 'react-icons/bs'
import { MdSettings } from 'react-icons/md'
import { useRouter } from "next/router";
import { useState } from "react";

export default function LeftNavbar({ display = "" }) {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setColorMode, colorMode } = useColorMode()
    const [theme, setTheme] = useState(colorMode)

    return (
        <Flex flexDir={'column'} display={display === "" ? ['none', 'none', 'none', 'flex'] : 'flex'} p={'2rem'} overflow={'auto'} width={['100%', '100%', '100%', '15vw']} height={'100vh'} borderRight={['none', 'none', 'none', "0.5px solid black"]}>
            <Flex pb={'2rem'} gap={'0.5rem'} alignItems={'center'}>
                <FcFilmReel />
                <Heading fontSize={'2xl'} onClick={() => router.push("/")} cursor={'pointer'}>Jozu</Heading>
            </Flex>
            <Flex flexDir={'column'} gap={'1rem'}>
                <Flex flexDir={"column"} gap={'0.5rem'}>
                    <Heading fontSize={'sm'} opacity={0.5} mb={'-0.3rem'}>Menu</Heading>
                    <Button bgColor={router.asPath === "/" ? "#545658" : "unset"} leftIcon={<SlHome />} width={router.asPath === "/" ? '100%' : 'max-content'} variant={'unstyled'} onClick={() => router.push("/")}>Home</Button>
                    <Button bgColor={router.asPath.includes("/ongoing") ? "#545658" : "unset"} leftIcon={<BsArrowClockwise />} width={router.asPath.includes("/ongoing") ? '100%' : 'max-content'} variant={'unstyled'} onClick={() => router.push("/ongoing")}>Ongoing</Button>
                    <Button bgColor={router.asPath.includes("/completed") ? "#545658" : "unset"} leftIcon={<BsCheck2All />} width={router.asPath.includes("/completed") ? '100%' : 'max-content'} onClick={() => router.push("/completed")} variant={'unstyled'}>Completed</Button>
                </Flex>
                <Flex flexDir={"column"} gap={'0.5rem'}>
                    <Heading fontSize={'sm'} opacity={0.5} mb={'-0.3rem'}>Category</Heading>
                    <Button bgColor={router.asPath.includes("/genres") ? "#545658" : "unset"} leftIcon={<BsFilm />} variant={'unstyled'} width={router.asPath.includes("/genres") ? '100%' : 'max-content'} onClick={() => router.push("/genres")}>Genres</Button>
                    <Button leftIcon={<BsListUl />} variant={'unstyled'} bgColor={router.asPath.includes("/anime-list") ? "#545658" : "unset"} width={router.asPath.includes("/anime-list") ? '100%' : 'max-content'} onClick={() => router.push("/anime-list")}>Anime List</Button>
                </Flex>
                <Flex flexDir={"column"} gap={'0.5rem'}>
                    <Heading fontSize={'sm'} opacity={0.5} mb={'-0.3rem'}>General</Heading>
                    <Button leftIcon={<MdSettings />} width={'max-content'} variant={'unstyled'} onClick={onOpen}>Settings</Button>
                    <Button leftIcon={<BsDoorOpen />} width={'max-content'} variant={'unstyled'}>Logout</Button>
                </Flex>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'}>Settings</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading size={'md'} pb={'0.5rem'}>Appereance</Heading>
                        <Divider />
                        <Heading size={'sm'}>Theme</Heading>
                        <RadioGroup onChange={setTheme} defaultValue={colorMode}>
                            <HStack spacing={2}>
                                <Radio value='dark'>Dark</Radio>
                                <Radio value='light'>Light</Radio>
                            </HStack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            onClose()
                            setColorMode(`${theme}`)
                        }}>
                            Apply
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}