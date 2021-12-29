/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, jsx } from "theme-ui";
import CropRotation from "../components/rotate/CropRotation";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store";
import StaticData from "../components/static-data/StaticData";

const DataPage = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <StaticData />
          <CropRotation />
        </Container>
      </Layout>
    </Provider>
  );
};

export default DataPage;

DataPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query PlanPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
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
