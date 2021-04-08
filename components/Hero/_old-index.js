import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Hero() {
  return (
    <Wrapper>
      <ImageWrapper>
      <Image
          src="/galaxy.jpg"
          alt="Painting of Galaxy on guash"
          width={300}
          height={200}
        />
      </ImageWrapper>
      <ContentWrapper>
        Working primarily in gouache and watercolor, I draw inspiration from a
        juxtaposition of patterns, textures, shadows, movements and expressions,
        seeking the exquisite within the simple, or the quiet amidst the
        cacophony.
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  isolation: isolate;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  & > * {
    z-index: 0;
    border-radius: 12px;
    opacity: 0.7;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.p`
  max-width: 500px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin-left: -20px;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 1;
`;
