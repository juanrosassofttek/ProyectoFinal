import React from 'react'
import { Navbar} from 'react-bootstrap'

import './header.css'
class Header extends React.Component {
    render(){
        return (
            // <div>
            //     Malva great again !!
            // </div>
            <Navbar bg="dark" variant="dark" className="color-nav">
               <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.cerradasmagenta.mx/wp-content/uploads/thegem-logos/logo_e83bd354aa3f8f90597339f339ac4fcc_1x.png"
                        width="350"
                        height="80"
                        className="d-inline-block align-top"
                    />{' '}
                    
                    <p className = "paragraph-type">
                        Make Malva great again !!
                    </p>
                   
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header 
