import Image from 'next/image'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.thirdColor};
`
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`

export const StyledLogo = styled(Image)`
  width: 120px;
  height: 70px;
  object-fit: cover;
`

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 30px;

  li {
    display: flex;
    align-items: center;
    /* padding: 0 30px 0 0; */
    height: 20px;
    width: fit-content;
    font-weight: 500;
    color: #808080;
    cursor: pointer;

    &.active {
      color: ${({ theme }) => theme.colors.secondaryColor};
    }

    &:not(:last-child)::after {
      content: '';
      margin: 30px;
      width: 2px;
      height: 15px;
      background-color: #808080;
    }
  }
`
