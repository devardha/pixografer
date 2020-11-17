import Layout from '../components/Layout'
import styled from '@emotion/styled'
import Footer from '../components/Footer'

export default function Custom404() {
    return (
        <Layout title={`Page Not Found| Pixografer.com`} navbarType="search">
            <Wrapper>
                <div className="not-found">
                    <span className="not-found-title">Page Not Found!</span>
                    <p>Sorry, page you are looking for could not be found. Please go back to home page and try to visit this page later.</p>
                    <button className="dark">Back to Home Page</button>
                </div>
            </Wrapper>
            <Footer/>
        </Layout>
    )
}

const Wrapper = styled.div`
    margin-top:73px;
    padding:40px 24px 0 24px;

    .not-found{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        min-height:50vh;

        .not-found-title{
            font-weight:bold;
            font-size:1.5rem;
        }

        p{
            line-height:20px;
            font-size:14px;
            max-width:100%;
            text-align:center;
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
    }
`