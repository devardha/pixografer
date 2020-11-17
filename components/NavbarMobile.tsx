import Styled from '@emotion/styled'
import { useEffect } from 'react';
import { BiUserCircle, BiSearch, BiHeart, BiHomeSmile } from 'react-icons/bi'
import Link from 'next/link'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

const NavbarMobile = ({ off, authenticate, userRole }) => {
    const router = useRouter()
    const path = router.pathname;

    useEffect(() => {
        if(off){
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.bottom = "18px";
                } else {
                    document.getElementById("navbar").style.bottom = "-83px";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }, [off])

    return (
        <Wrapper>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <Link href="/"><div className={`nav-icon ${path === '/' ? 'active' : ''}`}><BiHomeSmile/></div></Link>
                    <Link href="/s"><div className={`nav-icon ${path === '/s' ? 'active' : ''}`}><BiSearch/></div></Link>
                    <Link href="/favorite"><div className={`nav-icon ${path === '/favourite' ? 'active' : ''}`}><BiHeart/></div></Link>
                    {
                        authenticate ? (
                            <Link href={userRole === 'user' ? '/profile' : '/dashboard'}><div className={`nav-icon ${path === '/profile' || path === '/dashboard' ? 'active' : ''}`}><BiUserCircle/></div></Link>
                        ) : (
                            <Link href="/login"><div className={`nav-icon ${path === '/login' ? 'active' : ''}`}><BiUserCircle/></div></Link>
                        )
                    }
                </div>
            </nav>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    .active{
        color:#0552ff;
    }
    nav{
        display:flex;
        align-items: center;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
        bottom: 18px;
        height: 65px;
        left: 0px;
        overflow: hidden;
        position: fixed;
        right: 0px;
        z-index: 100;
        border-radius: 5rem;
        margin: 0 auto;
        width: 70%;
        transition: bottom 0.3s;
    }

    .nav-icon{
        font-size:1.75rem;
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 20%;
        text-align: center;
        text-decoration: none;
        border-radius:50%;
        padding: 11px;
        margin: 0 5px;

        &:hover{
            background:#eee;
        }
    }

    .nav-wrapper{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items:center;
        margin: 0px auto;
        max-width: 560px;
    }

    @media(min-width:734px){
        nav{
            display:none;
        }
    }
`

const mapStateToProps = (state) => ({
    authenticate: state.account.authenticate,
    userRole: state.account.userRole
})

export default connect(mapStateToProps)(NavbarMobile)