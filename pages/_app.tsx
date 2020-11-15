import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { wrapper } from '../redux/store';
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <>
            <ApolloProvider client={apolloClient}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    )
}

export default wrapper.withRedux(MyApp);
