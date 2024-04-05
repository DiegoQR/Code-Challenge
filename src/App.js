import Dashboard from './Views/Dashboard/Dashboard';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({uri: process.env.REACT_APP_API_URL})
])

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_API_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Dashboard />
      </ApolloProvider>
    </>
  );
}

export default App;
