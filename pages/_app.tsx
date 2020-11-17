import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { wrapper } from '../redux/store'
import GlobalStyle from '../styles/GlobalStyle'
import NextNProgress from '../components/NextNProgress'

function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <>
            <ApolloProvider client={apolloClient}>
                <NextNProgress
                    color="#29D"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                />
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
