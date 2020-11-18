import styled from "@emotion/styled"
import Head from 'next/head'
import Navbar from './Navbar'
import NavbarSimple from "./NavbarSimple"
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { loadUser } from '../redux/actions/authActions'
import { useEffect } from "react"
import { connect } from 'react-redux'
import NavbarMobile from './NavbarMobile'

const WhoamiQuery = gql`
    query WhoamiQuery{
        whoami{
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
                categories
            }
        }
    }
`

function Layout({ children, title, navbarType, loadUser }) {
    const { data, loading } = useQuery(WhoamiQuery)

    useEffect(() => {
        if(data){
            loadUser(data.whoami)
        }
    }, [data])

    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content="Find photographer and videographer nearby." />
                <meta name="keywords" content="Pixografer, Find Photographer, Find Videographer, Photographer near me, Videographer near me, "/>
                <meta name="locale" content="en"/>
                <meta property="og:title" content="Find Photographer, Videographer, &amp; Editor Nearby - Pixografer"/>
                <meta property="og:description" content="Find photographer and videographer nearby effortlessly." key="ogdesc" />
            </Head>
            { navbarType === 'home' ? <Navbar loading={loading}/> : <NavbarSimple loading={loading}/> }
            { children }
            { navbarType === 'home' || navbarType === 'search' ? <NavbarMobile off={navbarType === 'home' || navbarType === 'search'}/> : '' }
        </Wrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (user) => dispatch(loadUser(user)),
});

const Wrapper = styled.div`

`

export default connect(null, mapDispatchToProps)(Layout)