import styled from '@emotion/styled'
import Link from 'next/link'
import { CgSearch } from 'react-icons/cg'

function NavbarSimple(){
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
                <div className="nav-search">
                    <input type="text" placeholder="Where are you going?"/>
                    <i><CgSearch/></i>
                </div>
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
    padding:0 2rem 0 2rem;
    align-items:center;
    background:transparent;
    justify-content:space-between;
    position: absolute;
    top: 0;
    width: 100%;
    height:73px;
    box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
    justify-content: center;

    .nav-search{
        display:flex;
        align-items:center;
        position:relative;
        font-size:14px;
        border-radius:5rem;

        input{
            width:100%;
            height: 40px;
            min-width:300px;
            background:#fff;
            border-radius:5rem;
            padding:5px 1rem;
            border:1px solid #ddd;
        }

        i{
            position: absolute;
            right:6px;
            padding:8px 9px 8px 7px;
            background:#0552ff;
            color:#fff;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }

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

        ul{
            padding: 0;
            display:flex;
            align-items:center;
            list-style:none;
            margin-right:2rem;

            li{
                padding: .5rem 1.5rem;
                color:#222;
                cursor: pointer;
                display:flex;
                align-items:center;
                font-size: 14px;

                &:hover{
                    color: #000;
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

    .nav-left,
    .nav-right{
        display:none;
    }

    @media(min-width:768px){
        padding:0 5rem 0 5rem;

        .nav-left,
        .nav-right,
        .nav-center{
            display:flex;
        }

        .nav-right{
            display:flex;
        }
    }

    @media(min-width:1440px){
        padding:0rem 7rem 0 7rem;
    }
`

export default NavbarSimple