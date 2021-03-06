import Layout from "../components/Layout";
import styled from '@emotion/styled'
import { CgSearch } from 'react-icons/cg'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Services from '../components/Services'

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

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`s?loc=${'all'}&service=${'all'}&cat=${'all'}`)
    }

    return (
        <Layout title="Pixografer.com | Cari fotografer di dekatmu dengan cepat dan mudah" navbarType="home">
            <Wrapper>
            <div className="header">
                <form onSubmit={handleSearch}>
                    <div className="header-search">
                        <div className="search-loc search-block border">
                            <span className="title">Lokasi</span>
                            <span className="sub-title">Mau Pergi ke Mana?</span>
                        </div>
                        <div className="search-type search-block border">
                            <span className="title">Jenis Layanan</span>
                            <span className="sub-title">Pilih Layanan yang Kamu Inginkan</span>
                        </div>
                        <div className="search-categories search-block">
                            <span className="title">Kategori</span>
                            <span className="sub-title">Tambahkan Kategori</span>
                        </div>
                        <button><CgSearch/></button>
                    </div>
                </form>
                <div className="hero-title">
                    <h1>Cari Fotografer Nggak Pakai Ribet</h1>
                    <button onClick={() => getCoordinate()} className="dark">Cari Cepat</button>
                </div>
            </div>
            <Services/>
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
            width:75%;
            text-align:left;
            margin-top:73px;
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
        .header{
            h1{
                margin-top:28px;
            }
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