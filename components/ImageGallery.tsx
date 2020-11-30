import Styled from '@emotion/styled'
    
const ImageGallery = ({ images }) => {
    return (
        <Wrapper>
            {
                images.length > 0 ? (
                    <div className="photos">
                        {
                            images?.map((image, index) => {
                                return(
                                    <div className="photo" key={index}>
                                        <img className="photo-grid" src={image.photo} alt={image.photoTitle}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <p>Tidak ada gambar yang ditampilkan</p>
            }
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    p{
        margin-top:2rem;
        font-size: 14px;
        text-align: center;
    }
    .photos{
        margin-top:1rem;
        line-height: 0;
        
        -webkit-column-count: 1;
        -webkit-column-gap:   8px;
        -moz-column-count:    1;
        -moz-column-gap:      8px;
        column-count:         1;
        column-gap:           8px;  

        .photo{
            width: 100%;
            height: auto;
            margin-bottom:8px;
            position:relative;
            border-radius:8px;

            .photo-grid{
                width:100%;
                height:100%;
                border-radius:8px;
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

    @media(min-width:768px){
        .photos{
            -webkit-column-count: 3;
            -moz-column-count:    3;
            column-count:         3;
        }
    }
`
    
export default ImageGallery