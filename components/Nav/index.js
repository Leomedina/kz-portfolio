import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

export default function Nav() {
  return (
    <Wrapper>
      <div>Kaia Zimmerman - Illustrator</div>
      <Links>
        <div>Contact</div>
        <IconWrapper>
          <a
            href="https://www.instagram.com/kaiaswindow/"
            rel="noreferrer"
            target="_blank"
          >
            <Icon id="instagram" size={16} strokeWidth={1.5} />
          </a>
        </IconWrapper>
      </Links>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 24px 32px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  & > div {
    margin-left: 12px;
  }
`;

const IconWrapper = styled.div`
  color: inherit;
  margin: auto;
  width: 16px;
  height: 16px;

  & a {
    color: inherit;
    text-decoration: none;
  }

  &:hover{
    color: hsl(326, 57%, 48%);
  }
`;
