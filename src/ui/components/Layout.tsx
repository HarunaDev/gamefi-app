import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import type { JSX } from 'react'

const Layout = (): JSX.Element => {
  return (
    <div>
        <NavBar />

        <Outlet />
    </div>
  )
}

export default Layout