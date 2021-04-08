import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <p>
        Working primarily in gouache and watercolor, I draw inspiration from a
        juxtaposition of patterns, textures, shadows, movements and expressions,
        seeking the exquisite within the simple, or the quiet amidst the
        cacophony.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  height: 500px;
  background-color: hsl(0, 0%, 0%, 1);
  color: white;
`;
