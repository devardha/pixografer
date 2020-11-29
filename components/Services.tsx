import React from 'react'
import Styled from '@emotion/styled'
import Image from 'next/image'
    
const Services = () => {
    return (
        <Wrapper>
            <ol>
                <li>
                    <div className="image">
                        <Image
                            src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=8"
                            alt="Photography Service"
                            width={400}
                            height={240}
                        />
                    </div>
                    <span className="categories-name">Fotografi</span>
                </li>
                <li>
                    <div className="image">
                        <Image
                            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                            alt="Videography Service"
                            width={400}
                            height={240}
                        />
                    </div>
                    <span className="categories-name">Videografi</span>
                </li>
                <li>
                    <div className="image">
                        <Image
                            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                            alt="Photo and Video Editing Service"
                            width={400}
                            height={240}
                        />
                    </div>
                    <span className="categories-name">Photo &amp; Video Editing</span>
                </li>
            </ol>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    margin-top:40px;
    margin-bottom:40px;
    padding: 0 24px;

    ol{
        display: grid;
        list-style: none;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        grid-gap: 16px;
        padding:0;

        li{
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

            .categories-name{
                font-weight:500;
                font-size:15px;
                margin-top: 8px;
            }
        }
    }

    @media(min-width:1024px){
        padding: 0 5rem;

        ol{
            grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        }
    }

    @media(min-width:1288px){
        padding: 0 5rem;
    }
`
    
export default Services