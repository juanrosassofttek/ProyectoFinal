import React from 'react'
//import { MDBContainer } from 'mdreact'
import './footer.css'

class Footer extends React.Component {


    render () {
        return (
            <footer className='footer mt-auto py-3 text-white'>
                <div className='container'>Asociacion de vecinos Malva A.C</div>
                <div className='container emailfooter'>magenta.malva@gmail.com</div>
                <div className='container emailfooter'>&copy; 2020</div>
                {/* <a className='container' href="#"><img src="./facebook-logo.jpg" ></img></a> */}
            </footer>
        )
    }
}

export default Footer