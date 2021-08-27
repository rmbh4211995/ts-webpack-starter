import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`

const ApolloWrapper = () => (
  <ApolloProvider client={client}>
    <GraphqlUserList />
  </ApolloProvider>
)

const GraphqlUserList = () => {
  const { loading, error, data } = useQuery(USERS_QUERY)

  console.log({ loading, error, data })

  if (loading) return <p>Loading users from graphql...</p>
  if (error) return <p>Error getting users from graphql :(</p>

  return (
    <div className='mt-10'>
      <p>Graphql Users</p>
      <pre>{JSON.stringify(data, null, '\t')}</pre>
    </div>
  )
}

export default ApolloWrapper
