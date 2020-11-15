import styled from '@emotion/styled'
import Link from 'next/link'

function Navbar(){
    return(
        <Wrapper>
            <div className="nav-left">
                <Link href="/">
                    <>
                        <img src="/img/pixografer-logo-v1.1.png" alt=""/>
                    </>
                </Link>
            </div>
            <div className="nav-center">
                <ul>
                    <li>Destinations</li>
                    <li>Popular</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="nav-right">
                <span className="nav-list">Become a Photographer</span>
                <button className="profile-button">
                    Login
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    padding:1rem 2rem 0 2rem;
    align-items:center;
    background:transparent;
    justify-content:space-between;
    position: absolute;
    top: 0;
    width: 100%;
    height:73px;

    .nav-list, ul li{
        font-weight:500;
    }

    .profile-button{
        padding:10px 1rem;
        background:#000;
        border-radius:5rem;
        display:flex;
        align-items:center;
        margin-left: 1rem;
        font-size:14px;
        color:#fff;

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

        ul{
            padding: 0;
            display:flex;
            align-items:center;
            list-style:none;
            margin-right:2rem;

            li{
                padding: .5rem 1.5rem;
                color:#fff;
                cursor: pointer;
                display:flex;
                align-items:center;
                font-size: 14px;

                &:hover{
                    color: #eee;
                }
            }
        }
    }

    .nav-left{
        display:flex;
        align-items:center;

        img{
            height: 40px;
            width: 40px;
            margin-right: 11px;
        }
    }

    .nav-right{
        align-items:center;
        justify-content:flex-end;

        .nav-list{
            display:flex;
            align-items:center;
            color:#fff;
            padding: .5rem 1rem;
            border-radius: 5rem;
            cursor:pointer;
            height: 38px;
            font-size: 14px;

            &:hover{
                background: #ffffff30;
            }
        }
    }

    .nav-left,
    .nav-right,
    .nav-center{
        display:none;
    }

    @media(min-width:768px){
        .nav-left,
        .nav-right,
        .nav-center{
            display:flex;
        }

        .nav-right{
            display:flex;
        }
    }

    @media(min-width:1024px){
        padding:0rem 5rem 0 5rem;
    }
`

export default Navbar