import React from 'react'
import NavTabHeader from '../../Utils/NavTabHeader'
import ContentOutlet from '../Contents/ContentOutlet'
import { Outlet } from 'react-router'

function UserGroups() {
  return (
    <div className='container mt-3'>
         <NavTabHeader/>
         <Outlet/>
    </div>
  )
}

export default UserGroups