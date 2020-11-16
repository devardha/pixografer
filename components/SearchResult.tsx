import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
import { HiPhotograph } from 'react-icons/hi'

const SearchResult = ({ results }) => {
    return (
        <Wrapper>
            <ol>
                {
                    results?.map((photographer, index) => {
                        return(
                            <Link href={`/p/${photographer.username}`} key={index}>
                            <li>
                                {
                                    photographer.gallery.length ? (
                                        <div className="image">
                                            <img src={photographer.gallery[0].photo} alt=""/>
                                        </div>
                                    ) : <div className="image">
                                        <i><HiPhotograph/></i>
                                    </div>
                                }
                                <span className="photographer-loc">Semarang, Indonesia</span>
                                <span className="photographer-name">{photographer.username}</span>
                            </li>
                            </Link>
                        )
                    })
                }
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
                display:flex;
                align-items:center;
                justify-content:center;

                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }

                i{
                    font-size:5rem;
                    color:#ccc;
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