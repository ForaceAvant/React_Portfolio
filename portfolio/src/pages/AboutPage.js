import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from "../components/Content";

function AboutPage(props){

    return(
        <div>
            <Jumbo title={props.title} />

            <Content>
                <p>I was born and raised in Georgia, but moved to Arizona during 10th grade where I attended Walden Grove High School. After I graduated I went to the University of Arizona and pursued Computer Engineering. After 2 years I stopped to build up finances, but my desire to learn programming kept growing. I then attended the UA Coding Bootcamp to learn full stack development. I will graduating at the end of July and believe I have learned a great deal on both front-end and back-end development</p>

                <p>Taking the bootcamp has given me the knowledge to be able to use many different tools used by web developers, as well as giving me plenty of practice with them. I am now very confident in my ability to program web applications and will keep practicing to further my knowledge more and more everyday. Some of the skills I've learned include: </p>
                <ul>
                    <li>Javascript</li>
                    <li>HTML5</li>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>Node.js</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>AJAX</li>
                    <li>React.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Git</li>
                </ul>

                <p>My goal is to use the skills I've gained to create web applications and software so that I can continue to grow and expand my knowledge on the world of programming. I enjoy a good challenge and will always do everything I can to make sure that I'm able to complete it. </p>
            </Content>
        </div>
    );
}

export default AboutPage;