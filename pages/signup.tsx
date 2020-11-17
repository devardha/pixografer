import React from 'react'
import Styled from '@emotion/styled'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'

const RegisterMutation = gql`
    mutation RegisterMutation($fullname: String!, $password: String!, $email: String!, $username: String!){
        registerUser(
            fullname: $fullname,
            email: $email,
            username: $username,
            password: $password
            ){
            fullname,
            username,
            email,
            photo,
            transaction{
                success,
                value,
                photographerId,
                userId,
            }
        }
    }
`

const Signup = () => {
    const [registerUser, { data }] = useMutation(RegisterMutation);
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault();

        const fullname = e.currentTarget.elements.fullname
        const email = e.currentTarget.elements.email
        const username = e.currentTarget.elements.username
        const password = e.currentTarget.elements.password

        registerUser({
            variables: {
                fullname: fullname.value,
                email: email.value,
                username: username.value,
                password: password.value
            }
        }).then(res => {
            if(res.data.registerUser){
                router.push('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Layout title="Signup | Pixografer.com" navbarType="login">
            <Wrapper>
                <form onSubmit={submitHandler}>
                    <h2>Signup</h2>
                    <div className="field">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" name="fullname" placeholder="John Doe"/>
                    </div>
                    <div className="field-col">
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="doejohn"/>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="doe@example.com"/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <button className="dark" type="submit">Sign Up</button>
                    <span className="form-subtitle">Already have an account <Link href="/login"><a>Login</a></Link> here.</span>
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

export default Signup