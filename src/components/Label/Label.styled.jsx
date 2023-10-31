import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1rem;
  padding: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayColor};
`;

export const LabelText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: 0 1rem;
`;

export const LabelBar = styled.div`
  width: 6px;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;
