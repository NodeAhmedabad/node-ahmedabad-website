import styled from 'styled-components';

export const StyledIcons = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 5rem;
  color: #3b444b;
  margin: 5rem 12rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin-top: 0.5rem;
    }

    p {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
`;
