import React from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { HiCheckCircle } from 'react-icons/hi'
    
const PhotograperPage = () => {
    return (
        <Layout title={`Yudhatama Indra Wardhana Setyabudi | Pixografer.com`} navbarType="search">
            <Wrapper>
                <div className="page-header">
                    <div className="profile-picture"></div>
                    <div className="profile-detail">
                        <span className="loc">Semarang, Jawa Tengah, Indonesia</span>
                        <h2>Yudhatama Indra Wardhana Setyabudi<span className="verified"><HiCheckCircle/></span></h2>
                    </div>
                </div>
                <div className="page-body">
                    <div className="body-left">
                        <div className="service-list">
                            <button>Photography</button>
                            <button>Videography</button>
                            <button>Photo Editing</button>
                        </div>
                    </div>
                    <div className="body-right">

                    </div>
                </div>
            </Wrapper>
            <Footer/>
        </Layout>
    );
}
    
const Wrapper = Styled.div`
    margin-top:73px;
    padding:0 5rem;
    padding-top:40px;

    .page-body{
        display:flex;
        margin-top:40px;
        
        .body-left{
            width:67%;
            padding-right:1rem;

            .service-list{
                display:flex;

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
        }

        .body-right{
            width:33%;
            border-radius:10px;
            border:1px solid #ddd;
            height:400px;
        }
    }
    .verified{
        color:#0552ff;
        transform: translateY(4px);
        display: inline-block;
        margin-left: 8px;
    }

    .page-header{
        display:flex;
        align-items:center;

        .profile-picture{
            width:100px;
            height:100px;
            background:#eee;
            border-radius:50%;
            margin-right:1rem;
        }
    }

    .loc{
        font-size:14px;
    }
    h2{
        font-size:1.75rem;
        margin-top:8px;
    }
`

PhotograperPage.getInitialProps = async ({ query: { username } }) => {
    return {
        
    }
}
    
export default PhotograperPage