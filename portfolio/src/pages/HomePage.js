import React from 'react';
import Jumbo from '../components/Jumbo'
import Carousel from '../components/Carousel'

function HomePage(props) {

    return (
        <>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </>
    );
}

export default HomePage;