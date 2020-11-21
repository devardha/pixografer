import React from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import { connect } from 'react-redux'

const Dashboard = ({ clientTotal, rating }) => {
    const calculateRating = (ratings) => {
        try {
            const totalReviewers = ratings.length
            const sumRating: any = Object.values(ratings).reduce((a: number, b: number) => a + b)
            const rating = sumRating / totalReviewers;

            return rating
        } catch (error) {
            return 0
        }
    }
    return (
        <DashboardLayout title="Home | Pixografer Dashboard">
            <Wrapper>
                <section>
                    <h2>Overview</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="card-head">
                                <span className="card-title">Client</span>
                            </div>
                            <div className="card-body">
                                <span className="count">{ clientTotal?.length  }</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-head">
                                <span className="card-title">Ratings</span>
                            </div>
                            <div className="card-body">
                                <span className="count">{ calculateRating(rating) }</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-head">
                                <span className="card-title">Profile Visit</span>
                            </div>
                            <div className="card-body">
                                <span className="count">0</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-head">
                                <span className="card-title">Revenue</span>
                            </div>
                            <div className="card-body">
                                <span className="count">$0</span>
                            </div>
                        </div>
                    </div>
                </section>
            </Wrapper>
        </DashboardLayout>
    );
}
    
const Wrapper = Styled.div`
    padding: 40px 2rem 0 2rem;

    section{
        margin-bottom:40px;
    }

    .cards{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;

        .card{
            width:100%;
            height:150px;
            border:1px solid #B0B0B0;
            margin-right:.5rem;
            margin-bottom:1rem;
            border-radius:8px;
            cursor:pointer;
            display:flex;
            flex-direction:column;

            .card-head{
                margin-bottom:8px;
                padding:.75rem 2rem;
                border-radius:8px 8px 0 0;
                background:#fafafa;
                border-bottom:1px solid #eee;
            }

            .card-body{
                padding:1rem 2rem;
                
                .count{
                    font-size:2rem;
                    font-weight:bold;
                }
            }

            &:hover{
                border-color:#000;
            }
        }
    }

    @media(min-width:640px){
        .cards{
            .card{
                width:280px;
            }
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;

        table{
            th:first-of-type{
                min-width: unset;
            }
        }
    }
`

const mapStateToProps = (state) => ({
    clientTotal: state.account.userData.transaction,
    rating: state.account.userData.rating,
})
    
export default connect(mapStateToProps)(Dashboard)