import Button from '../Button/Button';
import { StyledMain } from './Main.styled';

const Main = () => {
  return (
    <StyledMain>
      <div>
        <p>How you could help</p>
        <h1>Donate & Help</h1>
        <p>African children for education</p>
        <Button buttonText="Learn More" />
      </div>
    </StyledMain>
  );
};

export default Main;
