import Image from 'next/image';
import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: #f2f2f2;
  padding: 4rem 0;

  & > div {
    width: 90%;
    margin: 0 auto;
  }
`;
export const SectionHeader = styled.div`
  width: calc(100% - 16px);
  display: flex;
  justify-content: space-between;
  background-color: #ededed;
  padding: 0.5rem 1rem;
  border-left: 8px solid ${({ theme }) => theme.colors.primaryColor};
  text-transform: uppercase;

  h3 {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  div {
    display: flex;
    align-items: center;
    color: #899499;

    svg {
      cursor: pointer;
    }
  }
`;

export const CardWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  width: 100%;
  height: 450px;
  gap: 16px;
`;

export const Card = styled.div`
  width: calc((100% / 3) - 16px);
  height: 450px;
  background-color: #ededed;
  color: #899499;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;

  p {
    margin-top: 2rem;
    text-align: center;
  }

  svg {
    margin-top: 1rem;
  }

  h4 {
    color: #121212;
    margin-top: 1.5rem;
    text-transform: uppercase;
  }
`;

export const StyledImg = styled(Image)`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
`;
