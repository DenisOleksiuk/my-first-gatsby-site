import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import image from '../images/layer.png';

const Wrapper = styled.div`
  padding-top: 217px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  width: 855px;
  margin: auto;
  margin-top: 38px;
  font-family: 'PT Serif';
  font-size: 48px;
  line-height: 60px;
  font-weight: 400;
  color: #ffffff;
`;

const ArrowBlock = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  cursor: pointer;
`;

const Background = styled.main`
  height: 816px;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button = styled.button`
  width: 89px;
  height: 40px;
  background-color: #1a54e7;
  font-family: 'PT Sans';
  font-size: 18px;
  line-height: 36px;
  font-weight: 700;
  color: #ffffff;
  border-style: none;
  cursor: pointer;
`;

const DateAndAuthor = styled.div`
  align-items: center;
  display: flex;
`;

const Date = styled.div`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 36px;
  font-weight: 400;
  color: #b0b0b0;
`;

const Author = styled.a`
  text-decoration: underline;
  color: #1a54e7;
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  margin: auto;
  margin-top: 240px;
`;
const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <Background>
        <Wrapper>
          <Inner>
            <ArrowBlock>
              <StaticImage src="../images/left_arrow.png" alt="arrow" />
            </ArrowBlock>
            <div>
              <AvatarWrapper>
                <StaticImage alt="photo" src="../images/photo.png" />
              </AvatarWrapper>
              <Title>
                Maecenas quis lobortis nunc. Nullam sit vel odio congue vulputate a ut
                nisi.
              </Title>
            </div>
            <ArrowBlock>
              <StaticImage src="../images/right_arrow.png" alt="arrow" />
            </ArrowBlock>
          </Inner>
          <FooterWrapper>
            <Button>People</Button>
            <DateAndAuthor>
              <Date>14 september 2016 | </Date>
              <span> | </span>
              <Author href="#"> John Doe</Author>
            </DateAndAuthor>
          </FooterWrapper>
        </Wrapper>
      </Background>
    </Layout>
  );
};

export default IndexPage;
