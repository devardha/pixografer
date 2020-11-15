import styled from "@emotion/styled"
import Head from 'next/head'
import Navbar from './Navbar'
import NavbarSimple from "./NavbarSimple"

function Layout({ children, title, navbarType }) {
    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
            </Head>
            { navbarType === 'home' ? <Navbar/> : <NavbarSimple/> }
            { children }
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default Layout