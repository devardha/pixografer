import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import ServiceModal from '../../components/dashboard/modals/ServiceModal'
import { connect } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import { deleteService } from '../../redux/actions/updateActions'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const DeleteServiceMutation = gql`
mutation DeleteServiceMutation($serviceId: String, $photographerId: String){
    deleteService(
        serviceId: $serviceId,
        photographerId: $photographerId,
    )
}
`


const Services = ({ servicesList, photographerId, deleteService }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [addService, { loading }] = useMutation(DeleteServiceMutation);

    function removeService(id){
        addService({
            variables: {
                serviceId: id,
                photographerId: photographerId
            }
        }).then(() => {
            deleteService(id)
        }).catch(err => {
            console.log(err)
        })
    }

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
                { modalOpen ? <ServiceModal setModalOpen={setModalOpen} photographerId={photographerId}/> : '' }
                <div className="dashboard-header">
                    <h2>Services</h2>
                    <button className="primary" onClick={() => setModalOpen(true)}>Add new Service</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            servicesList?.map((service: any, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{service.serviceName}</td>
                                        <td>{service.servicePrice}</td>
                                        <td><span onClick={() => removeService(service._id)}><FaTrashAlt/></span></td>
                                    </tr>
                                )
                            })
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
    overflow-y: auto;

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

            span{
                border-radius: 50%;
                display: flex;
                width: 32px;
                height: 32px;
                align-items: center;
                justify-content: center;
                cursor:pointer;

                &:hover{
                    background:#eee;
                }
            }
        }

        th:first-of-type{
            padding-left:1rem;
            border-left:1px solid #ddd;
            border-radius:4px 0 0 4px;
            min-width: 240px;
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

const mapDispatchToProps = dispatch => ({
    deleteService: (serviceId) => dispatch(deleteService(serviceId)),
});

const mapStateToProps = (state) => ({
    servicesList: state.account.userData.services,
    photographerId: state.account.userData._id
})
    
export default connect(mapStateToProps, mapDispatchToProps)(Services)