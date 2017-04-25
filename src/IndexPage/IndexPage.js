import React, { Component } from 'react';
import {Container, Form, Button} from "semantic-ui-react";
import axios from "axios";
import {Router, Route} from "react-router";

class IndexPage extends Component {    
   
    constructor(props) {
        super(props);
        this.state = {
            id : 0,
            username : "",
            password : "",
            role : {
                id : 0,
                name : ""
            }
        }
    }
    

    
    handleChangeUsername = (event) => {
        this.setState({username: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
     }

     blabla = () => {
        axios.post(
            "http://localhost:8080/api/utilisateur/login?username=" + 
            this.state.username + 
            "&password=" + 
            this.state.password)
            .then(function (response) {
               console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
     }

    componentDidUpdate() {
        console.log(this.state)
    }
    

    render() {
      
        return (
            <Container 
                fluid 
                textAlign="center" 
                as="main">
                    <Form>
                        <Form.Group>
                            <Form.Input placeholder='Email' name='username' value={this.state.username} onChange={this.handleChangeUsername} />
                            <Form.Input placeholder='Mot de passe' name='password' value={this.state.password} onChange={this.handleChangePassword} />                            
                        </Form.Group>
                    </Form>
                    <Button onClick={this.blabla} content='Valider' />
            </Container>
        );
    }
}

export default IndexPage;