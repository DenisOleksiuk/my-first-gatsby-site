import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Layout = ({ pageTitle, children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
};

export default Layout;
