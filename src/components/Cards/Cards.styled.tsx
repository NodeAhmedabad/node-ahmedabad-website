import Image from "next/image"
import styled from "styled-components"

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
  position: relative;
  width: 500px;
  height: 450px;
  margin-top: -225px;
  /* margin-bottom: 200px; */

  div:first-child {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    opacity: 0.6;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardContent = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 1.5rem 3rem 2rem 3rem;
  color: ${({ theme }) => theme.colors.thirdColor};
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    margin-top: 2rem;
  }

  a {
    margin-top: auto;
    font-weight: 600;
    text-transform: uppercase;
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.thirdColor};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.thirdColor};
  }
`
