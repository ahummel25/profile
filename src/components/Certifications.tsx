import React, { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import Divider from '@material-ui/core/Divider';

import { useGetImages } from '../hooks';
import { breakpoints as bp } from '../styles/variables';

import CardContainer from './CardContainer';
import TitleHeader from './TitleHeader';

const Section = styled.section`
  margin-bottom: 20px;
  height: 100vh;
`;

const Card = styled.div`
  margin-bottom: 60px;
  a {
    float: left;
  }
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
`;

const ImgContainer = styled.div`
  @media (max-width: ${bp.md}px) {
    margin-bottom: 20px;
  }

  font-size: 16px;
  font-weight: 400;
  position: relative;
  text-align: center;

  a {
    color: rgb(51, 51, 51);
  }

  img {
    @media (max-width: ${bp.md}px) {
      margin-top: 10px;
    }
    margin: auto;
    margin-top: 25px;
    max-height: 90px;
  }

  p {
    @media (max-width: ${bp.md}px) {
      padding-top: 20px;
    }
  }
`;

const Certifications: FC<Record<string, unknown>> = (): JSX.Element => {
  const { awsImg } = useGetImages();
  return (
    <>
      <Section id="certifications" className="section scrollspy">
        <TitleHeader title="Certifications" />
        <CardContainer>
          <Card className="card">
            <CardContent>
              <h4 className="brown-text light">Certifications</h4>
              <Divider className="divider" variant="middle" />
              <Row className="row">
                <ImgContainer className="col s4 m2">
                  <a
                    href="https://www.credly.com/badges/9af93a40-0c61-4059-8cd2-5a4b123d6bcf/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GatsbyImage
                      style={{ maxHeight: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      image={awsImg.childImageSharp.gatsbyImageData}
                      alt="AWS Logo"
                    />
                    <p>AWS Certified Cloud Practitioner</p>
                  </a>
                </ImgContainer>
              </Row>
            </CardContent>
          </Card>
        </CardContainer>
      </Section>
    </>
  );
};

export default Certifications;
