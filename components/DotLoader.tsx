import React from 'react'
import Styled from '@emotion/styled'
    
const DotLoader = () => {
    return (
        <Wrapper>
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        height:40px;
    }

    .loader > div {
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 50%;
        margin : 3px;
        animation: loader 0.4s infinite alternate;
    }

    .loader > div:nth-of-type(2) {
        animation-delay: 0.2s;
    }

    .loader > div:nth-of-type(3) {
        animation-delay: 0.3s;
    }

    @keyframes loader {
        to {
            background:#fff;
            
        }
    }
`
    
export default DotLoader