import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export class Layout extends Component {
  static propTypes = {}

  render() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='p-4'>
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
  }
}

export default Layout