import styled from '@emotion/styled'
import { useState } from 'react'
import { storage } from '../../../firebase'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const UploadPhotoMutation = gql`
mutation UploadPhotoMutation($imageUrl: String, $imageName: String, $photographerId: String){
    uploadPhoto(
        imageUrl: $imageUrl,
        imageName: $imageName,
        photographerId: $photographerId
    )
}
`

function UploadImageModal({ setModalOpen, photographerId }){
    const [ imageFile, setImageFile ]: any = useState();
    const [ imageName, setImageName ] = useState('');
    const [ error, setError ]: any = useState();
    const [ uploadLoading, setUploadLoading] = useState(false)
    const [ imageUrl, setImageUrl ] = useState();
    const [ uploadProgress, setUploadProgress ] = useState(0);
    const [ uploadImage, { loading }] = useMutation(UploadPhotoMutation);

    const handleImageAsFile = (e) => {
        if(e.target.files[0]){
            console.log(e.target.files[0])
            const image = e.target.files[0]
            setImageFile(() => (image))
        }
    }

    const handleUpload = (e) => {
        e.preventDefault()
        const generateFileName = `${photographerId}-${v4()}`
        const uploadTask = storage.ref(`photographer-photos/${generateFileName}`).put(imageFile);
        const imageName = e.currentTarget.elements.name

        uploadTask.on('state_changed', 
        (snapshot) => {
            setUploadLoading(true)
            const progress = snapshot.bytesTransferred;
            const totalSize = snapshot.totalBytes;
            const calculate = progress/totalSize*100;

            setUploadProgress(calculate)
        },
        (error) => {
            // peringatan ketika terjadi kesalahan
            setError('Terjadi kesalahan dalam mengunggah. Tunggu beberapa saat dan coba lagi.')
        },
        () => {
            storage.ref('photographer-photos').child(generateFileName).getDownloadURL().then(url => {
                setImageUrl(url)
                // menyimpan url ke database user
                uploadImage({
                    variables: {
                        imageUrl: url,
                        imageName: imageName.value,
                        photographerId: photographerId
                    }
                }).then(res => {
                    if(res.data.uploadPhoto){
                        setModalOpen(false)
                        setUploadLoading(false)
                    }
                }).catch(err => {
                    setError("There's an error while uploading image")
                })
            })
        })
    }

    return(
    <ModalFormStyled uploadProgress={uploadProgress}>
        <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <div className="modal-body">
                <form onSubmit={handleUpload}>
                    <div className="field">
                        <label htmlFor="name">Image Title</label>
                        <input type="text" name="name" placeholder="1 Hour Photo Session" onChange={(e) => setImageName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="myfile">Upload Image</label>
                        <div className="upload-button-wrapper">
                            <span className="filename">{ imageFile ? imageFile.name : 'No file choosen...' }</span>
                            <button type="button">Choose Image</button>
                            <input type="file" name="myfile" onChange={handleImageAsFile}/>
                        </div>
                    </div>
                    {
                        uploadLoading ? (
                            <div className="field">
                                <span className="loader-wrapper">
                                    <span className="loader-inner"></span>
                                </span>
                            </div>
                        ) : ''
                    }
                    <button className="primary" type="submit">Upload Image</button>
                </form>
            </div>
        </div>
    </ModalFormStyled>
    )
}

const ModalFormStyled = styled.div`
    display: block;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.8);

    .loader-wrapper{
        width: 100%;
        background: #f4f4f4;
        height: 10px;
        display: flex;
        border-radius: 4rem;

        .loader-inner{
            width: ${(props: any) => props.uploadProgress}%;
            height: auto;
            background: #1748ff;
            border-radius: 4rem;
        }
    }

    .upload-button-wrapper{
        display:flex;
        align-items: center;
        
        .filename{
            margin-top:6px;
            padding: 0 1rem;
            height: 40px;
            border: 1px solid #aaa;
            display: flex;
            align-items: center;
            font-size: .9rem;
            color: rgb(118, 118, 118);
            font-weight: 400;
            width: 65%;
            overflow: hidden;
            position: relative;
            font-family:Arial, Helvetica, sans-serif;
            z-index: 5;
        }

        button{
            font-size:.8rem;
            padding:.5rem 1.25rem;
            height: 40px;
            margin: 0;
            margin-top: 6px !important;
            margin-left: auto;

            &:hover{
                background: #f4f4f4;
            }
        }

        input[type=file] {
            position: absolute;
            left: 0;
            bottom: 0;
            opacity: 0;
            cursor:pointer;
        }
    }

    .modal-content {
        background-color: #fefefe;
        margin: 40% auto;
        border: 1px solid #888;
        width: 85%;
        box-shadow: 0 1px 7px #00000038;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align:center;
        padding-top:2rem;
    }

    .close {
        color: #aaa;
        font-size: 27px;
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 1px;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-body{
        padding-bottom:2rem;

        form{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding:1rem 2rem;

            label{
                font-size: .8rem;
                font-weight:bold;
                color:#555;
                display:flex;
            }

            input{
                margin-top:6px;
                padding: 0 1rem;
                width: 100%;
                height: 40px;
                border: 1px solid #aaa;
            }

            .field{
                margin: .5rem 0;
                position:relative;
            }

            button{
                margin-top:1rem;
            }
        }
    }

    @media(min-width:768px){
        .modal-content{
            margin: 5% auto;
            width: 35%;
        }
    }
`

const mapDispatchToProps = dispatch => ({
    
});

const mapStateToProps = (state) => ({
    photographerId: state.account.userData._id
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageModal)