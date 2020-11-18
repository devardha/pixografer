import { useState } from 'react'
import Styled from '@emotion/styled'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client';

const LoginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!){
        login(email: $email, password: $password){
            __typename
            ... on User{
                fullname,
                username,
                email,
                photo,
                social_login,
                transaction{
                    success,
                    value,
                    photographerId,
                    userId,
                }
            }
            ... on Photographer{
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
                transaction{
                    userId,
                    photographerId,
                    value,
                    success
                }
                services{
                    serviceName,
                    servicePrice
                }
            }
        }
    }
`
    
const Login = () => {
    const [loginUser, { loading }] = useMutation(LoginMutation);
    const [errorMsg, setErrorMsg] = useState('')
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault();
        setErrorMsg('')

        const email = e.currentTarget.elements.email
        const password = e.currentTarget.elements.password

        loginUser({
            variables: {
                email: email.value,
                password: password.value
            }
        }).then(res => {
            if(res.data.login){
                router.push('/')
            }
        }).catch(err => {
            setErrorMsg(err.graphQLErrors[0].message)
        })
    }

    return (
        <Layout title="Login | Pixografer.com" navbarType="login">
            <Wrapper>
                <form onSubmit={submitHandler}>
                    <h2>Login</h2>
                    {
                        errorMsg ? (
                            <div className="error-msg">
                                { errorMsg }
                            </div>
                        ) : ''
                    }
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <button className="dark" type="submit" disabled={loading}>Login</button>
                    <span className="form-subtitle">Don't have an account? <Link href="/signup"><a>Sign up</a></Link> here.</span>
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

    .error-msg{
        padding: .5rem .5rem;
        border: 1px solid #ffa0a0;
        font-size: .8rem;
        text-align: center;
        color: red;
        background: #ffe2e6;
    }

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

export default Login