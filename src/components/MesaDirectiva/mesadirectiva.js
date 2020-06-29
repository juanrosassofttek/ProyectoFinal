import React from 'react'
import { Container } from 'react-bootstrap'

import AddMember from '../AddMember/addmember'
import ListMember from '../ListMember/listmember'
const MesaDirectiva = () => {
    return(
        <Container>
           <AddMember />
           <br />
           <ListMember />
           <br />
           
        </Container>
    )
}

export default MesaDirectiva