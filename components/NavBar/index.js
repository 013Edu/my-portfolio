import { Container } from './style'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons'

export function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
  return (
  
      <Container>
      <FontAwesomeIcon icon={faBars} color="--fa-inverse" width={60} height={60} onClick={showSiderbar}  />
      {sidebar && <Sidebar active={setSidebar} />}
      <div></div>
      <div className='position'>
      <FontAwesomeIcon icon={faCode} color="--fa-inverse" width={60} height={60} />
      </div>
      <div>
        <h2>Eduardo Gonçalves</h2>
      </div>
      </Container>
    )
}
