import React from 'react'
import Styled from '@emotion/styled'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'

const JoinMutation = gql`
    mutation JoinMutation($fullname: String!, $password: String!, $email: String!, $phone: String!, $city: String!, $username: String!){
        registerPhotographer(
            fullname: $fullname,
            username: $username,
            email: $email,
            password: $password,
            phone: $phone,
            city: $city
            ){
            fullname,
            username,
            email,
            gallery{
                photo,
                verified,
                photoTitle,
            }
            verified,
            available,
            phone,
            rating{
                rating,
                userId
            }
            city,
            photo,
            services{
                serviceName,
                servicePrice
            }
        }
    }
`

const Join = () => {
    const [joinUser, { loading }] = useMutation(JoinMutation);
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault();

        const fullname = e.currentTarget.elements.fullname
        const username = e.currentTarget.elements.username
        const email = e.currentTarget.elements.email
        const password = e.currentTarget.elements.password
        const phone = e.currentTarget.elements.phone
        const city = e.currentTarget.elements.city

        console.log(fullname.value, username.value, email.value, password.value, phone.value, city.value)

        joinUser({
            variables: {
                email: email.value,
                password: password.value,
                fullname: fullname.value,
                username: username.value,
                phone: phone.value,
                city: city.value
            }
        }).then(res => {
            if(res.data.registerPhotographer){
                router.push('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Layout title="Join | Pixografer.com" navbarType="login">
            <Wrapper>
                <form onSubmit={submitHandler}>
                    <h2>Join</h2>
                    <div className="field">
                        <label htmlFor="fullname" >Full Name</label>
                        <input type="text" name="fullname" placeholder="Full Name"/>
                    </div>
                    <div className="field-col">
                        <div className="field">
                            <label htmlFor="username" placeholder="Username">Username</label>
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" placeholder="Phone"/>
                    </div>
                    <div className="field">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" placeholder="Semarang, Jawa Tengah, Indonesia"/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <button className="dark" type="submit"  disabled={loading}>Sign Up</button>
                    <span className="form-subtitle">Already have an account? <Link href="/login"><a>Login</a></Link> here.</span>
                </form>
            </Wrapper>
            <Footer/>
        </Layout>
    );
}
    
const Wrapper = Styled.div`
    margin-top:73px;
    padding: 40px 24px 0 24px;
    display:flex;
    justify-content:center;

    button{
        margin-top:1rem;
    }

    .form-subtitle{
        font-size:14px;
        margin-top:1rem;
        text-align:center;
    }

    h2{
        font-size:2rem;
        text-align:center;
        margin-bottom:1rem;
    }
    form{
        width:90%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:1rem 0;

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

    @media(min-width:1024px){
        padding: 40px 5rem 0 5rem;

        form{
            width:35%;
            padding:1rem;
        }
    }

`

export default Join