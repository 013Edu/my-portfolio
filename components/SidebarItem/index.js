import React from 'react'
import { Container } from './style'

const SidebarItem = ({ Icon, Text, Link }) => {
  return (
    <Container>
      <Icon />
      {Text}
      {Link}
    </Container>
  )
}

export default SidebarItem