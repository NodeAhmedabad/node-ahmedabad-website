import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 1rem;
  padding: 1rem 8rem;
  align-items: center;

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

export const LogoWrapper = styled.div`
  width: 200px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`
