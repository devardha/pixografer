import React from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
    
const Services = () => {
    return (
        <DashboardLayout title="Services | Pixografer Dashboard">
            <Wrapper>
                <div className="dashboard-header">
                    <h2>Services</h2>
                    <button className="primary">Add new Service</button>
                </div>
            </Wrapper>
        </DashboardLayout>
    );
}
    
const Wrapper = Styled.div`
    padding: 40px 2rem 0 2rem;
    min-height: 50vh;

    .dashboard-header{
        display:flex;
        justify-content:space-between;
        align-items:center;

        button{
            font-size:14px;
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
    }
`
    
export default Services