require('dotenv').config();

const firestoreCredentials = JSON.parse(process.env.FIRESTORE_CREDENTIALS);

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'kimbundu gatsby',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: firestoreCredentials,
        types: [
          {
            type: 'Entry',
            collection: 'dictionary',
            map: (doc) => ({
              class: doc.class,
              context: doc.context,
              diacritricFree: doc.diacritricFree,
              kimbunduText: doc.kimbunduText,
              literalTranslations: doc.literalTranslations,
              portugueseText: doc.portugueseText,
              tags: doc.tags,
            }),
          },
        ],
      },
    },
  ],
};
