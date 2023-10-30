import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 1rem;
  padding: 4rem 8rem;
  align-items: top;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }
`

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  color: white;
  font-weight: 300;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LogoWrapper = styled.div`
  width: 200px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`

export const BottomRow = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryDarkColor};
  width: 100%;
  padding: 1rem 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 300;
  font-size: 0.8rem;
  column-gap: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
`
