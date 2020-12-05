import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { HiUserCircle } from 'react-icons/hi'
import { connect } from 'react-redux'

const Profile = ({ userData }) => {
    return (
        <Layout title="Profil | Pixografer.com" navbarType="search">
            <Wrapper>
                <div className="page-header">
                    <div className="profile-picture">
                        {
                            userData.photo ? (
                                <img src={userData.photo} alt={userData.fullname}/>
                            ) : (
                                <span><HiUserCircle/></span>
                            )
                        }
                    </div>
                    <div className="profile-detail">
                        <span className="loc">{userData.fullname}</span>
                        <h2>{userData.username}</h2>
                        <p>{userData.email}</p>
                    </div>
                </div>
                <div className="page-body">
                    <div className="body-left">
                        <h2>Transactions</h2>
                        <ul className="transactions">
                            {
                                userData.transaction?.map(item => {
                                    return(
                                        <li>
                                            <div className="card-head">
                                                <span>{item.serviceName}</span>
                                                <span className="photographer-name">by {item.photographerName}</span>
                                            </div>
                                            <span className="status">
                                                <div className="status-name">Success</div>
                                                <div className="status-dot"></div>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
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
    padding: 40px 24px 0 24px;

    .loader{
        margin-top:40px;
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

    .page-body{
        display:flex;
        flex-direction:column;
        margin-top:40px;
    
        .body-left{
            width:100%;
            padding-right:1rem;

            p{
                text-align: center;
            }

            .transactions{
                li{
                    width:100%;
                    border:1px solid #ddd;
                    border-radius:4px;
                    padding:1rem;
                    display:flex;
                    justify-content:space-between;
                    font-size:.9rem;

                    .card-head{
                        display:flex;

                        .photographer-name{
                            color:#888;
                        }

                        span{
                            margin-right:8px;
                        }
                    }

                    .status{
                        display:flex;
                        align-items:center;

                        .status-name{
                            color:#3de496;
                            font-weight:bold;
                            margin-right:8px;
                        }
                    }
                }
            }
        }

        .body-right{
            width:100%;
            margin-top: 40px;
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

Profile.getInitialProps = async ({ query }) => {
    return {

    }
}

const mapStateToProps = (state) => ({
    userData: state.account.userData,
    accountType: state.account.userRole,
})

export default connect(mapStateToProps)(Profile)