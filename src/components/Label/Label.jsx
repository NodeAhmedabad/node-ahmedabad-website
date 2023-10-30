import React from "react"
import { LabelBar, LabelText, Wrapper } from "./Label.styled"

const Label = ({ text = "" }) => {
  return (
    <Wrapper>
      <LabelBar />
      <LabelText>{text}</LabelText>
    </Wrapper>
  )
}

export default Label
