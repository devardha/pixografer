import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { updateService } from '../../../redux/actions/updateActions';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const AddServiceMutation = gql`
mutation AddServiceMutation($serviceName: String, $photographerId: String, $servicePrice: Int){
    addService(
        serviceName: $serviceName,
        servicePrice: $servicePrice,
        photographerId: $photographerId,
    )
}
`

function ServiceModal({ setModalOpen, photographerId, updateService }: any){
    const [addService, { loading }] = useMutation(AddServiceMutation);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceName = e.currentTarget.elements.name
        const servicePrice = e.currentTarget.elements.price

        // Add new service to the database
        addService({
            variables: {
                serviceName: serviceName.value,
                servicePrice: parseInt(servicePrice.value),
                photographerId: photographerId

            }
        }).then(() => {
            updateService({
                serviceName: serviceName.value,
                servicePrice: parseInt(servicePrice.value),
                photographerId: photographerId

            })
            setModalOpen(false)
        }).catch(err => {
            console.log(err)
            setModalOpen(false)
        })
    }

    return(
    <ModalFormStyled>
        <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Service Title</label>
                        <input type="text" name="name" placeholder="1 Hour Photo Session"/>
                    </div>
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" placeholder="100000"/>
                    </div>
                    <button className="primary" type="submit" disabled={loading}>Add New Service</button>
                </form>
            </div>
        </div>
    </ModalFormStyled>
    )
}

const ModalFormStyled = styled.div`
    display: block;
    position: fixed;
    z-index: 110;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.8);

    button{
        margin-top:1rem;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        border: 1px solid #888;
        width: 35%;
        box-shadow: 0 1px 7px #00000038;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align:center;
        padding-top:2rem;
    }
    .close {
        color: #aaa;
        font-size: 27px;
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 1px;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .modal-body{
        padding-bottom:2rem;

        form{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding:1rem 2rem;

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
                display: flex;
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
`

const mapDispatchToProps = dispatch => ({
    updateService: (serviceId) => dispatch(updateService(serviceId)),
});

const mapStateToProps = (state) => ({
    photographerId: state.account.userData._id,
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceModal)