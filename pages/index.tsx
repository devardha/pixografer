import Layout from "../components/Layout";
import styled from '@emotion/styled'
import PhotographerHome from '../components/PhotographerHome'
import { CgSearch } from 'react-icons/cg'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

export default function Home() {
    const router = useRouter();
    const getCoordinate = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude

            router.push(`s?lat=${lat}&lon=${lon}`)
            })
        }
    }

    return (
        <Layout title="Pixografer.com | Find Photographer Near You" navbarType="home">
            <Wrapper>
            <div className="header">
                <div className="nav-search">
                <input type="text"/>
                <span><i><CgSearch/></i>Where are you going?</span>
                </div>
                <form>
                    <div className="header-search">
                        <div className="search-loc search-block border">
                            <span className="title">Location</span>
                            <span className="sub-title">Where are you going?</span>
                        </div>
                        <div className="search-type search-block border">
                            <span className="title">Service Type</span>
                            <span className="sub-title">Choose Service Type?</span>
                        </div>
                        <div className="search-categories search-block">
                            <span className="title">Categories</span>
                            <span className="sub-title">Add Categories?</span>
                        </div>
                        <button><CgSearch/></button>
                    </div>
                </form>
                <div className="hero-title">
                    <h1>Find Photographer Near You</h1>
                    <button onClick={() => getCoordinate()} className="dark">Find Near Me</button>
                </div>
            </div>
            <PhotographerHome/>
            <Footer/>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    .hero-title{
        width:100%;
        max-width:850px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 1;
        justify-content: center;
        margin-top:-3rem;

        button{
            margin-top:8px;
        }

        h1{
            color:#fff;
            margin:0;
            margin-bottom:.75rem;
            font-size: 2.5rem;
            max-width:100%;
            font-weight:700;
            width:70%;
            text-align:left;
        }
    }
    .nav-search{
        display:flex;
        align-items:center;
        width:100%;
        margin-top:36px;
        position:relative;

        input{
            width:100%;
            height:48px;
            background:#fff;
            border-radius:5rem;
            padding:0 1rem;
            border:0;
            box-shadow:0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1);

            &:hover{
                background:#f4f4f4;
            }
        }

        span{
            position:absolute;
            color:#222;
            width: 100%;
            display: flex;
            transform: translateY(2px);
            justify-content: center;

            i{
                font-size: 1.25rem;
                transform: translateY(1px);
                margin-right: .5rem;
                color:#0552ff;
            }
        }
    }
    .header{
        background: #eee;
        background-image:url('/img/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        width:100%;
        min-height:550px;
        display:flex;
        padding:0 24px;
        flex-direction: column;
        position: relative;

        form{
            width:100%;
            max-width:850px;
            display: none;
            align-items: flex-end;
            margin-top:5rem;
        }

        .header-search{
            width:100%;
            height:66px;
            background:#fff;
            box-shadow:0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1);
            border-radius:6rem;
            margin-top:2rem;
            display: flex;
            flex:1 1 0% !important;
            align-items: center;
            position:relative;
            

            .search-loc{
                flex: 1.25 0 0% !important;
            }
            .search-type{
                flex: 1.5 0 0% !important;
            }
            .search-categories{
                flex: 1.25 0 0% !important;
            }
            .border{
                &::after{
                    content:"";
                    width:1px;
                    height:28px;
                    background:#ddd;
                    display:block;
                    position:absolute;
                    right:0;
                }
            }
            .search-block{
                border-radius:6rem;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content: center;
                align-items: flex-start;
                padding: 14px 32px;
                cursor: pointer;
                position:relative;

                .title{
                    font-size:.8rem;
                    font-weight:600;
                }

                .sub-title{
                    font-size:14px;
                    color:#888;
                    margin-top:2px;
                }

                &:hover{
                    background:#f4f4f4;
                }
            }

            button{
                padding:1rem;
                font-size:1.25rem;
                border-radius:50%;
                margin-left:auto;
                display:flex;
                color:#fff;
                background: #0552ff;
                position:absolute;
                right:8px;
            }
        }

        h1,
        p,
        .buttons{
            position:relative;
            z-index:10;
        }
        p{
            color:#82899c;
            margin: 0;
            font-weight:600;
            line-height: 1.75rem;
            font-size: 14px;
            max-width: 80%;
            line-height: 1.3rem;
        }
        .buttons{
            margin-top:2rem;
        }
    }

    @media(max-width:768px){
        button{
            width:100%;
        }
    }

    @media(min-width:411px){
        .header{
            h1{
                font-size:3rem;
            }
        }
    }

    @media(min-width:768px){
        .nav-search{
            display:none;
        }
    }

    @media(min-width:1024px){
        .header{
            padding: 0 5rem;
            text-align:center;
            align-items:center;

            form{
                display:flex;
            }
        }
    }

    @media(min-width:1440px){
        .header{
            padding: 0 7rem;
        }
    }
`