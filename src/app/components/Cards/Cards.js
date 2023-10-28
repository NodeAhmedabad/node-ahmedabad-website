import { StyledSection, Card, BackgroundImage } from './Cards.styled'
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'

const data = [
  {
    index: '01.',
    title: 'Give donation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: image1,
  },
  {
    index: '02.',
    title: 'Become volunteer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: image2,
  },
  {
    index: '03.',
    title: 'Give scholarship',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image: image3,
  },
]

const Cards = () => {
  return (
    <StyledSection>
      <div>
        {data.map((el, index) => (
          <Card key={index}>
            <div>
              <BackgroundImage src={el.image} />
            </div>
            <div>
              <h1>Hello</h1>
            </div>
          </Card>
        ))}
      </div>
      <div></div>
    </StyledSection>
  )
}

export default Cards
