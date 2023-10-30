import { StyledIcons } from './Icons.styled'
import { FaHeartPulse, FaEarthAmericas } from 'react-icons/fa6'
import { FaUserPlus } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'

const Icons = () => {
  return (
    <StyledIcons>
      <div>
        <FaHeartPulse size={45} color='#3b444b' />
        <h3>16845</h3>
        <p>Causes</p>
      </div>
      <div>
        <FaEarthAmericas size={45} color='#3b444b' />
        <h3>1549</h3>
        <p>Places</p>
      </div>
      <div>
        <FaUserPlus size={45} color='#3b444b' />
        <h3>5139</h3>
        <p>Volunteers</p>
      </div>
      <div>
        <HiUserGroup size={45} color='#3b444b' />
        <h3>235845</h3>
        <p>Saved</p>
      </div>
    </StyledIcons>
  )
}

export default Icons
