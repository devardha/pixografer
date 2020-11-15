import React from 'react'
import Styled from '@emotion/styled'
    
const SearchResult = () => {
    return (
        <Wrapper>
            <ol>
                <li>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598659505195-98ff47e13651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt=""/>
                    </div>
                    <span className="photographer-loc">Semarang, Indonesia</span>
                    <span className="photographer-name">Yudhatama Indra Wardhana</span>
                </li>
                <li>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1586513265486-03d7d0770c53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                    </div>
                    <span className="photographer-loc">Jakarta, Indonesia</span>
                    <span className="photographer-name">Matt Komo</span>
                </li>
                <li>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1603738762812-5cd2490d444f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>
                    </div>
                    <span className="photographer-loc">Bali, Indonesia</span>
                    <span className="photographer-name">Sam Kolder</span>
                </li>
                <li>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1603610515737-193e0b423983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                    </div>
                    <span className="photographer-loc">Jakarta, Indonesia</span>
                    <span className="photographer-name">Matt Komo</span>
                </li>
                <li>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1603738762812-5cd2490d444f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>
                    </div>
                    <span className="photographer-loc">Bali, Indonesia</span>
                    <span className="photographer-name">Sam Kolder</span>
                </li>
            </ol>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    padding-top:40px;

    ol{
        display: grid;
        list-style: none;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-gap: 16px;
        padding:0;

        li{
            cursor:pointer;
            display: flex;
            line-height: 23px;
            flex-direction: column;
            
            .image{
                position: relative;
                border-radius: 8px;
                overflow: hidden;
                height:180px;
                background:#eee;

                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
            }

            .photographer-loc{
                margin-top: 8px;
                font-size: 12px;
            }
            .photographer-name{
                font-weight:500;
                font-size:15px;
            }
        }
    }

    @media(min-width:1140px){
        ol{
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    }
`
    
export default SearchResult