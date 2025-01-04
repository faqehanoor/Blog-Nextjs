
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',  // Replace with your project ID
  dataset: 'your-dataset',       // Replace with your dataset name
  apiVersion: '2021-03-25',      // Use a valid API version
  useCdn: true                   // Use the CDN for faster queries
});

export default client;
