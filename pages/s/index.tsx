import React from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import SearchResult from '../../components/SearchResult'
import Footer from '../../components/Footer'
    
const Search = () => {
    return (
        <Layout title="Search | Pixografer.com" navbarType="search">
            <Wrapper>
                <span className="loc">Semarang, Jawa Tengah, Indonesia</span>
                <h2>Photographers Near You</h2>
                <p>302 Photographers Found</p>
                <div className="filter">
                    <button>Price</button>
                    <button>Categories</button>
                    <button>Service Type</button>
                </div>
                <SearchResult/>
            </Wrapper>
            <Footer/>
        </Layout>
    );
}
    
const Wrapper = Styled.div`
    margin-top:73px;
    padding: 40px 24px 0 24px;

    .loc{
        font-size:14px;
    }
    h2{
        font-size:1.75rem;
        margin-top:8px;
    }

    p{
        font-size:14px;
        margin-bottom:18px;
    }

    .filter{
        button{
            cursor: pointer;
            text-align: center;
            border: 1px solid #B0B0B0;
            background-color: #FFFFFF;
            border-radius: 5rem;
            color: #222222;
            position: relative;
            padding: 8px 16px 8px 16px;
            font-size: 12px;
            line-height: 16px;
            font-weight:400;
            margin-right:8px;

            &:hover{
                border: 1px solid #000;
            }
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
    }
`

Search.getInitialProps = async ({ query }) => {
    console.log(query)
    return {

    }
}
export default Search