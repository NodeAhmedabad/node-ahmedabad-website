import React from "react"
import { BottomRow, LogoWrapper, Row, Section, Wrapper } from "./Footer.styled"
import { StyledLogo } from "../Header/Header.styled"
import NodeAhmLogo from "../../assets/images/NodeAhmedabadLogo.png"
import { AiOutlineMail } from "react-icons/ai"
import { FaGlobe } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Section>
          <LogoWrapper>
            <StyledLogo alt="Node ahmedabad logo" src={NodeAhmLogo} />
          </LogoWrapper>
          <h3>Node Ahmedabad</h3>
        </Section>
        <Section>
          <h3>Contact</h3>
          <Row>
            <AiOutlineMail />
            <span>nodeahmeadbad@gmail.com</span>
          </Row>
          <Row>
            <FaGlobe />
            <a
              href="https://nodeahmedabad.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.nodeahmedabad.com
            </a>
          </Row>
        </Section>
      </Wrapper>
      <BottomRow>
        <span>© 2021 Node Ahmedabad</span>
        <a
          href="http://nodeahmeadbad.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nodeahmeadbad.com
        </a>
      </BottomRow>
    </>
  )
}

export default Footer
