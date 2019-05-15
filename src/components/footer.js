import React from 'react';
import styled from 'styled-components';

const _Footer = props =>
  <div className={props.className}>
    <footer>
      www.ketchenerpost.com © {new Date().getFullYear()}, The Ketchener Post
    </footer>
  </div>

const Footer = styled(_Footer)`
  height: 60px;
  & footer {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem;
    text-align: center;
    line-height: 60px;
  }
`;

export default Footer;