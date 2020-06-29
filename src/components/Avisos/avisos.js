import React from 'react'
import { Container, Button } from 'react-bootstrap'
import axios from 'axios'

import './avisos.css'

class Avisos extends React.Component {

    constructor() {
        super()
        this.state = {
            id: '',
            message:""
        }
    
        this.handleAvisos = this.handleAvisos.bind(this)

    }

    handleAvisos() {

        axios.get('https://my-json-server.typicode.com/juanrosassofttek/ProyectoFinal_API/db'
        ).then((response)=>{
            this.setState({message: response.data.warning.message})
        })
        .catch((error) => {
            console.log(error)
        })
        
        
    }

    render() {
        return (
            <Container>
                
                    
                    <Button variant="primary" type="submit" onClick={this.handleAvisos} className="warning-button">
                        Nuevos avisos
                    </Button>
                    
                    
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={this.state.message}
                    >
                    </textarea>
        
            </Container>
        )
    
    }
    
}

export default Avisos 