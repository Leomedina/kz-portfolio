import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Nav from "../components/Nav";


export default function Home() {
  return (
    <GlobalWrapper>
      <Nav />
    </GlobalWrapper>
  );
}

const GlobalWrapper = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  background-color: white;
`;
