import Layout from "../components/Layout";
import { GenericNotFound } from "@audetpascale/common";
import React from "react";

const NotFoundPage = () => {
  return (
    <Layout title="Introuvable" description="Take a nap!">
      <GenericNotFound />
    </Layout>
  );
};

export default NotFoundPage;
