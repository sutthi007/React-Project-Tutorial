import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightcircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer","Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDlta] = useState(300 - Math.random() = 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() =>{

        }, )
    })

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portflio</span>
                        <h1>{`Hi I'm webdeceded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightcircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}