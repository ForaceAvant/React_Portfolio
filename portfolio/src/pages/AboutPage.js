import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from "../components/Content";

function AboutPage(props){

    return(
        <div>
            <Jumbo title={props.title} />

            <Content>
                lorem ipsum
            </Content>
        </div>
    );
}

export default AboutPage;