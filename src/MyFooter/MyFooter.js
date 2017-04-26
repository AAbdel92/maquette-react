import React, { Component } from 'react';
import {Button} from "semantic-ui-react";

class MyFooter extends Component {

    test = () => {
        this.props.etat(true)      
    }
    render() {
        return (
            <div as="footer">
                <Button onClick={this.test}>appuyer pour changer this.state.test en false</Button>
                footer
            </div>
        );
    }
}

export default MyFooter;