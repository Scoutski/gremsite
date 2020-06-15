import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://gremapi.herokuapp.com/graphql',
});

export default client;