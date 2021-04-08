import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Hero() {
  return (
    <Wrapper>
      <Line />
      <GridWrapper>
        <ImageWrapper>
          <Image
            src="/galaxy.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/Greyson.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/creatures.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/Roger.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/galaxy.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/Greyson.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/creatures.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/Roger.jpg"
            alt="Painting of Galaxy on guash"
            layout="fill"
          />
        </ImageWrapper>
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  height: 500px;
`;

const Line = styled.div`
  background-color: hsl(0, 0%, 0%, 1);
  height: 1px;
  width: 100%;
`;

const GridWrapper = styled.div`
  padding: 24px 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 12px;
  height: 450px;
  width: 400px;

  & * {
    object-fit: cover;
  }
`;