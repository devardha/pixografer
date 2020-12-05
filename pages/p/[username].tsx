import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { HiCheckCircle, HiUserCircle } from 'react-icons/hi'
import { useQuery } from '@apollo/client'
import DotLoader from '../../components/DotLoader'
import { PhotographerQuery } from '../../apollo/queries'
import BookingCard from '../../components/BookingCard'
import { connect } from 'react-redux'

const PhotograperPage = ({ user, userData, accountType }) => {
    const [ photographerData, setPhotographerData]: any = useState();
    const [ serviceOpen, setServiceOpen ] = useState(false);
    const [ service, setService ]: any = useState();
    const { data, loading } = useQuery(PhotographerQuery, {
        variables: { username: user }
    })
    
    useEffect(() => {
        if(data){
            setPhotographerData(data.photographer)
        }
    }, [data])

    useEffect(() => {
        setService(photographerData?.services[0])
    }, [photographerData])

    return (
        <Layout title={`${user} | Pixografer.com`} navbarType="search">
            <Wrapper>
                {
                    loading && !data ? (
                        <DotLoader/>
                    ) : (
                        photographerData ? (
                            <>
                            <div className="page-header">
                                <div className="profile-picture">
                                    {
                                        photographerData.photo ? (
                                            <img src={photographerData.photo} alt=""/>
                                        ) : (
                                            <span><HiUserCircle/></span>
                                        )
                                    }
                                </div>
                                <div className="profile-detail">
                                    <span className="loc">{photographerData.city}</span>
                                    <h2>{photographerData.username}<span className="verified"><HiCheckCircle/></span>{ photographerData.available ? '' : <span className="bussy">Bussy</span> }</h2>
                                    <p>{photographerData.bio}</p>
                                </div>
                            </div>
                            <div className="page-subhead">
                                <div className="service-list">
                                    {
                                        photographerData.categories?.map((category, index) => {
                                            return(
                                                <button key={index}>{category}</button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="page-body">
                                <div className="body-left">
                                    {
                                        photographerData.gallery?.length > 0 ? (
                                            <>
                                            <div className="photos">
                                                {
                                                    photographerData.gallery?.map((image, index) => {
                                                        return(
                                                            <div className="photo" key={index}>
                                                                <img className="photo-grid" src={image.photo} alt={image.photoTitle}/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            { photographerData.gallery?.lenght > 3 ? <button className="dark btn-showmore">Tampilkan Lebih Banyak</button> : '' }
                                            </>
                                        ) : <p>Tidak ada gambar yang dapat ditampilkan</p>
                                    }
                                </div>
                                <div className="body-right">
                                    <BookingCard isBussy={!userData.available} setService={setService} accountType={accountType} userData={userData} serviceOpen={serviceOpen} service={service} setServiceOpen={setServiceOpen} photographerData={photographerData}/>
                                </div>
                            </div>
                            </>
                        ) : (
                            <>
                                {/* <div className="not-found">
                                    <span className="not-found-title">Fotografer Tidak Dapat Ditemukan!</span>
                                    <p>Maaf, Fotografer yang sedang kamu cari tidak dapat ditemukan. Harap pergi ke halaman utama dan coba kunjungi halaman ini lain kali.</p>
                                </div> */}
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

    .btn-active{
        background:#f9f9f9 !important;
    }

    .photos{
        line-height: 0;
        
        -webkit-column-count: 2;
        -webkit-column-gap:   8px;
        -moz-column-count:    2;
        -moz-column-gap:      8px;
        column-count:         2;
        column-gap:           8px;  

        .photo{
            width: 100%;
            height: auto;
            object-fit: cover;
            margin-bottom:8px;
            position:relative;
            border-radius:8px;

            .photo-grid{
                width:100%;
                height:100%;
                border-radius:8px;
            }
            span{
                font-size: 1.5rem;
                position: absolute;
                right: 1rem;
                top: 1rem;
                color: #ffffff;
            }
        }
    }

    .page-subhead{
        margin-top:2rem;

        button{
            padding: 8px 16px 8px 16px;
        }
    }

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

    
    .service-list{
        display:flex;
        justify-content: center;
        flex-wrap:wrap;

        button{
            cursor: pointer;
            text-align: center;
            border: 1px solid #B0B0B0;
            background-color: #FFFFFF;
            border-radius: 5rem;
            color: #222222;
            position: relative;
            padding: 8px 12px 8px 12px;
            font-size: 12px;
            line-height: 16px;
            font-weight:400;
            margin-right:8px;

            &:hover{
                border: 1px solid #000;
            }
        }
    }

    .page-body{
        display:flex;
        flex-direction:column;
        margin-top:40px;
        
        .body-left{
            width:100%;
            padding-right:1rem;

            .btn-showmore{
                width:100%;
                margin-top:1rem;
            }

            p{
                text-align: center;
            }
        }

        .body-right{
            width:100%;
            margin-top: 40px;
        }
    }
    .verified{
        color:#0552ff;
        transform: translateY(4px);
        display: inline-block;
        margin-left: 8px;
    }

    .bussy{
        font-size:.8rem;
        text-align:center;
        padding:8px 8px;
        background:#000;
        color:#fff;
        border-radius:4px;
        margin-left:.5rem;
    }

    .page-header{
        display:flex;
        align-items:center;
        flex-direction:column;

        .profile-detail{
            text-align:center;

            h2{
                margin-bottom:1rem;
                display:flex;
                align-items:center;
                flex-wrap:wrap;
                justify-content:center;
            }

            p{
                margin:0;
                font-size:14px;
                line-height:22px;
            }
        }

        .profile-picture{
            width:150px;
            height:150px;
            background:#fff;
            border-radius:50%;
            margin: 0 auto 1rem auto;
            overflow:hidden;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;

            span{
                font-size: 190px;
                display: flex;
                color: #eee;
            }
        }
    }

    .loc{
        font-size:14px;
    }
    h2{
        font-size:1.25rem;
        margin-top:8px;
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
        
        .page-header{
            flex-direction:row;

            .profile-picture{
                height:100px;
                width:100px;
                margin: 0 1rem 0 0;

                span{
                    font-size:130px;
                }
            }

            .profile-detail{
                text-align:left;

                h2{
                    justify-content:flex-start;
                }
            }
        }

        .page-subhead{
            .service-list{
                justify-content: flex-start;
            }
        }
    }

    @media(min-width:1024px){
        .not-found{
            p{
                max-width:50%;
            }
        }

        .page-body{
            flex-direction:row;

            .body-left{
                width:70%;
            }

            .body-right{
                width:30%;
                margin-top: 0;
            }
        }

        .page-header{
            h2{
                font-size:1.75rem;
            }
        }
    }
`

PhotograperPage.getInitialProps = async ({ query: { username } }) => {
    return {
        user: username
    }
}

const mapStateToProps = (state) => ({
    userData: state.account.userData,
    accountType: state.account.userRole,
})

export default connect(mapStateToProps)(PhotograperPage)