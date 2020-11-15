import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    )
}

export default wrapper.withRedux(MyApp);
