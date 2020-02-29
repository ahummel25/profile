import React, { FC } from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import Divider from "@material-ui/core/Divider";

import TitleHeader from "./TitleHeader";
import CardContainer from "./CardContainer";
import { useGeti11Image } from "../hooks/images";

const Card = styled.div`
  margin-bottom: 60px;

  .card-action {
    background-color: rgba(0, 0, 0, 0.02);
    border: none;
    padding: 20px;

    span {
      color: rgb(102, 102, 102);
      font-size: 94%;
      font-weight: 400;
    }
  }
`;

const CardContent = styled.div`
  .card-title {
    @media (max-width: 767px) {
      text-align: center;
    }
    padding-top: 10px;
    text-transform: uppercase;
  }

  .divider {
    margin: 0;
  }

  .hoverline {
    padding: 3px 3px 0 3px;
    transition: 0.25s all;
    -moz-transition: 0.25s all;
    -webkit-transition: 0.25s all;

    &:hover {
      border-bottom: 3px solid rgb(0, 150, 136);
    }
  }

  .grey-text {
    color: rgb(102, 102, 102) !important;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    padding-top: 20px;
  }

  h6 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.1rem;
    margin-top: 2rem;
    text-transform: uppercase;
  }

  ul > li {
    line-height: 150%;
    font-size: 14px;
    font-weight: 400;
    margin-left: 20px;
    list-style-type: disc;
  }
`;

const Row = styled.div`
  margin-bottom: 0;
  padding-bottom: 10px;

  .role {
    @media (max-width: 767px) {
      position: relative;
      right: initial;
      top: initial;
      text-align: center;
    }

    font-size: 1.25rem;
    font-weight: 400;
    position: absolute;
    right: 38px;
    top: 35px;
  }
`;

const ImgContainer = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
  max-height: 100%;
  height: 60px;
`;

const Experience: FC<{}> = (): JSX.Element => {
  const imgData = useGeti11Image();

  return (
    <>
      <section id="experience" className="scrollspy">
        <TitleHeader title="Experience" />
        <CardContainer>
          <Card className="card">
            <CardContent className="card-content">
              <Row className="row">
                <ImgContainer className="col s12 m2">
                  <a
                    href="https://inspire11.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      style={{ maxHeight: "100%" }}
                      imgStyle={{ objectFit: "contain" }}
                      fluid={imgData.file.childImageSharp.fluid}
                      alt="Inspire11 Logo"
                    />
                  </a>
                </ImgContainer>
                <div className="card-title">
                  <a
                    href="https://inspire11.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teal-text hoverline"
                  >
                    Inspire11
                  </a>
                </div>
                <div className="role brown-text">
                  Full-Stack Software Developer
                </div>
              </Row>
              <Divider className="divider" variant="middle" />
              <p className="subtitle">
                <em className="grey-text">
                  Innovative, software consulting firm implementing cutting-edge
                  solutions combining technology, strategy, and change
                  management to meet and exceed client needs
                </em>
              </p>
              <h6>Client Product Development</h6>
              <ul>
                <li>
                  Contribute core features to a client requested video streaming
                  progressive web application (PWA)
                </li>
                <li>
                  Collaborated with agile team to build front-end of PWA using
                  React
                </li>
                <li>
                  Researched and determined best third party video streaming
                  software to fit client needs
                </li>
                <li>
                  Lead developer on building out AWS lambda functions to handle
                  streaming using AWS SDK
                </li>
                <li>
                  Tools: React, Typescript, SASS // Node.js, Typescript, MySQL
                  // AWS
                </li>
              </ul>
            </CardContent>
            <div className="card-action">
              <span>May 2019 - Present | Chicago, IL</span>
            </div>
          </Card>
        </CardContainer>
      </section>
    </>
  );
};

export default Experience;
