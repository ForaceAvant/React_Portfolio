import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import RouteWeather from '../assets/images/routeWeather.png';
import GitHub from '../assets/images/github-mark.png';
import NoteIcon from '../assets/images/noteIcon.png'


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'RouteWeather',
                    subTitle: 'Predicts weather along your travel route.',
                    imgSrc: RouteWeather,
                    link: 'https://saskuatchofaz.github.io/Project-one/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'My Github',
                    subTitle: 'Check out some more of my finished works!',
                    imgSrc: GitHub,
                    link: 'https://github.com/ForaceAvant',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Express Note Taker',
                    subTitle: 'Allows the creation,deletion and viewing of notes.',
                    imgSrc: NoteIcon,
                    link: 'https://the-note-taker-express-app.herokuapp.com',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;