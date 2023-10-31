import { StyledButton } from "./Button.styles"

interface ButtonProps {
  buttonText?: string
}

const Button = (props: ButtonProps) => {
  const { buttonText } = props
  return <StyledButton>{buttonText}</StyledButton>
}

export default Button
