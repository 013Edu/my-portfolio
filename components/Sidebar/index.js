import React from 'react'
import { Container, ContainerLink, Content } from './style'
import Link from 'next/link'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <Content>
       <ContainerLink>
       <FontAwesomeIcon icon={faHome} color="--fa-inverse" width={20} height={20} />
       <Link href='/' onClick={closeSidebar}> Home</Link>
       </ContainerLink>
       <ContainerLink>
       <FontAwesomeIcon icon={faUser} color="--fa-inverse" width={20} height={20} />
       <Link href='/sobre'> Sobre mim</Link>
       </ContainerLink>
       <ContainerLink>
       <FontAwesomeIcon icon={faEnvelope} color="--fa-inverse" width={20} height={20} />
       <Link href='/contato'> Contato</Link>
       </ContainerLink>
      </Content>
    </Container>
  )
}

export default Sidebar