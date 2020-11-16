import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { HiCheckCircle } from 'react-icons/hi'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import DotLoader from '../../components/DotLoader'

const PhotographerQuery = gql`
    query PhotographerQuery($username: String!) {
        photographer(username: $username){
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
            services{
                serviceName,
                servicePrice
            }
        }
    }
`

const PhotograperPage = ({ username }) => {
    const [photographerData, setPhotographerData]: any = useState()
    const { data, loading } = useQuery(PhotographerQuery, {
        variables: { username }
    })
    
    useEffect(() => {
        if(data){
            setPhotographerData(data.photographer)
        }
    }, [data])

    return (
        <Layout title={`Yudhatama Indra Wardhana Setyabudi | Pixografer.com`} navbarType="search">
            <Wrapper>
                {
                    loading ? (
                        <DotLoader/>
                    ) : (
                        data && photographerData? (
                            <>
                            <div className="page-header">
                                <div className="profile-picture"></div>
                                <div className="profile-detail">
                                    <span className="loc">{photographerData.city}</span>
                                    <h2>{photographerData.fullname}<span className="verified"><HiCheckCircle/></span></h2>
                                </div>
                            </div>
                            <div className="page-body">
                                <div className="body-left">
                                    <div className="service-list">
                                        <button>Photography</button>
                                        <button>Photo Editing</button>
                                        <button>Videography</button>
                                    </div>
                                </div>
                                <div className="body-right">
    
                                </div>
                            </div>
                            </>
                        ) : (
                            <>
                                <div className="not-found">
                                    <span className="not-found-title">Photographer Not Found!</span>
                                    <p>Sorry, photographer you are looking for could not be found. Please go back to home page and try to visit this page later.</p>
                                </div>
                            </>
                        )
                    )
                }
            </Wrapper>
            <Footer/>
        </Layout>
    );
}
    
const Wrapper = Styled.div`
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

    .page-body{
        display:flex;
        flex-direction:column;
        margin-top:40px;
        
        .body-left{
            width:100%;
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
            width:100%;
            border-radius:10px;
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

        .profile-detail{
            max-width:69%;
        }

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
        font-size:1.25rem;
        margin-top:8px;
        max-width: 69%;
    }

    @media(min-width:1024px){
        padding:40px 5rem 0 5rem;

        .not-found{
            p{
                max-width:50%;
            }
        }

        .page-body{
            flex-direction:row;
        }

        .body-left{
            width:67%;
        }

        .body-right{
            width:33%;
        }

        .page-header{
            .profile-detail{
                max-width: unset;
            }

            h2{
                font-size:1.75rem;
                max-width: unset;
            }
        }
    }
`

PhotograperPage.getInitialProps = async ({ query: { username } }) => {
    return {
        username: username
    }
}
    
export default PhotograperPage