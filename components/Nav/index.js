import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

export default function Nav() {
  return (
    <Wrapper>
      <div>Kaia Zimmerman | Illustrator </div>
      <Links>
        <a>About</a>
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
  background-color: hsla(360, 100%, 100%, 1);
  color: black;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 18px 28px;
  padding-top: 14px; // Visual Centering
`

const Links = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  & > div {
    margin-left: 28px;
  }
  & a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  & a:hover{
    color: hsl(326, 57%, 48%);
  }
`

const IconWrapper = styled.div`
  color: inherit;
  margin: auto;
  width: 16px;
  height: 16px;
`
