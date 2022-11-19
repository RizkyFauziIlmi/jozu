import { Box, Button, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BsChevronRight } from 'react-icons/bs'
import Card from "../components/Card";

export default function Home({ dataOngoing, dataComplete }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box
          as='iframe'
          src='https://www.youtube.com/embed/8nKJCNgiVhc?autoplay=1&mute=1&controls=0&loop=1'
          width='100%'
          pt={'2rem'}
          height={"50vh"}
          pb={'1rem'}
          sx={{
            aspectRatio: '16/9'
          }}
        />
      <Flex p={'2rem'} flexDir={'column'}>
        <Flex pb={'1rem'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Heading fontSize={'md'}>Now Playing</Heading>
          <IconButton icon={<BsChevronRight />} variant={'outline'} onClick={() => router.push("/ongoing")} />
        </Flex>
        <Flex gap={"1rem"}>
          {dataOngoing.map((value, index) => {
            return (
              <Card key={index} data={value} />
            )
          })}
        </Flex>
        <Flex pt={"3rem"} pb={'1rem'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Heading fontSize={'md'}>Completed Anime</Heading>
          <IconButton icon={<BsChevronRight />} variant={'outline'} onClick={() => router.push("/completed")} />
        </Flex>
        <Flex gap={"1rem"}>
          {dataComplete.map((value, index) => {
            return (
              <Card key={index} data={value} />
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}

export async function getServerSideProps() {
  const fetchOngoing = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/ongoing/1")
  const onGoing = await fetchOngoing.json()
  const fetchComplete = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/completed/1")
  const completed = await fetchComplete.json()

  return {
    props: {
      dataOngoing: onGoing.ongoing.slice(0, 4),
      dataComplete: completed.completed.slice(0, 4),
    }
  }
}
