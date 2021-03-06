import React from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import { connect } from 'react-redux'
import { format } from 'date-fns'
    
const Jobs = ({ jobs }) => {
    const dateFormatter = (date) => {
        return format(new Date(parseInt(date)), "MMMM dd, yyy")
    }

    return (
        <DashboardLayout title="Jobs | Pixografer Dashboard">
            <Wrapper>
                <h2>Jobs</h2>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Value</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs?.length > 0 ? (
                                jobs.map((job, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{job.userName}</td>
                                            <td>{job.serviceName}</td>
                                            <td>{dateFormatter(job.date)}</td>
                                            <td>{job.value}</td>
                                            <td>{job.success ? 'Success' : 'Pending'}</td>
                                        </tr>
                                    )
                                })
                            ) : ''
                        }
                    </tbody>
                </table>
            </Wrapper>
        </DashboardLayout>
    );
}
    
const Wrapper = Styled.div`
    padding: 40px 2rem 0 2rem;
    min-height: 50vh;
    overflow-x: auto;

    table{
        border-collapse: separate;
        border-spacing: 0px;
        width: 100%;
        font-size:14px;
        padding-right:2rem;

        thead{
            background:#fafafa;
        }

        th{
            text-align:left;
            font-weight:400;
            border-top:1px solid #ddd;
            border-bottom:1px solid #ddd;
            padding-top:1rem;
            padding-bottom:1rem;
            min-width: 190px;
        }
        
        td{
            text-align:left;
            font-weight:400;
            border-bottom:1px solid #ddd;
            padding-top:1rem;
            padding-bottom:1rem;
        }

        th:first-of-type{
            padding-left:1rem;
            border-left:1px solid #ddd;
            border-radius:4px 0 0 4px;
            min-width: 60px;
        }

        th:last-child{
            padding-right:1rem;
            border-right:1px solid #ddd;
            border-radius:0 4px 4px 0;
        }

        td:first-of-type{
            padding-left:1rem;
        }

        td:last-child{
            padding-right:1rem;
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
        overflow-x:unset;

        table{
            padding-right:0;

            th{
                min-width:unset;
            }
            th:first-of-type{
                min-width:unset;
            }
        }
    }
`

const mapStateToProps = (state) => ({
    jobs: state.account.userData.transaction,
})

export default connect(mapStateToProps)(Jobs)