import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as FaIcon from "react-icons/fa";

import * as GiIcon from "react-icons/gi";
import Banner from "../../components/landing/Banner";
import ListItem from "../../components/listItem/ListItem";
import Slider from "../../components/slider/Slider";

const Category = [
  {
    id: "1",
    icon: <FaIcon.FaHandHoldingWater />,
    title: "Clean Water",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quas
        obcaecati sit nam, aliquam quidem recusandae sed deserunt quod quos
        modi suscipit possimus ex, assumenda iusto eligendi dolorum. Beatae,
        odit.`,
  },
  {
    id: "2",
    icon: <GiIcon.GiHotMeal />,
    title: "Healthy Food",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            obcaecati sit nam, aliquam quidem recusandae sed deserunt quod quos
            modi suscipit possimus ex, assumenda iusto eligendi dolorum. Beatae,
            odit.`,
  },
  {
    id: "3",
    icon: <FaIcon.FaGraduationCap />,
    title: "Pure Education",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quas
                obcaecati sit nam, aliquam quidem recusandae sed deserunt quod quos
                modi suscipit possimus ex, assumenda iusto eligendi dolorum. Beatae,
                odit.`,
  },
  {
    id: "4",
    icon: <FaIcon.FaHandHoldingMedical />,
    title: "Medical Facilities",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quas
                obcaecati sit nam, aliquam quidem recusandae sed deserunt quod quos
                modi suscipit possimus ex, assumenda iusto eligendi dolorum. Beatae,
                odit.`,
  },
];

const HomePage = () => {
  return (
    <div className="section-container">
     
     <Banner/>
     
      <section className="cat-section">
        <Container
          fluid
          style={{ width: "80%", margin: "0 auto" }}
          className="section-pad"
        >
          <Row>
            <div className="ct-section-title">
              <span>What we Do?</span>
              <h2>We are In A Mission To Help The Helpless</h2>
            </div>
          </Row>
          <Row>
            <Col>
              <div className="grid">
                {Category.map((x,i) => (
                  <ListItem key={i} {...x} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-section section-pad">
        <Container 
        style={{ width: "80%", margin: "0 auto" }}
        className="section-pad"
        fluid>
          <Row>
            <Col xl="8" lg="8" sm="12" xs="12">
              <div className="ab-section-title">
                <span>What we Do?</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
              <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              eius neque vitae architecto labore quas maiores necessitatibus
              aspernatur quasi vel animi quod tenetur fugit, voluptate quisquam
              corporis reprehenderit atque! Obcaecati eos voluptatum voluptate,
              sunt enim earum ratione vel assumenda deleniti a dolorum numquam,
              debitis ab possimus itaque quod magnam et!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nulla maiores officiis facere iusto, culpa commodi aut atque
              aspernatur animi adipisci explicabo necessitatibus nihil
              molestias! Autem tempore recusandae minima esse, dolore molestias
              voluptatem quod eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nulla maiores officiis facere iusto, culpa commodi aut atque
              aspernatur animi adipisci explicabo necessitatibus nihil.
            </p>
          </div>
          <div>
            <button className="btn btn-success">Donate Now</button>
          </div>
            </Col>
            <Col xl="4" md="4" lg="4" sm="12" xs="12">
            <img className="img" src="http://nasarna-react.wpocean.com/static/media/about3.9af31693.png"/>
            </Col>
          </Row>
         
        </Container>
      </section>
      <section className="cat-section">
        <Container
          fluid
          style={{ width: "80%", margin: "0 auto" }}
          className="section-pad"
        >
          <Row>
            <div className="ct-section-title">
              <span>Our Causes</span>
              <h2>Popular Casues What You Should Know</h2>
            </div>
          </Row>
          
            <Slider Category={Category}/>
           
         
        </Container>
      </section>
      {/* <Container fluid style={{width:"80%", margin:"0 auto"}} className="section-pad">
      <Row>
        <Col>
        <div className="grid">
              {Category.map((x) => (
                <ListItem {...x} />
              ))}
            </div>
        </Col>
       
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container> */}

      {/* <section className="about-section section-pad">
        <div className="about-container">
          <div className="left-side">
          <div className="ab-section-title">
            <span>What we Do?</span>
            <h2>We Are In A Mission To Help The Helpless</h2>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              eius neque vitae architecto labore quas maiores necessitatibus
              aspernatur quasi vel animi quod tenetur fugit, voluptate quisquam
              corporis reprehenderit atque! Obcaecati eos voluptatum voluptate,
              sunt enim earum ratione vel assumenda deleniti a dolorum numquam,
              debitis ab possimus itaque quod magnam et!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nulla maiores officiis facere iusto, culpa commodi aut atque
              aspernatur animi adipisci explicabo necessitatibus nihil
              molestias! Autem tempore recusandae minima esse, dolore molestias
              voluptatem quod eius.
            </p>
          </div>
          <div>
            <button className="btn">Donate Now</button>
          </div>
          </div>
          <div className="right-side">
            <img src="http://nasarna-react.wpocean.com/static/media/about3.9af31693.png"/>
          </div>
         
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
