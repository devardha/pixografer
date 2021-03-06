import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { wrapper } from '../redux/store'
import GlobalStyle from '../styles/GlobalStyle'
import firebase from '../firebase'

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

MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {};
    
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    return {
        pageProps
    }
}

export default wrapper.withRedux(MyApp)
