import { StyledButton } from './Button.styles'

const Button = ({ buttonText = '' }) => {
  return <StyledButton>{buttonText}</StyledButton>
}

export default Button
