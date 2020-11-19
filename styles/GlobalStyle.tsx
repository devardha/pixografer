import { Global, css } from '@emotion/core'

function GlobalStyle(){
    return(
        <Global styles={css`
        html,
        body {
            padding: 0;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            font-weight:400;
        }

        textarea{
            font-family: 'Montserrat', sans-serif;
        }

        input, textarea{
            &:focus{
                outline:none;
            }
        }

        * {
            box-sizing: border-box;
        }

        a {
            color: #1748ff;
            text-decoration: none;
        }

        ul{
            padding:0;
            list-style:none;
        }

        button{
            font-weight:600;
            border:0;
            font-size: 1rem;
            padding: 1rem 1.25rem;
            cursor:pointer;
            border-radius:4px;

            &:focus{
                outline:none;
            }
        }

        .primary{
            background-color: #1748ff;
            border:1px solid #1748ff;
            color:#F4F8FF;

            &:hover{
                background-color:#0056ff;
            }
        }

        .dark{
            background:#000;
            color:#fff;

            &:hover{
                background-color:#222;
            }

            &:disabled{
                background-color: #eee;
                color: #999;
            }
        }

        .google-oauth{
            background: #f9f9f9;
            color: #888;
            border: 1px solid #eee;
            display: flex;
            justify-content: center;
            margin-top:1rem;

            i {
                margin-right:1rem;
            }

            &:hover{
                background: #f4f4f4;
            }
        }

        .google-icon{
            width: 16px;
            display: flex;
            height: 17px;
            background-size: contain;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMTYnIGhlaWdodD0nMTcnIHZpZXdCb3g9JzAgMCAxNiAxNyc+PGRlZnM+PHBhdGggaWQ9J2EnIGQ9J00wIC4wNDJWMTYuMzVoMTUuOTgyVi4wNEgweicvPjxwYXRoIGlkPSdjJyBkPSdNMTIuNzc2LjA0MUguMDM3djYuNTdoMTIuNzRWLjA0MXonLz48L2RlZnM+PGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC4wMDMpJz48bWFzayBpZD0nYicgZmlsbD0nI2ZmZic+PHVzZSB4bGluazpocmVmPScjYScvPjwvbWFzaz48cGF0aCBmaWxsPScjRkZGJyBkPSdNNS40OS40ODhBOC4yIDguMiAwIDAgMCAuODcgNC41MzRhOC4wNzMgOC4wNzMgMCAwIDAtLjcxIDIuMDUxIDguMTgyIDguMTgyIDAgMCAwIC43MDYgNS4yNzMgOC4yMjcgOC4yMjcgMCAwIDAgMi4yMTQgMi43MjMgOC4xMjQgOC4xMjQgMCAwIDAgMi45NjMgMS40OTRjMS4zNTkuMzY0IDIuODA1LjM1NiA0LjE3My4wNDRhNy40IDcuNCAwIDAgMCAzLjM0LTEuNzM2Yy45ODctLjkwNyAxLjY5Mi0yLjEgMi4wNjUtMy4zODQuNDA4LTEuMzk4LjQ2LTIuODkzLjIwNi00LjMzSDguMTU2VjkuODVIMTIuNmEzLjg0IDMuODQgMCAwIDEtMS42MzEgMi41MiA0LjY3MSA0LjY3MSAwIDAgMS0xLjc5Ny43MWMtLjY0LjExLTEuMzA3LjEyMy0xLjk0Ny0uMDA0YTQuODI3IDQuODI3IDAgMCAxLTEuODE0LS43ODVBNS4wNDIgNS4wNDIgMCAwIDEgMy41NDQgOS43OWE0Ljk0OCA0Ljk0OCAwIDAgMSAwLTMuMTczQTUuMDkzIDUuMDkzIDAgMCAxIDQuNzI4IDQuNjlhNC44MzYgNC44MzYgMCAwIDEgMi40MzctMS4zNTQgNC44NjUgNC44NjUgMCAwIDEgMi4zOTQuMDk2IDQuMzkgNC4zOSAwIDAgMSAxLjc1NyAxLjAzNWwxLjUtMS41Yy4yNjMtLjI2Ny41MzktLjUyNS43OTMtLjgwMkE3Ljk1IDcuOTUgMCAwIDAgMTAuOTgzLjU0IDguMjMgOC4yMyAwIDAgMCA1LjQ5MS40ODgnIG1hc2s9J3VybCgjYiknLz48L2c+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLjgzMyAuMDAzKSc+PG1hc2sgaWQ9J2QnIGZpbGw9JyNmZmYnPjx1c2UgeGxpbms6aHJlZj0nI2MnLz48L21hc2s+PHBhdGggZmlsbD0nI0VBNDMzNScgZD0nTTQuNjU4LjQ4OGE4LjI1NyA4LjI1NyAwIDAgMSA1LjQ5Mi4wNDhjLjk3My4zNiAxLjg2My45MiAyLjYyNiAxLjYyNi0uMjU0LjI3Ni0uNTMuNTM1LS43OTMuODAybC0xLjUgMS41YTQuNDQgNC40NCAwIDAgMC0xLjc1Ny0xLjAzNSA0LjgxNCA0LjgxNCAwIDAgMC0yLjM5NC0uMDk3Yy0uOTIuMTk4LTEuNzc1LjY4LTIuNDM3IDEuMzU1YTUuMDYgNS4wNiAwIDAgMC0xLjE4NCAxLjkyNEMxLjgyMSA1LjkyLjkzMSA1LjIzMS4wMzcgNC41MzhhOC4xOTMgOC4xOTMgMCAwIDEgNC42Mi00LjA1JyBtYXNrPSd1cmwoI2QpJy8+PC9nPjxwYXRoIGZpbGw9JyNGQkJDMDUnIGQ9J00uMTY1IDYuNTgzYy4xNDQtLjcxLjM4LTEuNDAyLjcxLTIuMDUxLjg5LjY5MiAxLjc4IDEuMzggMi42NzQgMi4wNzNhNC45MTggNC45MTggMCAwIDAgMCAzLjE3NGMtLjg5LjY5My0xLjc4IDEuMzg1LTIuNjcgMi4wNzNhOC4xMTMgOC4xMTMgMCAwIDEtLjcxNC01LjI2OScvPjxwYXRoIGZpbGw9JyM0Mjg1RjQnIGQ9J004LjE1NiA2LjY2N2g3LjY3MWE5LjY0MyA5LjY0MyAwIDAgMS0uMjA2IDQuMzNjLS4zNzMgMS4yODUtMS4wNzggMi40NzctMi4wNjUgMy4zODVsLTIuNTktMi4wMTJhMy44NCAzLjg0IDAgMCAwIDEuNjMtMi41MjFIOC4xNTFjLjAwNS0xLjA2LjAwNS0yLjEyMi4wMDUtMy4xODInLz48cGF0aCBmaWxsPScjMzRBODUzJyBkPSdNLjg3IDExLjg1N2MuODktLjY4OSAxLjc4LTEuMzgxIDIuNjctMi4wNzRhNS4wNjcgNS4wNjcgMCAwIDAgMS44NjcgMi41MDMgNC44NTcgNC44NTcgMCAwIDAgMS44MTUuNzg1Yy42NC4xMzEgMS4zMDIuMTE0IDEuOTQ2LjAwNGE0LjY3IDQuNjcgMCAwIDAgMS43OTgtLjcxbDIuNTkgMi4wMTJjLS45MzMuODY0LTIuMTA0IDEuNDUxLTMuMzQgMS43MzYtMS4zNjguMzExLTIuODE0LjMyLTQuMTczLS4wNDRhOC4wNTcgOC4wNTcgMCAwIDEtMi45NjMtMS40OTQgOC4yMDkgOC4yMDkgMCAwIDEtMi4yMS0yLjcxOCcvPjwvZz48L3N2Zz4K') center no-repeat;
        }

        form .form-subtitle{
            font-size:1rem;
        }

        @keyframes load {
            from {
                left: -150px;
            }
            to   {
                left: 100%;
            }
        }

        .skeleton{
            position: relative;
            overflow: hidden;
            height:100%;
            width:100%;

            &:before{
                content: '';
                display: block;
                position: absolute;
                left: -200px;
                top: 0;
                height: 100%;
                width: 200px;
                background: linear-gradient(to right,transparent 0%,#f3f3f3 50%,transparent 100%);
                animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
            }
        }

        `}/>
    )
}

export default GlobalStyle