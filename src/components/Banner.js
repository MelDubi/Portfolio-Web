import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/img/profile.JPEG";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = ["Bonjour, je m'appelle Melvin, ingénieur en systèmes embarqués"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [showParagraphs, setShowParagraphs] = useState([false, false, false]);
    const period = 800;
    const [isTextComplete, setIsTextComplete] = useState(false);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    useEffect(() => {
        if (isTextComplete) {
            setTimeout(() => setShowParagraphs([true, false, false]), 1000);
            setTimeout(() => setShowParagraphs([true, true, false]), 2500);
            setTimeout(() => setShowParagraphs([true, true, true]), 4000);
        }
    }, [isTextComplete]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (updatedText === fullText) {
            setIsTextComplete(true);
            setTimeout(() => {
                setLoopNum(loopNum + 1);
                setDelta(period);
            }, period);
        }
    };

    return (
        <section className="banner max-w-[90%] mx-auto" id="home">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={8} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <div className="banner-content">
                            <img
                                src={profile}
                                alt="Profil"
                                className="profile-image"
                            />
                            <div className="text-content">
                                <h1>{text}</h1>
                                <p className={showParagraphs[0] ? "show" : ""}>
                                    Attiré par l’électronique et les systèmes embarqués, j’ai toujours eu une curiosité naturelle pour la manière dont les technologies interagissent et s’intègrent dans des environnements complexes. J’apprécie particulièrement le développement de solutions embarquées, alliant programmation, intégration de capteurs et optimisation de systèmes en temps réel.
                                </p>
                                <p className={showParagraphs[1] ? "show" : ""}>
                                    Mon expérience m’a permis de travailler sur des projets variés, en développant des logiciels embarqués, en améliorant des interfaces et en testant des systèmes pour assurer leur performance et leur fiabilité. 
                                </p>
                                <p className={showParagraphs[2] ? "show" : ""}>
                                    Toujours en quête de nouveaux défis, j’aime découvrir de nouvelles approches et rester stimulé, que ce soit dans mon travail, à travers mes voyages ou dans ma pratique du sport. Ces expériences m’ont appris à m’adapter rapidement, à travailler en équipe et à relever des défis techniques avec enthousiasme.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
