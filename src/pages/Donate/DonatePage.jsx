import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Description from "../../components/donate/Description";
import DonationAmount from "../../components/donate/DonationAmount";
import Banner from "../../components/landing/Banner";
import { useParams } from "react-router-dom";
import { customAxios } from "../../api/axios";



const DonatePage = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const { id } = useParams();

  const campaignDetails = async () => {
    setIsLoading(true);
    try {
      const response = await customAxios.get(`Campaign/${id}`);
      setData(response.data);
      console.log({ response });
    } catch (error) {}
  };

  useEffect(() => {
    campaignDetails();

    return () => {};
  }, []);

  return (
    <div className="section-container" style={{background:"#acd0ec59 !important"}}>
      <Banner />
      <Container
        className="section-pad"
        style={{ width: "60%", margin: "0 auto", border: "0px solid" }}
        fluid
      >
        {data ? (
          <Row>
            <Col md="8" lg="8" sm="12" style={{ border: "0px solid red" }}>
              <div className="img-wrapper">
                <img
                  style={{ width: "100%" }}
                
                  src={data?.mainGraphic || "http://nasarna-react.wpocean.com/static/media/event-details.5789b1ce.jpg"}
                />
              </div>

              <Description data={data} />
            </Col>
            <Col md="4" lg="4" sm="12" style={{ textAlign: "center" }}>
              <DonationAmount id={data?.id} />
            </Col>
          </Row>
        ) : (
          <h2>Please wait ...</h2>
        )}
      </Container>
     
    </div>
  );
};

export default DonatePage;
// /10B77A47-CF6C-4FF9-811E-08811D4D657C
