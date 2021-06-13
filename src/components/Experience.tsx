import React, { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import Divider from '@material-ui/core/Divider';

import { useGetImages } from '../hooks';
import { breakpoints as bp } from '../styles/variables';

import TitleHeader from './TitleHeader';
import CardContainer from './CardContainer';

const Card = styled.div`
  margin-bottom: 60px;

  .card-footer {
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
    @media (max-width: ${bp.md}px) {
      text-align: center;
    }
    padding-top: 10px;
    text-transform: uppercase;
  }

  .divider {
    margin: 0;
  }

  .hoverline {
    border-bottom: 3px solid transparent;
    padding: 3px 3px 0 3px;
    transition: 0.25s all;
    -moz-transition: 0.25s all;
    -webkit-transition: 0.25s all;

    &:hover {
      border-bottom: 3px solid rgb(0, 150, 136);
    }
  }

  .text-description {
    color: rgb(102, 102, 102);
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    padding-top: 20px;
  }

  h6 {
    font-size: 1.05rem;
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
    @media (max-width: ${bp.md}px) {
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
  @media (max-width: ${bp.md}px) {
    margin-bottom: 10px;
  }
  text-align: center;
  max-height: 100px;
  height: 60px;
`;

const Experience: FC<Record<string, unknown>> = (): JSX.Element => {
  const { i11Img, juristatImg, wwtImg } = useGetImages();

  return (
    <>
      <section id="experience" className="section scrollspy">
        <TitleHeader title="Experience" />
        <CardContainer width={860}>
          <Card className="card">
            <CardContent className="card-content">
              <Row className="row">
                <ImgContainer className="col s12 m2">
                  <a
                    href="https://inspire11.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GatsbyImage
                      style={{ maxHeight: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      image={i11Img.childImageSharp.gatsbyImageData}
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
                  Full Stack Software Developer
                </div>
              </Row>
              <Divider className="divider" variant="middle" />
              <p className="subtitle">
                <em className="text-description">
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
                  Tools: React, Typescript, SASS // Node.js, Typescript, Go,
                  MySQL // AWS
                </li>
              </ul>
            </CardContent>
            <div className="card-footer">
              <span>May 2019 - Present | Chicago, IL</span>
            </div>
          </Card>
          <Card className="card">
            <CardContent className="card-content">
              <Row className="row">
                <ImgContainer className="col s12 m2">
                  <a
                    href="https://juristat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GatsbyImage
                      style={{ maxHeight: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      image={juristatImg.childImageSharp.gatsbyImageData}
                      alt="Juristat Logo"
                    />
                  </a>
                </ImgContainer>
                <div className="card-title">
                  <a
                    href="https://www.juristat.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teal-text hoverline"
                  >
                    Juristat
                  </a>
                </div>
                <div className="role brown-text">Software Engineer</div>
              </Row>
              <Divider className="divider" variant="middle" />
              <p className="subtitle">
                <em className="text-description">
                  Legal software company allowing patent prosecutors to predict
                  the behavior of their examiner, competitors, and potential
                  clients using big data analytics
                </em>
              </p>
              <h6>Core API Development</h6>
              <ul>
                <li>
                  Built and enhanced Node.js web APIs by designing and writing
                  Javascript functions and complex GraphQL schema types
                </li>
                <li>
                  Creating and maintaining data in multiple Elasticsearch
                  indexes via HTTP requests and Node.js APIs.
                </li>
                <li>
                  Leveraging Node’s AWS SDK to perform operations in S3, SQS,
                  and other services.
                </li>
                <li>
                  Writing extensive unit tests using Jest and Mocha and
                  performing QA prior to production releases
                </li>
                <li>
                  Tools: Node.js, Typescript, GraphQL // Elasticsearch, MySQL //
                  AWS
                </li>
              </ul>
            </CardContent>
            <div className="card-footer">
              <span>July 2018 - May 2019 | St. Louis, MO</span>
            </div>
          </Card>
          <Card className="card">
            <CardContent className="card-content">
              <Row className="row">
                <ImgContainer className="col s12 m2">
                  <a
                    href="https://www.wwt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GatsbyImage
                      style={{ maxHeight: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      image={wwtImg.childImageSharp.gatsbyImageData}
                      alt="WWT Logo"
                    />
                  </a>
                </ImgContainer>
                <div className="card-title">
                  <a
                    href="https://www.wwt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teal-text hoverline"
                  >
                    World Wide Technology
                  </a>
                </div>
                <div className="role brown-text">Senior Developer</div>
              </Row>
              <Divider className="divider" variant="middle" />
              <p className="subtitle">
                <em className="text-description">
                  Technology and supply chain services provider
                </em>
              </p>
              <h6>Software Engineering</h6>
              <ul>
                <li>
                  Supporting and customizing Oracle&#39;s Warehouse Management
                  system (Inventory (INV) and Shipping (WSH) modules) to fit
                  user needs and requirements
                </li>
                <li>
                  Writing custom Java code on Oracle&#39;s Mobile Web
                  Applications (MWA) framework to enhance WMS system.
                </li>
                <li>
                  Enhancing existing web applications written in AngularJS,
                  Groovy/Grails, and PL/SQL stack.
                </li>
                <li>
                  Created a customer requested file upload web app with a tech
                  stack in Vue.js, Node.js, Hapi.js, and Oracle PL/SQL
                </li>
                <li>
                  Tools: Oracle EBS // Vue.js, Node.js, Groovy/Grails // Oracle
                  PL/SQL, Linux, Java, SQL // Cloud Foundry
                </li>
              </ul>
            </CardContent>
            <div className="card-footer">
              <span>Jan 2017 - July 2018 | St. Louis, MO</span>
            </div>
          </Card>
          <Card className="card">
            <CardContent className="card-content">
              <Row className="row">
                <ImgContainer className="col s12 m2">
                  <a
                    href="https://wwt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GatsbyImage
                      style={{ maxHeight: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      image={wwtImg.childImageSharp.gatsbyImageData}
                      alt="WWT Logo"
                    />
                  </a>
                </ImgContainer>
                <div className="card-title">
                  <a
                    href="https://www.wwt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teal-text hoverline"
                  >
                    World Wide Technology
                  </a>
                </div>
                <div className="role brown-text">Developer</div>
              </Row>
              <Divider className="divider" variant="middle" />
              <p className="subtitle">
                <em className="text-description">
                  Technology and supply chain services provider
                </em>
              </p>
              <h6>Software Engineering</h6>
              <ul>
                <li>
                  2+ years of programming experience as an Oracle PL/SQL
                  Developer in Analysis, Design, and Implementation of Business
                  Applications using the Oracle Relational Database Management
                  System (RDBMS)
                </li>
                <li>
                  Involved in all phases of the SDLC (Software Development Life
                  Cycle) from analysis, design, development, testing,
                  implementation and maintenance with timely delivery against
                  deadlines
                </li>
                <li>
                  Experience with data flow diagrams, data dictionary, entity
                  relation modeling, and design techniques
                </li>
                <li>
                  Heavily involved in yearlong Oracle EBS upgrade from 11i to
                  12.2.4
                </li>
                <li>Tools: Oracle EBS // Oracle PL/SQL, Linux, Java, SQL</li>
              </ul>
            </CardContent>
            <div className="card-footer">
              <span>March 2014 - Dec 2016 | St. Louis, MO</span>
            </div>
          </Card>
        </CardContainer>
      </section>
    </>
  );
};

export default Experience;
