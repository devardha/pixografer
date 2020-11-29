import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'


const Profile = () => {
    return (
        <Layout title="Profil | Pixografer.com" navbarType="search">
            <Wrapper>
                <div className="page-header">
                    <h1>Halo, Yudhatama Indra Wardhana Setyabudi!</h1>
                </div>
            </Wrapper>
            <Footer/>
        </Layout>
    );
}
    
const Wrapper = Styled.div`
    margin-top:73px;
    padding: 40px 24px 0 24px;

    .loader{
        margin-top:40px;
    }

    h2{
        font-size:1.75rem;
        margin-top:8px;
    }

    p{
        font-size:14px;
        margin-bottom:18px;
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
    }
`

Profile.getInitialProps = async ({ query }) => {
    return {

    }
}
export default Profile