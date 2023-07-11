import React from 'react'
import Header from './Header'
import SidebarComponent from './SidebarComponent'
import "../Components/Styles/Layout.css";
import Content from './Content';

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <SidebarComponent/>
    </div>
  )
}

export default AppLayout
