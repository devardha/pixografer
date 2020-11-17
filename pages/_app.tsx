import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { wrapper } from '../redux/store'
import GlobalStyle from '../styles/GlobalStyle'
import NextNProgress from '../components/NextNProgress'
import Cookies from 'cookies'

function MyApp({ Component, pageProps, user }) {
    const apolloClient = useApollo(pageProps.initialApolloState)
    console.log(user)

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

    if(!process.browser){
        const cookies = new Cookies(ctx.req, ctx.res);
        const token = cookies.get('_usid')
        const user = {
            token: token
        }

        const res = await fetch('http://localhost:3000/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        const data = await res.json()

        return {
            pageProps,
            user: data
        }
    }

    return {
        pageProps
    }
}

export default wrapper.withRedux(MyApp)
