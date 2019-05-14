import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';

const _latestArticles = props => {
  return (
    <div className={props.className}>
      {
        props.articles.map(article => {
          const {
            id, 
            frontmatter: {
              title, date, author, description, path,
              cover_image: {
                publicURL,
                childImageSharp: {sizes: {srcSet}}
              }
            }
          } = article.node;
          return (
            <div key={id} className="top-article">
              <h3>
                <Link to={path}>{title}</Link>
              </h3>
              <div>
                <div>
                  <img src={publicURL} />
                </div>
                <div>
                  <div>
                    {description}
                  </div>
                  <Link to={path}>Read more</Link>
                </div>
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
  @media (min-width: 980px) {
    & > .top-article {
      border-bottom: 1px solid #ccc;
      margin-bottom: 6px;
    };
    & > .top-article > h3 {
      font-size: 1.4rem;
      margin-bottom: 12px;
    };
    & > .top-article > h3 > a {
      color: #2f4371;
      text-decoration: none;
    };
    & > .top-article > h3 > a:hover {
      color: #546790;
    }
    & > .top-article > div {
      display: flex;
    };
    & > .top-article > div > div:first-child > img {
      max-height: 200px;
      max-width: 200px;
      width: auto;
      height: auto;
      margin: 0
    };
    & > .top-article > div > div:last-child {
      margin-left: 12px;
    };
    & > .top-article > p {
      font-size: 14px;
      margin-bottom: 6px;
      text-align: right;
    };
  };
  @media (max-width: 979px) {
    & > .top-article > h3 > a {
      color: #2f4371;
      text-decoration: none;
    };
    & > .top-article > h3 > a:hover {
      color: #546790;
    }
    & > .top-article {
      border-bottom: 1px solid #ccc;
      margin-bottom: 6px;
    };
    & > .top-article > p {
      font-size: 14px;
      margin: 6px 0;
      text-align: right;
    }
  }
  
`;

export default latestArticles;
