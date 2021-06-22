import { Container } from "theme-ui";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import React from "react";
import store from "../store";
import Convert from "../components/convert/Convert";
import Replace from "../components/replace/Replace";

const IndexPage = () => {
  return (
    <Provider store={store}>
      <Layout title="Utilitaire">
        <Container variant="main">
          <h1>Utilitaire</h1>
          <Convert />
          <Replace />
        </Container>
      </Layout>
    </Provider>
  );
};

export default IndexPage;
