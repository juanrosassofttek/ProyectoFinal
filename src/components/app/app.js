//React components
import React from 'react'
import {Container} from 'react-bootstrap'

//My local  components
import Header from '../Header/header'
import Menu from '../Menu/menu'
import Footer from '../Footer/footer'
const App = () => {

    return(
        <Container>
            <Header />
            <br />
            <Menu />
            <br />
            <Footer />
        </Container>
    )
}  

export default App