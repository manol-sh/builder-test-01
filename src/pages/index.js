import React from 'react';
import { graphql } from 'gatsby';
import { builder, BuilderComponent } from '@builder.io/react';

// Initialize the Builder SDK with your organization's API Key
builder.init('d4173130c72d466386720bb5a107ae34')

const IndexPage = ({ data }) => {
  const models = data?.allBuilderModels;
  const page = models?.page;

  return <BuilderComponent model="page" content={page} />;
};

export default IndexPage;

export const query = graphql`
  query {
    allBuilderModels {
      page(target: { urlPath: "/" }) {
        content
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
