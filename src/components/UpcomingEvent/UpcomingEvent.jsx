import React from "react"
import Countdown from "../Countdown/Countdown"
import { Banner, Row, StyledMain } from "./UpcomingEvent.styled"
import { Card, CardContent } from "../Cards/Cards.styled"
import Image from "next/image"
import bgImg from "../../assets/images/upcoming-event-bg.jpg"

const UpcomingEvent = () => {
  return (
    <StyledMain>
      <Row>
        <Card
          style={{
            width: "100%",
          }}
        >
          <div></div>
          <Image src={bgImg} />
          <CardContent
            style={{ alignItems: "center", rowGap: "3rem", marginTop: "3rem" }}
          >
            <h2>Upcoming Event!</h2>
            <Countdown
              day={4}
              month={11}
              year={2023}
              hour={11}
              minute={0}
              second={0}
            />
          </CardContent>
        </Card>
      </Row>
    </StyledMain>
  )
}

export default UpcomingEvent
