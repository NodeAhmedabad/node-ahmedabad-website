import React from "react"
import { CountdownWrapper, CountdownBlock } from "./Countdown.styled"

const Countdown = () => {
  return (
    <CountdownWrapper>
      {/* <CountdownBlock></CountdownBlock> */}
      <div style={{ visibility: "hidden" }}></div>
      <CountdownBlock>
        <h3>00</h3>
        <p>Days</p>
      </CountdownBlock>
      <CountdownBlock>
        <h3>00</h3>
        <p>Hours</p>
      </CountdownBlock>
      <CountdownBlock>
        <h3>00</h3>
        <p>Minutes</p>
      </CountdownBlock>
      <CountdownBlock>
        <h3>00</h3>
        <p>Seconds</p>
      </CountdownBlock>
    </CountdownWrapper>
  )
}

export default Countdown
