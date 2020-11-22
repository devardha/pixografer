import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import { connect } from 'react-redux'
import { useMutation } from '@apollo/client'
import { updatePhotographer } from '../../redux/actions/updateActions'
import { UpdateMutation } from '../../apollo/queries'

const Settings = ({ userData, updatePhotographer }) => {
    const [formData, setFormData]: any = useState({
        fullname: "",
        username: "",
        email: "",
        phone: "",
        city: "",
        bio: "",
        photo: "",
    });
    const [updateProfile, { loading }] = useMutation(UpdateMutation);

    useEffect(() => {
        setFormData({
            fullname: userData.fullname,
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
            city: userData.city,
            bio: userData.bio,
            photo: userData.photo,
        })
    }, [userData])

    const handleSubmit = (e) => {
        e.preventDefault();

        updateProfile({
            variables: {
                fullname: formData.fullname,
                username: formData.username,
                email: formData.email,
                phone: formData.phone,
                city: formData.city,
                bio: formData.bio,
                photo: formData.photo,
                photographerId: userData._id
            }
        }).then(res => {
            updatePhotographer(res.data.updatePhotographer)
        }).catch(err => console.log(err))
    }

    return (
        <DashboardLayout title="Settings | Pixografer Dashboard">
            <Wrapper>
                <h2>Settings</h2>
                <div className="page-body">
                    <div className="page-left">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label htmlFor="fullname" >Full Name</label>
                                <input type="text" name="fullname" placeholder="Full Name" value={formData?.fullname || ""} onChange={(e) => setFormData({...formData, fullname: e.target.value})}/>
                            </div>
                            <div className="field">
                                <label htmlFor="bio">Bio</label>
                                <textarea name="bio" placeholder="Bio" value={formData?.bio || ""} onChange={(e) => setFormData({...formData, bio: e.target.value})}/>
                            </div>
                            <div className="field">
                                <label htmlFor="username" placeholder="Username">Username</label>
                                <input type="text" name="username" placeholder="Username" value={formData?.username || ""} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email" value={formData?.email || ""} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                            </div>
                            <div className="field">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" placeholder="Phone" value={formData?.phone || ""} onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
                            </div>
                            <div className="field">
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" placeholder="Semarang, Jawa Tengah, Indonesia" value={formData?.city || ""} onChange={(e) => setFormData({...formData, city: e.target.value})}/>
                            </div>
                            <button className="primary" type="submit" disabled={loading}>Save Changes</button>
                        </form>
                    </div>
                    <div className="page-right"></div>
                </div>
            </Wrapper>
        </DashboardLayout>
    );
}
    
const Wrapper = Styled.div`
    padding: 40px 2rem 0 2rem;
    min-height: 50vh;

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
    updatePhotographer: (data) => dispatch(updatePhotographer(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)