import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import SearchResult from '../../components/SearchResult'
import Footer from '../../components/Footer'
    
const Search = ({ longitude, latitude, ipkey }) => {
    const [loc, setLoc] = useState()
    const fetchPhotographers = async () => {
        const res = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=${ipkey}&lat=${latitude}&lon=${longitude}&format=json`)
        const location = await res.json()

        setLoc(location.display_name)
    }

    useEffect(() => {
        // fetchPhotographers()
    }, [])

    return (
        <Layout title="Search | Pixografer.com" navbarType="search">
            <Wrapper>
                <span className="loc">{ loc ? loc : 'Semarang, Central Java, Indonesia' }</span>
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
    return {
        longitude: query.lon,
        latitude: query.lat,
        ipkey: process.env.LOCATIONIQ_KEY
    }
}
export default Search