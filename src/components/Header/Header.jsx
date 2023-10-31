import Image from 'next/image';

import { StyledHeader, Wrapper, StyledLogo, StyledList } from './Header.styled';
import NodeAhmLogo from '../../assets/images/NodeAhmedabadLogo.png';
import Button from '../Button/Button';

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledLogo alt="Node ahmedabad logo" src={NodeAhmLogo} />
        <div>
          <StyledList>
            <li className="active">Home</li>
            <li>Events</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </StyledList>
          <Button buttonText="Donate Now" />
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
