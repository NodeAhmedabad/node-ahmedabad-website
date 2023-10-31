import styled from 'styled-components';

export const CountdownBlock = styled.div`
  width: min-content;
  height: min-content;
  min-width: 120px;
  border: 1px solid #ccc;
  padding: 1rem;

  h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    margin-top: 0;
  }
`;

export const CountdownWrapper = styled.div`
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1rem;
  padding: 1rem;
  align-items: center;
  width: 100%;
`;
