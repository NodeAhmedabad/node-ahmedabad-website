import styled from 'styled-components'

import MainBackground from '../../assets/images/MainBackground.avif'

export const StyledMain = styled.section`
  width: 100%;
  height: calc(150vh - 80px);
  background-image: url(${MainBackground.src});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    flex-direction: column;
    align-items: center;
    display: flex;
    transform: translate(0%, 100%);

    :nth-child(1) {
      background-color: ${({ theme }) => theme.colors.thirdColor};
      text-transform: uppercase;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    h1 {
      color: ${({ theme }) => theme.colors.thirdColor};
      font-size: 4rem;
    }

    :nth-child(3) {
      color: ${({ theme }) => theme.colors.thirdColor};
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      margin-top: -1rem;
    }

    button {
      margin-top: 3rem;
    }
  }
`
