import React, { useEffect } from 'react'
import Styled from '@emotion/styled'
import DashboardNavbar from './DashboardNavbar'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { loadUser } from '../../redux/actions/authActions'
import DotLoader from '../DotLoader'
import Head from 'next/head'
import { WhoamiQuery } from '../../apollo/queries'

const DashboardLayout = ({ children, role, authenticate, loadUser, title }) => {
    const router = useRouter();
    const { data, loading } = useQuery(WhoamiQuery)

    useEffect(() => {
        if(data){
            loadUser(data.whoami);
            if(authenticate && role !== 'photographer'){
                router.push('/')
            }
        }
        if(loading === false){
            if(typeof data === 'undefined'){
                router.push('/login')
            }
        }
    }, [data, authenticate, loading])

    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="noindex"/>
            </Head>
            {
                loading === true || authenticate === false ? (
                    <div className="loading"><DotLoader/></div>
                ) : <>
                    <DashboardNavbar/>
                    {/* <div className="dashboard-alert">
                        <span>Join Pixografer premium to start growing your career as a Photographer &amp; Videographer!</span>
                    </div> */}
                    <div className="wrapper">
                        { children }
                    </div>
                </>
            }
            {
                loading === false && authenticate ? (
                    <footer>
                        <div className="copyright">
                            <span>&copy;2020 Pixografer</span>
                        </div>
                    </footer>
                ) : ''
            }
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    .loading{
        margin-top:40px;
    }

    .wrapper{
        margin-top:73px;
    }

    .dashboard-alert{
        background:#fafafa;
        color:#222;
        padding:1rem 2rem;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:73px;
        font-size:14px;
        border-bottom:1px solid #eee;

        span{
            text-align: center;
            line-height: 22px;
        }
    }

    footer{
        background-color:#f7f7f7;
        padding: 0 24px;
        height:200px;
        display:flex;
        align-items:flex-end;
        justify-content:center;
        position:relative;
        margin-top:2rem;
        border-top:1px solid #ddd;
        font-size:15px;
        margin-top:80px;

        .copyright{
            margin-bottom:2rem;
        }
    }
`

const mapDispatchToProps = dispatch => ({
    loadUser: (user) => dispatch(loadUser(user)),
});

const mapStateToProps = (state) => ({
    role: state.account.userRole,
    authenticate: state.account.authenticate
})
    
export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)