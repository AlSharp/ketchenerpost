import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LatestArticles from '../components/latestArticles';

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LatestArticles data={props.data} />
  </Layout>
)

export const pageQuery = graphql`
  query LatestArticlesQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path,
            date
            title
            author
            short_version
          }
          id
        }
      }
    }
  }
`

export default IndexPage
