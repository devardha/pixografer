import React from 'react'
import Styled from '@emotion/styled'
    
const Footer = () => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col">
                    <div className="col-head">
                        <span className="footer-title">About</span>
                        <ul className="footer-list">
                            <li>About Us</li>
                            <li>Career</li>
                            <li>Services</li>
                            <li>Photographer</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="col-head">
                        <span className="footer-title">Photographer</span>
                        <ul className="footer-list">
                            <li>How photographer works</li>
                            <li>Community Center</li>
                            <li>How to become a photographer</li>
                            <li>How to make money</li>
                            <li>Resource Center</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="col-head">
                        <span className="footer-title">Help Center</span>
                        <ul className="footer-list">
                            <li>Privacy Policy</li>
                            <li>Terms</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="col-head">
                        <span className="footer-title">Social Media</span>
                        <ul className="footer-list">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span>&copy;2020 Pixografer</span>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    background-color:#f7f7f7;
    padding: 4rem 24px 7rem 24px;
    align-items:center;
    min-height:400px;
    position:relative;
    margin-top:2rem;
    border-top:1px solid #ddd;
    font-size:15px;
    margin-top:80px;

    .copyright{
        position:absolute;
        right:0;
        left:0;
        bottom:2rem;
        text-align:center;
    }

    .row{
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
    }

    .col{
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        display: flex;
        align-items: flex-start;
        margin-bottom:2rem;
    }

    .footer-title{
        font-weight:bold;
        font-style:uppercase;
    }

    .footer-list{
        padding:0;
        list-style:none;

        li{
            margin-bottom: 1rem;
            font-size:14px;
            cursor:pointer;

            &:hover{
                text-decoration:underline;
            }
        }
    }

    @media(min-width:768px){
        padding:4rem 5rem 7rem 5rem;
        
        .row{
            flex-direction:row;
        }
    }
`
    
export default Footer
