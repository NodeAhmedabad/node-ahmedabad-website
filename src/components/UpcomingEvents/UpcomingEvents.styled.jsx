import styled from 'styled-components';
import upcomingEvents from '../../assets/images/upcomingEvents.jpeg';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${upcomingEvents.src});
  color: ${({ theme }) => theme.colors.thirdColor};
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 0.6;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const Timer = styled.div`
  margin: 3rem 0;
  display: flex;
  gap: 2rem;

  div p {
    font-weight: 600;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Box = styled.div`
  width: 140px;
  height: 140px;
  border: 1px solid ${({ theme }) => theme.colors.thirdColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 700;
`;

export const EventDetails = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }

  div {
    display: flex;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      text-transform: uppercase;
      font-weight: 400;
    }
  }
`;
