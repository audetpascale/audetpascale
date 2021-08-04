import Layout from "../components/Layout";
import NotFound from "@audetpascale/common";
import React from "react";

const NotFoundPage = () => {
  return (
    <Layout title="Introuvable" description="Take a nap!">
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
