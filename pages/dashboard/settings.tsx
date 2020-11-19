import React from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
    
const Settings = () => {
    return (
        <DashboardLayout title="Settings | Pixografer Dashboard">
            <Wrapper>
                <h2>Settings</h2>
                
            </Wrapper>
        </DashboardLayout>
    );
}
    
const Wrapper = Styled.div`
    padding: 40px 2rem 0 2rem;
    min-height: 50vh;

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
    }
`
    
export default Settings