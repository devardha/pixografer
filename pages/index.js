import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../apollo/client'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`

export default function Home() {
    const { data: { viewer }} = useQuery(ViewerQuery)
    console.log(viewer)
    return (
        <>
        {viewer.name}
        </>
    )
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()
  
    await apolloClient.query({ query: ViewerQuery,})
  
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    }
  }