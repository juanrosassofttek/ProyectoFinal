import React from 'react'
import { Container, Form, Button, Col, Row, Accordion, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

import { addMember } from '../../Actions/actions'

const AddMember = (props) => {
    
    let nameRef = React.createRef()
    const lastNameRef = React.createRef()
    const addressRef = React.createRef()
    const rolRef = React.createRef()

    const handleMember = (e) => {
        e.preventDefault()

        const member = {
            name:nameRef.current.value,
            lastName:lastNameRef.current.value,
            address:addressRef.current.value,
            rol: rolRef.current.value
        }

        props.addMember(member)

        nameRef.current.value = ""
        lastNameRef.current.value = ""
        addressRef.current.value = ""
        rolRef.current.value = ""
    }

    return(
        <Container>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Agregar nuevo miembro
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control placeholder="Ingresar Nombre" ref={nameRef}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="lastName">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control placeholder="Ingresar Apellido" ref={lastNameRef}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="Address">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control placeholder="Ingresar direccion" ref={addressRef}/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Custom select</Form.Label>
                                <Form.Control as="select" custom ref={rolRef}>
                                    <option>Presidente</option>
                                    <option>Tesorero</option>
                                    <option>Vocal</option>
                                    <option>Comisario</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleMember}>
                                Agregar
                            </Button>
                        </Form>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            

        </Container>
    )
}

//TODO: Lo necesito? creo que no:
const mapStateToProps = (state) => {

    return {
        admin: state.adminFunctions
    }

}

//export default AddMember
export default connect(mapStateToProps, {addMember})(AddMember)