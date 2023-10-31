import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FaLocationDot } from 'react-icons/fa6';

import { StyledSection, Overlay, Content, Timer, EventDetails, Box } from './UpcomingEvents.styled';
import Button from '../Button/Button';

const UpcomingEvents = () => {
  const [countdownTime, setCountdownTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const countdownAt = {
    day: 4,
    month: 11,
    year: 2023,
    hour: 0,
    minute: 0,
    second: 0,
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const eventTime = new Date(
        countdownAt.year,
        countdownAt.month - 1,
        countdownAt.day,
        countdownAt.hour,
        countdownAt.minute,
        countdownAt.second
      ).getTime();

      const distance = eventTime - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownTime({
        day,
        hour,
        minute,
        second,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownAt]);

  return (
    <StyledSection>
      <Overlay />
      <Content>
        <h1>Upcoming events !</h1>
        <Timer>
          <div>
            <Box>{String(countdownTime.day).padStart(2, '0')}</Box>
            <p>Days</p>
          </div>
          <div>
            <Box>{String(countdownTime.hour).padStart(2, '0')}</Box>
            <p>Hours</p>
          </div>
          <div>
            <Box>{String(countdownTime.minute).padStart(2, '0')}</Box>
            <p>Minutes</p>
          </div>
          <div>
            <Box>{String(countdownTime.second).padStart(2, '0')}</Box>
            <p>Seconds</p>
          </div>
        </Timer>
        <EventDetails>
          <h2>Discussing the importance</h2>
          <div>
            <span>
              <FaUser />
              Admin
            </span>
            <span>
              <SlCalender />
              Friday, November 4, 2023 AT 10:00
            </span>
            <span>
              <FaLocationDot />
              7Span
            </span>
          </div>
        </EventDetails>
        <Button buttonText="Learn more" />
      </Content>
    </StyledSection>
  );
};

export default UpcomingEvents;
