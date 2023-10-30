import styled from 'styled-components'

export const StyledButton = styled.button`
  width: auto;
  height: 40px;
  padding: 10px 20px;
  border: none;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.thirdColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  outline: none;
`
