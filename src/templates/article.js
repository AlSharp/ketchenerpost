import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const _innerHTML = props =>
  <div className={props.className} dangerouslySetInnerHTML={{__html: props.html}} />

const InnerHTML = styled(_innerHTML)`
  & > .title-img > span {
    margin: 0;
  };
  & > .youtube-wrapper {
    position: relative;
    max-width: 560px;
    max-height: 315px;
    width: 560px;
    height: 315px;
    margin: 0 0 1.45rem 0;
  }

  & > .youtube-wrapper > iframe {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    & > .youtube-wrapper {
      width: 100%;
      height: 100%;
      padding-top: 56.25%;
    };
    & > .youtube-wrapper > iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`;


const Template = props => {
  const {
    html,
    frontmatter: {
      title,
      date,
      author,
      description
    }
  } = props.data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
      />
      <Link to="/">Go Back</Link>
      <h1>{title}</h1>
      <InnerHTML html={html} />
      <p>By {author} on {date}</p>
    </Layout>
  )
}

export const ArticleQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        author
        description
      }
    }
  }
`;

export default Template;