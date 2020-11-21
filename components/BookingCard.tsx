import React from 'react'
import Styled from '@emotion/styled'
import { HiChevronDown } from 'react-icons/hi'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const TransactionMutation = gql`
    mutation TransactionMutation(
        $userId: String!,
        $photographerId: String!,
        $userName: String!,
        $photographerName: String!,
        $serviceName: String!,
        $value: Int!,
        $date: String!,
        $phone: String!,
        $description: String!
    ){
        createTransaction(
            userId: $userId,
            photographerId: $photographerId,
            userName: $userName,
            photographerName: $photographerName,
            serviceName: $serviceName,
            value: $value,
            date: $date,
            phone: $phone,
            description: $description
        )
    }
`
    
const BookingCard = ({ serviceOpen, service, setServiceOpen, photographerData, userData, accountType }) => {
    const [createTransaction, { loading }] = useMutation(TransactionMutation);

    const handleSubmit = (e) => {
        e.preventDefault();

        const date = e.currentTarget.elements.date
        const description = e.currentTarget.elements.description
        const phone = e.currentTarget.elements.phone

        console.log({
            userdId: userData._id,
            photographerId: photographerData._id,
            userName: userData.fullname,
            photographerName: photographerData.fullname,
            serviceName: service.serviceName,
            value: service.servicePrice,
            date: date.value,
            phone: phone.value,
            description: description.value
        })

        createTransaction({
            variables: {
                userdId: userData._id,
                photographerId: photographerData._id,
                userName: userData.fullname,
                photographerName: photographerData.fullname,
                serviceName: service.serviceName,
                value: service.servicePrice,
                date: date.value,
                phone: phone.value,
                description: description.value
            }
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (
        <Wrapper>
            <div className="booking-card">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="date">Booking Date</label>
                        <input type="date" name="date" placeholder="10/01/2020"/>
                    </div>
                    <div className="field">
                        <label htmlFor="date">Service</label>
                        <button type="button" className={`options ${serviceOpen ? 'btn-active' : ''}`} onFocus={() => setServiceOpen(true)} onBlur={() => setServiceOpen(false)}>
                            {
                                service ? (
                                    <>
                                    <span>{ service ? service.serviceName : 'Loading...' } - <span className="price">Rp{ service ? service.servicePrice : '' }</span></span>
                                    <i><HiChevronDown/></i>
                                    </>
                                ) : 'No service available'
                            }
                        </button>
                        {
                            serviceOpen ? (
                                <ul>
                                    {
                                        photographerData?.services.map((service, index) => {
                                            return(
                                                <li key={index}>
                                                    <span>{ service.serviceName } - <span className="price">Rp{service.servicePrice}</span></span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            ) : ''
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="date">Description</label>
                        <textarea name="description" placeholder="Street style photography at night"/>
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" placeholder="088888888888"/>
                        <span className="field-desc">*Our photographer will text you to confirm the request</span>
                    </div>
                    <button className="primary" disabled={true}>Book Now</button>
                </form>
            </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    .booking-card{
        width:100%;
        border:1px solid #ddd;
        border-radius:10px;
        display:flex;
        flex-direction:column;

        form{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:1rem;

            .options{
                margin-top:6px;
                padding: 0 1rem;
                width: 100%;
                height: 40px;
                border: 1px solid #aaa;
                display:flex;
                align-items:center;
                justify-content:space-between;
                font-size:13px;
                cursor: pointer;
                background:#fff;
                position:relative;
                font-weight:400;
                font-family: 'Montserrat';

                &:hover{
                    background:#f9f9f9;
                }
                
                i{
                    font-size: 1.25rem;
                    color: #aaa;
                    transform: translateY(2px);
                    &:hover{
                        color:#777;
                    }
                }
            }

            .field{
                margin: .5rem 0;
                position:relative;

                .price{
                    font-weight:600;
                }
                
                ul{
                    display:flex;
                    flex-direction:column;
                    margin: 0;
                    width: 100%;
                    height: auto;
                    border: 1px solid #aaa;
                    position: absolute;
                    top: 63px;
                    z-index:6;

                    li{
                        padding: .65rem 1rem;
                        width: 100%;
                        background-color:#fefefe;
                        display: flex;
                        border-bottom: 1px solid #aaa;
                        font-size: 13px;
                        cursor:pointer;
                        
                        &:hover{
                            background:#f9f9f9;
                        }
                    }

                    li:last-child{
                        border-bottom: 0;
                    }
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

            textarea{
                margin-top:6px;
                padding: .8rem 1rem;
                width: 100%;
                height: 100px;
                border: 1px solid #aaa;
                resize:none;
            }

            .field-desc{
                margin:8px 0;
                color:#aaa;
                font-size:.7rem;
                display:flex;
            }
        }
    }
`
    
export default BookingCard