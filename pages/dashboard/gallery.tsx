import React from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import ImageGallery from '../../components/ImageGallery'
import { connect } from 'react-redux'
    
const Gallery = ({ gallery }) => {
    return (
        <DashboardLayout  title="Gallery | Pixografer Gallery">
            <Wrapper>
                <div className="dashboard-header">
                    <h2>Gallery</h2>
                    <button className="primary">Upload Image</button>
                </div>
                <ImageGallery images={gallery}/>
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
    
const mapStateToProps = (state) => ({
    gallery: state.account.userData.gallery,
})

export default connect(mapStateToProps)(Gallery)