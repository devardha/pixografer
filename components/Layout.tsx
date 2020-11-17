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
    const { data } = useQuery(WhoamiQuery)

    useEffect(() => {
        if(data){
            loadUser(data.whoami)
        }
    }, [data])

    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
            </Head>
            { navbarType === 'home' ? <Navbar/> : <NavbarSimple/> }
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