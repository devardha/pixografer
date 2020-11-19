import Styled from '@emotion/styled'
    
const ImageGallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1578887237591-d2d01aa10a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1604761773777-d478adb6a484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1593474686394-2dedcffac7d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1597463030272-a28bdf4c91b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    ]
    
    return (
        <Wrapper>
            <div className="photos">
                {
                    images.map(image => {
                        return(
                            <div className="photo">
                                <img className="photo-grid" src={image}/>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    .photos{
        margin-top:1rem;
        line-height: 0;
        
        -webkit-column-count: 2;
        -webkit-column-gap:   8px;
        -moz-column-count:    2;
        -moz-column-gap:      8px;
        column-count:         2;
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