import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from "../components/Content";
import ListGroup from "react-bootstrap/ListGroup"

function ContactPage(props) {

    return (
        <div>
            <Jumbo title={props.title} />

            <Content>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Email:</strong> themattavant@gmail.com</ListGroup.Item>
                    <ListGroup.Item action href="https://www.linkedin.com/in/forace-avant-4805a619a/"><strong>LinkedIn:</strong> Forace Avant</ListGroup.Item>
                    <ListGroup.Item action href="https://github.com/ForaceAvant"><strong>Github:</strong> Forace Avant</ListGroup.Item>
                    <ListGroup.Item><strong>Phone:</strong> (478)-308-2506</ListGroup.Item>
                </ListGroup>
            </Content>
        </div>
    );
}

export default ContactPage;