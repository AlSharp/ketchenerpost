import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';

const _latestArticles = props => {
  return (
    <div className={props.className}>
      {
        props.data.allMarkdownRemark.edges.map(article => {
          const {
            id, 
            frontmatter: {title, date, author, short_version, path}
          } = article.node;
          return (
            <div key={id} className="latest-article">
              <h3>{title}</h3>
              <div>
                {short_version} <Link to={path}>Read more</Link>
              </div>
              <p>By {author} on {date}</p>
            </div>
          )
        })
      }
    </div>
  )
};

const latestArticles = styled(_latestArticles)`
  & > .latest-article {

  };
  & > .latest-article > h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  };
  & > .latest-article > div {
    margin-bottom: 6px;
  };
  & > .latest-article > p {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export default latestArticles;
