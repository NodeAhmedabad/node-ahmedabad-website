import React, { useEffect, useState } from "react"
import { CountdownWrapper, CountdownBlock } from "./Countdown.styled"

const Countdown = (
  countdownAt = {
    day: 0,
    month: 0,
    year: 0,
    hour: 0,
    minute: 0,
    second: 0,
  }
) => {
  const [countdownTime, setCountdownTime] = useState(countdownAt)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const eventTime = new Date(
        countdownAt.year,
        countdownAt.month - 1,
        countdownAt.day,
        countdownAt.hour,
        countdownAt.minute,
        countdownAt.second
      ).getTime()

      const distance = eventTime - now

      const day = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const second = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdownTime({
        day,
        hour,
        minute,
        second,
      })
    }, 1000)
  }, [countdownAt])

  return (
    <CountdownWrapper>
      {/* <CountdownBlock></CountdownBlock> */}
      <div style={{ visibility: "hidden" }}></div>
      <CountdownBlock>
        <h3>{String(countdownTime.day).padStart(2, "0")}</h3>
        <p>Days</p>
      </CountdownBlock>
      <CountdownBlock>
        <h3>{String(countdownTime.hour).padStart(2, "0")}</h3>
        <p>Hours</p>
      </CountdownBlock>
      <CountdownBlock>
        <h3>{String(countdownTime.minute).padStart(2, "0")}</h3>
        <p>Minutes</p>
      </CountdownBlock>
      <CountdownBlock>
        <h3>{String(countdownTime.second).padStart(2, "0")}</h3>
        <p>Seconds</p>
      </CountdownBlock>
    </CountdownWrapper>
  )
}

export default Countdown
