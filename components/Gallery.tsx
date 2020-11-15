import Styled from '@emotion/styled'
import { HiCheckCircle } from 'react-icons/hi'
    
const Gallery = ({ images }: any) => {
    return (
        <Wrapper>
            <div className="photos">
                <div className="photo">
                    <img className="photo-grid" src={images[0]}/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src={images[1]}/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src={images[2]}/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src={images[3]}/>
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    padding-top:40px;

    .photos{
        margin-top:1rem;
        line-height: 0;
        
        -webkit-column-count: 3;
        -webkit-column-gap:   8px;
        -moz-column-count:    3;
        -moz-column-gap:      8px;
        column-count:         3;
        column-gap:           8px;  

        .photo{
            width: 100%;
            height: auto;
            margin-bottom:8px;
            position:relative;
            border-radius:1rem;

            .photo-grid{
                width:100%;
                height:100%;
                border-radius:1rem;
            }
            span{
                font-size: 1.5rem;
                position: absolute;
                right: 1rem;
                top: 1rem;
                color: #ffffff;
            }
        }
    }
`
    
export default Gallery