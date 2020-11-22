import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import ServiceModal from '../../components/dashboard/modals/ServiceModal';
    
const Services = () => {
    const [ modalOpen, setModalOpen ] = useState(false);

    useEffect(() => {
        if(modalOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [modalOpen])

    return (
        <DashboardLayout title="Services | Pixografer Dashboard">
            <Wrapper>
                { modalOpen ? <ServiceModal setModalOpen={setModalOpen}/> : '' }
                <div className="dashboard-header">
                    <h2>Services</h2>
                    <button className="primary" onClick={() => setModalOpen(true)}>Add new Service</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shortfilm Editing</td>
                            <td>750000</td>
                        </tr>
                    </tbody>
                </table>
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
    
export default Services