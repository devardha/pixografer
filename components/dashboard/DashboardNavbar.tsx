import styled from '@emotion/styled'
import Link from 'next/link'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { BiMenu } from 'react-icons/bi'
import { logoutUser } from '../../redux/actions/authActions'
import { useState, useEffect } from 'react'
import { RiCloseLine } from 'react-icons/ri'

function DashboardNavbar({ logoutUser }){
    const router = useRouter();
    const pathname = router.pathname;
    const [navActive, setNavActive] = useState(false)

    const logout = () => {
        logoutUser()
        router.push('/')
    }

    useEffect(() => {
        if(navActive){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [navActive])

    return(
        <Wrapper>
            <div className="nav-left">
                <Link href="/">
                    <img src="/img/pixografer-logo-v1.1.png" alt="Pixografer Logo"/>
                </Link>
            </div>
            <div className="nav-center">
                
            </div>
            <div className="nav-right">
                <Link href="/dashboard"><span className={`nav-list ${pathname === '/dashboard' ? 'active' : ''}`}>Home</span></Link>
                <Link href="/dashboard/jobs"><span className={`nav-list ${pathname === '/dashboard/jobs' ? 'active' : ''}`}>Jobs</span></Link>
                <Link href="/dashboard/gallery"><span className={`nav-list ${pathname === '/dashboard/gallery' ? 'active' : ''}`}>Gallery</span></Link>
                <Link href="/dashboard/services"><span className={`nav-list ${pathname === '/dashboard/services' ? 'active' : ''}`}>Services</span></Link>
                <Link href="/dashboard/settings"><span className={`nav-list ${pathname === '/dashboard/settings' ? 'active' : ''}`}>Settings</span></Link>
                <Link href="/premium"><span className={`nav-list ${pathname === '/premium' ? 'active' : ''}`}>Premium+</span></Link>
                <button className="logout-button" onClick={() => logout()}>
                    Logout
                </button>
                <button className="menu-btn" onClick={() => setNavActive(true)}>
                    <BiMenu/>
                </button>
                <div className={`dashnav-mobile  ${navActive ? 'nav-active' : ''}`}>
                    <div className="nav-head">
                        <span onClick={() => setNavActive(false)}><RiCloseLine/></span>
                    </div>
                    <div className="nav-body">
                        <div className="dashnav-menu">
                            <Link href="/dashboard"><span className={`${pathname === '/dashboard' ? 'active' : ''}`}>Home</span></Link>
                            <Link href="/dashboard/jobs"><span className={`${pathname === '/dashboard/jobs' ? 'active' : ''}`}>Jobs</span></Link>
                            <Link href="/dashboard/gallery"><span className={`${pathname === '/dashboard/gallery' ? 'active' : ''}`}>Gallery</span></Link>
                            <Link href="/dashboard/services"><span className={`${pathname === '/dashboard/services' ? 'active' : ''}`}>Services</span></Link>
                            <Link href="/dashboard/settings"><span className={`${pathname === '/dashboard/settings' ? 'active' : ''}`}>Settings</span></Link>
                            <Link href="/premium"><span>Premium+</span></Link>
                            <button onClick={() => logout()}className="dark">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    padding:0 2rem 0 2rem;
    align-items:center;
    background:transparent;
    justify-content:space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height:73px;
    border-bottom:1px solid #eee;
    justify-content: center;
    background:#fff;
    z-index:100;

    .active{
        background:#1748ff;
        color:#fff !important;

        &:hover{
            background:#1748ff !important;
            color:#fff !important;
        }
    }

    .dashnav-mobile{
        height: 100vh;
        width: 100vw;
        background: #fff;
        border-left: 1px solid #ddd;
        display: none;
        position: absolute;
        z-index: 100;
        bottom: calc(64px - 100vh);
        right: -31px;
        transition:all ease-in .2s;
        flex-direction:column;

        .active{
            background:#fff;
            color:#000 !important;
            font-weight:bold;

            &:hover{
                background:#fff !important;
                color:#000 !important;
            }
        }

        .nav-head{
            width:100%;
            height:81px;
            display: flex;
            padding: 0 2rem;
            font-size: 1.5rem;
            align-items: center;
            justify-content:space-between;

            span{
                padding: 8px;
                background: #fafafa;
                border-radius: 50%;
                display: flex;
            }
        }

        .nav-body{
            display: flex;
            flex-direction: column;
            padding: 2rem;
            justify-content: space-between;
            height: 100%;

            .dashnav-menu{
                display: flex;
                flex-direction: column;

                button{
                    padding:.75rem 1.25rem;
                    margin-top:16px;
                }
            }

            span{
                padding: 1rem 2rem;
                border-radius:5rem;
                margin-bottom:8px;

                &:hover{
                    background:#fafafa;
                }
            }
        }
    }

    .nav-active{
        display:flex;
    }

    .nav-list, ul li{
        font-weight:500;
        padding: .5rem 1.5rem;
        color:#222;
        cursor: pointer;
        display:flex;
        align-items:center;
        font-size: 14px;
        margin-left:4px;

        &:hover{
            color: #000;
        }
    }

    .logout-button{
        padding:10px 1rem;
        background:#000;
        border-radius:5rem;
        display:flex;
        align-items:center;
        margin-left: 1rem;
        border:1px solid #ddd;
        color:#fff;
        font-size:14px;

        &:hover{
            background:#222;
        }
    }

    .nav-left,
    .nav-right{
        position: relative;
        z-index: 10;
        flex: 1 0 0%;
    } 

    .nav-center{
        flex:0 1 auto;
        position:relative;
        z-index:10;
        display:none;
    }

    .nav-left{
        display:flex;
        align-items:center;

        img{
            height: 40px;
            width: 40px;
            margin-right: 11px;
            cursor:pointer;
        }
    }

    .nav-right{
        align-items:center;
        justify-content:flex-end;
        display:flex;

        .menu-btn{
            display:flex;
            font-size: 3rem;
            padding: 4px;
            background: transparent;
            display: flex;
            margin-left:auto;
        }

        .nav-list{
            display:flex;
            align-items:center;
            color:#222;
            padding: .5rem 1rem;
            border-radius: 5rem;
            cursor:pointer;
            height: 38px;
            font-size: 14px;

            &:hover{
                background: #f9f9f9;
            }
        }
    }

    .nav-right{
        .nav-list, .logout-button{
            display:none;
        }
    }

    .nav-left{
        display:flex;
    }

    @media(min-width:768px){
        padding:0 5rem 0 5rem;

        .dashnav-mobile{
            display:none;
        }

        .nav-right{
            .nav-list, .logout-button{
                display:flex;
            }
        }
        
        .nav-right{
            .menu-btn{
                display:none;
            }
        }
    }

    @media(min-width:1440px){
        padding:0rem 7rem 0 7rem;
    }
`

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = (state) => ({
    authenticate: state.account.authenticate,
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar)