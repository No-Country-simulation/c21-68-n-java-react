import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <div className='container'>
                {/* header */}
                <Menu></Menu> 
                {/* main */}
                <main>
                    <div>{children}</div>
                </main>
                {/* footer */}
                <Footer></Footer>
                
            </div>

        </>

    )
}

export default Layout