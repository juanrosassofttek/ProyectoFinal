import React from 'react'
import { Container, NavLink , Row, Col} from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Nav } from 'react-bootstrap'
import MesaDirectiva from '../MesaDirectiva/mesadirectiva'
import Avisos from '../Avisos/avisos'

const Menu = () => {
    return(
        <Container>
            <BrowserRouter>
                <Row>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Link to="/">
                            <Nav.Item>
                                <Nav.Link href="/home">Mesa Directiva</Nav.Link>
                            </Nav.Item>
                        </Link>
                        <Link to="/avisos">
                            <Nav.Item>
                                <Nav.Link href="/avisos">Avisos</Nav.Link>
                            </Nav.Item>
                        </Link>
                         
                    </Nav>
                    
                </Row>
                <Row>
                    <Col>
                        <Route path="/" exact component={MesaDirectiva}></Route>
                        <Route path="/avisos" component={Avisos}></Route>
                    </Col>
                    
                </Row>
            </BrowserRouter>

        </Container>
    )
} 

export default Menu