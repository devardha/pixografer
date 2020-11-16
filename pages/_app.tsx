import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { wrapper } from '../redux/store';
import GlobalStyle from '../styles/GlobalStyle'
import Cookies from 'cookies'
import { request, gql } from 'graphql-request'

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
    let pageProps = {}
    const store = ctx.store;
    const isClient = process.browser;

    if(!isClient){
        const cookies = new Cookies(ctx.req, ctx.res)
        const token = cookies.get('_usid')

        const query = gql`
        {
            whoami(token: "${token}"){
                __typename
                ... on User{
                    fullname,
                    username,
                    email,
                    photo,
                    social_login,
                    transaction{
                        success,
                        value,
                        photographerId,
                        userId,
                    }
                }
                ... on Photographer{
                    fullname,
                    username,
                    email,
                    gallery{
                        photo,
                        verified,
                        photoTitle,
                    }
                    verified,
                    available,
                    phone,
                    rating{
                        rating,
                        userId
                    }
                    city,
                    photo,
                    transaction{
                        userId,
                        photographerId,
                        value,
                        success
                    }
                    services{
                        serviceName,
                        servicePrice
                    }
                }
            }
        }
        `
        const user = await request(process.env.GRAPHQL_API, query)

        if(user){
            store.dispatch({type: 'AUTHENTICATE_USER', payload: user.whoami})
        }
    }

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    return {
        pageProps
    }
}

export default wrapper.withRedux(MyApp);
