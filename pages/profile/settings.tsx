import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'

const UserSettings = ({ userData }) => {
    return (
        <Layout title="Profil Settings | Pixografer.com" navbarType="search">
            <Wrapper>
                <h2>Settings</h2>
                <div className="page-body">
                    <div className="page-left">
                    <form>
                            <div className="field">
                                <label htmlFor="fullname" >Full Name</label>
                                <input type="text" name="fullname" placeholder="Full Name"/>
                            </div>
                            <div className="field">
                                <label htmlFor="username" placeholder="Username">Username</label>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email"/>
                            </div>
                            <button className="primary" type="submit" disabled={true}>Save Changes</button>
                        </form>
                    </div>
                    <div className="page-right"></div>
                </div>
            </Wrapper>
        </Layout>
    );
}
    
const Wrapper = Styled.div`
    margin-top:73px;
    padding: 40px 24px 0 24px;

    button{
        margin-top:1rem;
    }

    .page-body{
        display:flex;

        .page-left{
            width:100%;

            form{
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                padding:1rem 0;

                textarea{
                    margin-top:6px;
                    padding: .8rem 1rem;
                    width: 100%;
                    height: 100px;
                    border: 1px solid #aaa;
                    resize:none;
                }

                .field{
                    margin: .5rem 0;
                }

                .field-col{
                    display:flex;
                    justify-content:space-between;

                    .field{
                        width:49%;
                    }
                }

                label{
                    font-size: .8rem;
                    font-weight:bold;
                    color:#222;
                }
                input{
                    margin-top:6px;
                    padding: 0 1rem;
                    width: 100%;
                    height: 40px;
                    border: 1px solid #aaa;
                }
            }
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;

        .page-body{
            .page-left{
                width:60%;

                form{
                    width:90%;
                }
            }
        }
    }
`
    
const mapStateToProps = (state) => ({
    userData: state.account.userData
})

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)