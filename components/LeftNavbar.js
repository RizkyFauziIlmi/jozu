import { Button, Flex, Heading } from "@chakra-ui/react";
import { FcFilmReel } from 'react-icons/fc'
import { SlHome } from 'react-icons/sl'
import { BsCheck2All, BsArrowClockwise, BsListUl, BsFilm, BsDoorOpen } from 'react-icons/bs'
import { MdSettings } from 'react-icons/md'
import { useRouter } from "next/router";

export default function LeftNavbar() {
    const router = useRouter()

    return (
        <Flex flexDir={'column'} p={'2rem'} overflow={'auto'} width={'15vw'} height={'100vh'} borderRight={"0.5px solid black"}>
            <Flex pb={'2rem'} gap={'0.5rem'} alignItems={'center'}>
                <FcFilmReel />
                <Heading fontSize={'2xl'}>Jozu</Heading>
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
                    <Button leftIcon={<BsFilm />} width={'max-content'} variant={'unstyled'}>Genres</Button>
                    <Button leftIcon={<BsListUl />} variant={'unstyled'} bgColor={router.asPath.includes("/anime-list") ? "#545658" : "unset"} width={router.asPath.includes("/anime-list") ? '100%' : 'max-content'} onClick={() => router.push("/anime-list")}>Anime List</Button>
                </Flex>
                <Flex flexDir={"column"} gap={'0.5rem'}>
                    <Heading fontSize={'sm'} opacity={0.5} mb={'-0.3rem'}>General</Heading>
                    <Button leftIcon={<MdSettings />} width={'max-content'} variant={'unstyled'}>Settings</Button>
                    <Button leftIcon={<BsDoorOpen />} width={'max-content'} variant={'unstyled'}>Logout</Button>
                </Flex>
            </Flex>

        </Flex>
    )
}