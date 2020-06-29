import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteMember } from '../../Actions/actions'

const ListMember = (props) => {

    const renderPerson =  (person, index ) => {
        return (
            <tr key={index}>
                <td>{person.name}</td>
            </tr>
        )
    }

    const handleDelete = (name) => {
        props.deleteMember(name)
    }


    return(
        <Container>
            {/* {
                props.membersList.map((member)=>{
                    return (
                        <Row>
                            <Col>
                                {
                                    member.name
                                }
                            </Col>
                            <Col>
                                Member
                            </Col>
                        </Row>
                        
                    )
                })
           } */}

            {/* <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Puesto</th>
                        <th></th>
                    </tr>
                </thead>
                <tboody>
                    {
                        props.membersList.map((member)=>{
                            return (
                                <tr>
                                    <td>{member.name}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.address}</td>
                                    <td>{member.rol}</td>

                                </tr>
                                
                            )
                        })
                    }
                </tboody>
           </Table> */}



            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Puesto</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.membersList.map((member)=>{
                            return (
                                <tr>
                                    <td>{member.name}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.address}</td>
                                    <td>{member.rol}</td>
                                    <td>
                                        <Button variant="secondary" size="sm" onClick={()=> handleDelete(member.name)}>
                                            Borrar
                                        </Button>
                                    </td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        membersList: state.adminFunctions
    }
}

export default connect(mapStateToProps, {deleteMember})(ListMember) 