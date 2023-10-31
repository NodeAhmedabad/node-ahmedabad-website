import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { RxDividerVertical } from 'react-icons/rx';
import { FaQuoteRight } from 'react-icons/fa';

import { StyledSection, SectionHeader, CardWrapper, Card, StyledImg } from './Contributors.styled';
import profileImg1 from '../../../assets/images/profileImg1.webp';
import profileImg2 from '../../../assets/images/profileImg2.webp';
import profileImg3 from '../../../assets/images/profileImg3.webp';

const Contributors = () => {
  return (
    <StyledSection>
      <div>
        <SectionHeader>
          <h3>Contributors</h3>
          <div>
            <HiOutlineChevronLeft size={25} /> <RxDividerVertical size={30} />
            <HiOutlineChevronRight size={25} />
          </div>
        </SectionHeader>
        <CardWrapper>
          <Card>
            <StyledImg src={profileImg1} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime tenetur
              laudantium aliquam suscipit esse error distinctio exercitationem optio illum rem, vero
              itaque quam recusandae molestiae.
            </p>
            <FaQuoteRight size={30} color="#8994" />
            <h4>Kenny</h4>
          </Card>
          <Card>
            <StyledImg src={profileImg2} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime tenetur
              laudantium aliquam suscipit esse error distinctio exercitationem optio illum rem, vero
              itaque quam recusandae molestiae.
            </p>
            <FaQuoteRight size={30} color="#8994" />
            <h4>Stefan</h4>
          </Card>
          <Card>
            <StyledImg src={profileImg3} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime tenetur
              laudantium aliquam suscipit esse error distinctio exercitationem optio illum rem, vero
              itaque quam recusandae molestiae.
            </p>
            <FaQuoteRight size={30} color="#8994" />
            <h4>Damon</h4>
          </Card>
        </CardWrapper>
      </div>
    </StyledSection>
  );
};

export default Contributors;
