import React, { Component } from 'react';
import {Container, Image} from "semantic-ui-react";
import image from "../../public/logo-simplon.png";
import imageTest from "../../public/Google.png";


class MyHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn : false
        }
    }

    
    
    render() {
        return (
            <Container as="header">
                { this.props.etat ? (
                    <Image src={imageTest} centered/>
                ) : (
                    <Image 
                    src={image}
                    centered                    
                />
                )
                }
                
            </Container>
        );
    }
}

export default MyHeader;