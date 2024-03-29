import BlogSummary from "../components/BlogSummary";
/** @jsx jsx */
// noinspection ES6UnusedImports
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Heading,
  jsx,
  Text,
} from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";

const IndexPage = (props) => {
  let i = 0;

  return (
    <Layout>
      <Container>
        <Heading as="h1">{props.data.site.siteMetadata.title}</Heading>
        <Text>{props.data.site.siteMetadata.description}</Text>
        <Grid columns={["0fr 1fr", "1fr 2fr"]}>
          <Box>
            <svg
              viewBox="0 0 50 100"
              style={{ display: "inline-block", height: "100%", width: "50%" }}
            >
              <circle cx="50" cy="50" r="50%" sx={{ fill: "primary" }} />
              <foreignObject
                x="25%"
                y="43%"
                style={{ height: "14%", textAlign: "right", width: "70%" }}
              >
                <Text as="h2" sx={{ fontSize: "5px" }}>
                  {props.data.markdownRemark.frontmatter.heading}
                </Text>
              </foreignObject>
            </svg>
            <svg
              viewBox="0 0 50 100"
              style={{ display: "inline-block", height: "90%", width: "50%" }}
            >
              <circle cx="0" cy="50" r="50%" sx={{ fill: "primaryLight" }} />
              <foreignObject
                x="5%"
                y="44%"
                style={{ height: "30%", textAlign: "left", width: "75%" }}
              >
                <Text as="h3" sx={{ fontSize: "5px" }}>
                  {props.data.markdownRemark.frontmatter.subheading}
                </Text>
              </foreignObject>
            </svg>
          </Box>
          <Card bg="muted" px={3}>
            <Text
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            />
          </Card>
        </Grid>
        <Divider />
        <Heading as="h2">Les derniers articles</Heading>
      </Container>
      {props.data.allMarkdownRemark.edges.map(({ node: post }) => (
        <BlogSummary key={post.id} post={post} numChild={i++} />
      ))}
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query IndexQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 255)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "D MMMM YYYY", locale: "fr")
            description
            image {
              childImageSharp {
                gatsbyImageData(quality: 50, layout: FULL_WIDTH)
              }
            }
            templateKey
            title
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heading
        subheading
      }
    }
  }
`;
