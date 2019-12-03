import React, { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { Divider } from '@mui/material';

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

  padding: 20px 20px 60px 20px;
`;

const Row = styled.div`
  text-align: center;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`;

const ImgContainer = styled.div`
  @media (max-width: ${bp.md}px) {
    margin-bottom: 20px;
    p[data-react='native'] {
      padding-top: 0;
    }
  }
  font-size: 16px;
  font-weight: 400;
  position: relative;
  margin-top: 30px;
  max-height: 100px;
  height: 90px;

  p {
    padding-top: 5px;
  }

  .sass {
    @media (max-width: ${bp.xl}px) {
      padding-top: 30px;
    }
  }
`;

const Skills: FC<Record<string, unknown>> = (): JSX.Element => {
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
    nodeImg,
    pythonImg,
    goImg,
    javaImg,
    mysqlImg,
    oracleImg,
    awsImg
  } = useGetImages();

  return (
    <>
      <section id="skills" className="section scrollspy">
        <TitleHeader title="Skills" />
        <CardContainer>
          <Card className="card">
            <CardContent>
              <h4 className="brown-text light">HTML</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={htmlImg.childImageSharp.gatsbyImageData}
                    alt="HTML5 Logo"
                  />
                  <p>HTML5</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={reactImg.childImageSharp.gatsbyImageData}
                    alt="React Logo"
                  />
                  <p>JSX/TSX</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <h4 className="brown-text light">CSS</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={cssImg.childImageSharp.gatsbyImageData}
                    alt="CSS3 Logo"
                  />
                  <p>CSS3</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={sassImg.childImageSharp.gatsbyImageData}
                    alt="SASS Logo"
                  />
                  <p className="sass">SASS</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={bootstrapImg.childImageSharp.gatsbyImageData}
                    alt="Bootstrap Logo"
                  />
                  <p>Bootstrap</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={materializeImg.childImageSharp.gatsbyImageData}
                    alt="Materialize Logo"
                  />
                  <p>Materialize</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={styCompImg.childImageSharp.gatsbyImageData}
                    alt="Styled Components Logo"
                  />
                  <p>Styled Components</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <h4 className="brown-text light">Javascript</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={reactImg.childImageSharp.gatsbyImageData}
                    alt="React Logo"
                  />
                  <p>React</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={reactImg.childImageSharp.gatsbyImageData}
                    alt="React Logo"
                  />
                  <p data-react="native">React Native</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={tsImg.childImageSharp.gatsbyImageData}
                    alt="Typescript Logo"
                  />
                  <p>Typescript</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={jqueryImg.childImageSharp.gatsbyImageData}
                    alt="jQuery Logo"
                  />
                  <p>jQuery</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={nodeImg.childImageSharp.gatsbyImageData}
                    alt="Node.js Logo"
                  />
                  <p>Node</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <h4 className="brown-text light">Back-End</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={pythonImg.childImageSharp.gatsbyImageData}
                    alt="Python Logo"
                  />
                  <p>Python</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={goImg.childImageSharp.gatsbyImageData}
                    alt="Golang Logo"
                  />
                  <p>Go</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={javaImg.childImageSharp.gatsbyImageData}
                    alt="Java Logo"
                  />
                  <p>Java</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={mysqlImg.childImageSharp.gatsbyImageData}
                    alt="MySQL Logo"
                  />
                  <p>MySQL</p>
                </ImgContainer>
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={oracleImg.childImageSharp.gatsbyImageData}
                    alt="Oracle Logo"
                  />
                  <p>Oracle</p>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <h4 className="brown-text light">Cloud</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <GatsbyImage
                    style={{ maxHeight: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    image={awsImg.childImageSharp.gatsbyImageData}
                    alt="AWS Logo"
                  />
                  <p>AWS</p>
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
