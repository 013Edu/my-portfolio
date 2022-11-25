import React from 'react'
import { Container, Content } from './style'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import Link from 'next/link'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link href='/sobre'>Home</Link>
        <SidebarItem Icon={FaUserAlt} Text="Users" Link={<Link href='/sobre' />} />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
      </Content>
    </Container>
  )
}

export default Sidebar