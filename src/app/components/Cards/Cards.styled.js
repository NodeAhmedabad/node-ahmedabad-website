import Image from 'next/image'
import styled from 'styled-components'

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`

export const Card = styled.div`
  width: 400px;
  height: 400px;
  position: relative;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    opacity: 0.6;
  }
`

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: relative;
`
