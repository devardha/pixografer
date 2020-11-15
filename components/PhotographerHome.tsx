import React from 'react'
import Styled from '@emotion/styled'
    
const PhotographerHome = () => {
    return (
        <Wrapper>
            <div className="photographer-wrapper">
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Yudhatama Indra</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Sam Kolder</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Matt Komo</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Peter McKinnon</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Martin Garrix</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Izzul Khaq</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Fahrizal Nur</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
                <div className="photographer">
                    <span className="photo"></span>
                    <div className="detail">
                        <b>Isfano Ramadhan</b>
                        <span>Nature Photographer</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    margin-top:40px;
    margin-bottom:40px;

    .photographer-wrapper{
        overflow-x: auto;
        display: flex;
        flex-flow: column wrap;
        scroll-snap-type: x mandatory;
        scroll-padding: 24px;
        height: 160px;

        .photographer{
            display:flex;
            margin-right: 8px;
            margin-left: 24px;
            margin-bottom: 16px;
            width: calc(100% - 89px);
            overflow: hidden;
            scroll-snap-align: start;

            .photo{
                width:64px;
                height:64px;
                border-radius:8px;
                overflow:hidden;
                background:#999;
                display:block;
            }

            .detail{
                display:flex;
                flex-direction:column;
                justify-content:center;
                margin-left:1rem;
                font-size:14px;
            }

            b{
                font-weight:600;
                color:#222;
            }
        }
    }

    @media(min-width:411px){
        .photographer-wrapper{
            .photographer{
                width: calc(100% - 160px);
            }
        }
    }

    @media(min-width:1024px){
        margin-top:64px;
        margin-bottom:64px;

        .photographer-wrapper{
            width:100%;
            padding:0 5rem;
            display:flex;
            flex-direction: row !important;
            overflow-x: auto;
            flex-wrap: wrap;
            height: unset;

            .photographer{
                display: flex;
                width: calc((100% - 48px) / 4);
                margin-left: 0;
                margin-right: 0px;
            }
        }
    }
`
    
export default PhotographerHome