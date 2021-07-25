import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Container,
  IconWrapper,
  Lists,
  NavLink,
  Navigation,
  PostLink,
  TextTitle,
  Title,
  Ul,
} from './helpers';

const navigation = ['About', 'Cooperation', 'Contact'];
const posts = ['Nature', 'People', 'Trips', 'Animals', 'Fashion', 'Tech'];

const Header = () => {
  return (
    <Container>
      <Title>
        <TextTitle>Blog template</TextTitle>
      </Title>
      <IconWrapper>
        <StaticImage src="../../images/layer_2_9.png" alt="icon" />
      </IconWrapper>

      <Navigation>
        <Ul>
          {navigation.map((item, id) => {
            return (
              <Lists key={id}>
                <NavLink to="/">{item}</NavLink>
              </Lists>
            );
          })}
        </Ul>
      </Navigation>
      <Ul>
        {posts.map((post) => {
          return (
            <Lists key={post}>
              <PostLink to="/">{post}</PostLink>
            </Lists>
          );
        })}
      </Ul>
    </Container>
  );
};

export default Header;
