import React from "react"
import { LogoWrapper, Section, Wrapper } from "./Footer.styled"
import { StyledLogo } from "../Header/Header.styled"
import NodeAhmLogo from "../../assets/images/NodeAhmedabadLogo.png"

const Footer = () => {
  return (
    <Wrapper>
      <Section>
        <LogoWrapper>
          <StyledLogo alt="Node ahmedabad logo" src={NodeAhmLogo} />
        </LogoWrapper>
      </Section>
      <Section>
        <h3>Tags</h3>
      </Section>
    </Wrapper>
  )
}

export default Footer
