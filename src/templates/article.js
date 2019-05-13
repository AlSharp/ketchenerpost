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