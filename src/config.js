// using module.exports here so gatsby-config can read it
module.exports = {
  // TODO: Replace next line with your own public API key
  builderAPIKey: process.env.GATSBY_BUILDER_IO_API_KEY,
  path: `.env.${process.env.NODE_ENV}`,
};
