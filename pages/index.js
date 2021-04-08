import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <GlobalWrapper>
      <Head>
        <title>Kaia Zimmerman | Illustrator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Hero />
    </GlobalWrapper>
  );
}

const GlobalWrapper = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  background-color: white;
`;
