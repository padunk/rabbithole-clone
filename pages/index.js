import { Flex, useMediaQuery } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import Hero from "../components/core/hero"
import Layout from "../components/core/layout"
import Pathfinder from "../components/core/pathfinder"
import ProjectPartner from "../components/core/projectPartner"
import Skills from "../components/core/skills"

export default function Home() {
  return (
    <Layout>
      <Flex flexDir='column'>
        <Head>
          <title>Home | Rabbithole</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Hero />
        <main>
          <Skills />
          <Pathfinder />
          <ProjectPartner />
        </main>
      </Flex>
    </Layout>
  )
}
