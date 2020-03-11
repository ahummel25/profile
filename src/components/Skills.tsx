import React, { FC } from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Divider from '@material-ui/core/Divider';

import { useGetImages } from '../hooks';
import { breakpoints as bp } from '../styles/variables';

import CardContainer from './CardContainer';
import TitleHeader from './TitleHeader';

const Card = styled.div`
  margin-bottom: 60px;
`;

const CardContent = styled.div`
  .divider {
    margin: 0;
  }

  h4 {
    padding-bottom: 15px;
  }

  padding: 20px 20px 60px 20px !important;
`;

const Row = styled.div`
  text-align: center;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`;

const ImgContainer = styled.div`
  @media (max-width: ${bp.md}px) {
    margin-bottom: 20px;
  }
  font-size: 16px;
  font-weight: 400;
  position: relative;
  text-align: center;
  margin-top: 30px;
  max-height: 100px;
  height: 90px;

  p {
    padding-top: 15px;
  }

  .sass {
    padding-top: 28px;
  }
`;

const Skills: FC<{}> = (): JSX.Element => {
  const {
    htmlImg,
    reactImg,
    cssImg,
    sassImg,
    bootstrapImg,
    materializeImg,
    styCompImg,
    tsImg,
    jqueryImg,
    nodeImg
  } = useGetImages();

  return (
    <>
      <section id="skills" className="section scrollspy">
        <TitleHeader title="Skills" />
        <CardContainer>
          <Card className="card">
            <CardContent className="card-content">
              <h4 className="brown-text light">HTML</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={htmlImg.childImageSharp.fluid}
                    alt="HTML5 Logo"
                  />
                  <p>HTML5</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={reactImg.childImageSharp.fluid}
                    alt="React Logo"
                  />
                  <p>JSX/TSX</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent className="card-content">
              <h4 className="brown-text light">CSS</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={cssImg.childImageSharp.fluid}
                    alt="CSS3 Logo"
                  />
                  <p>CSS3</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={sassImg.childImageSharp.fluid}
                    alt="SASS Logo"
                  />
                  <p className="sass">SASS</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={bootstrapImg.childImageSharp.fluid}
                    alt="Bootstrap Logo"
                  />
                  <p>Bootstrap</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={materializeImg.childImageSharp.fluid}
                    alt="Materialize Logo"
                  />
                  <p>Materialize</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={styCompImg.childImageSharp.fluid}
                    alt="Styled Components Logo"
                  />
                  <p>Styled Components</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent className="card-content">
              <h4 className="brown-text light">Javascript</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={reactImg.childImageSharp.fluid}
                    alt="React Logo"
                  />
                  <p>React/React Native</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={tsImg.childImageSharp.fluid}
                    alt="Typescript Logo"
                  />
                  <p>Typescript</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={jqueryImg.childImageSharp.fluid}
                    alt="jQuery Logo"
                  />
                  <p>jQuery</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <Img
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={nodeImg.childImageSharp.fluid}
                    alt="Node.js Logo"
                  />
                  <p>Node</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
        </CardContainer>
      </section>
    </>
  );
};

export default Skills;
