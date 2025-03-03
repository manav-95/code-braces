import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
    return (
        <>
            <div className='mb-14 lg:mb-20'>
                <Navbar />
            </div>
            <Outlet />
        </>
    )
}

export default Layout