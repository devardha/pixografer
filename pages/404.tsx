import Layout from '../components/Layout'
import styled from '@emotion/styled'
import Footer from '../components/Footer'

export default function Custom404() {
    return (
        <Layout title={`Halaman Tidak Ditemukan | Pixografer.com`} navbarType="search">
            <Wrapper>
                <div className="not-found">
                    <span className="not-found-title">Halaman Tidak Ditemukan!</span>
                    <p>Maaf, Halaman yang sedang kamu cari tidak dapat ditemukan. Harap pergi ke halaman utama dan coba kunjungi halaman ini lain kali.</p>
                    <button className="dark">Kembali ke Halaman Utama</button>
                </div>
            </Wrapper>
            <Footer/>
        </Layout>
    )
}

const Wrapper = styled.div`
    margin-top:73px;
    padding:40px 24px 0 24px;

    .not-found{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        min-height:50vh;

        .not-found-title{
            font-weight:bold;
            font-size:1.5rem;
            text-align: center;
        }

        p{
            line-height:20px;
            font-size:14px;
            max-width:100%;
            text-align:center;
        }
    }

    @media(min-width:768px){
        padding:40px 5rem 0 5rem;
    }
`