import React from 'react'
import Header from './Header'
import SidebarComponent from './SidebarComponent'
import Content from './Content'
import "../Components/Styles/Layout.css";

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <SidebarComponent/>
        <Content/>
    </div>
  )
}

export default AppLayout
