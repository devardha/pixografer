import { AUTHENTICATE_USER, UPDATE_GALLERY, DELETE_PHOTO, DELETE_SERVICE, UPDATE_SERVICE, UPDATE_PHOTOGRAPHER } from '../actions/types'

const initialState = {
    authenticate: false,
    errorMessage: null,
    userData: {},
    loading: null,
    userProfile: null,
    userRole: null,
}

export const account = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return {
                userData: action.payload,
                userProfile: action.payload.photo,
                authenticate: true,
                errorMessage: null,
                loading: false,
                userRole: action.payload.services ? 'photographer' : 'user'
            }
        case UPDATE_GALLERY:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    gallery: [...state.userData['gallery'], action.payload]
                }
            }
        case UPDATE_SERVICE:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    services: [...state.userData['services'], action.payload]
                }
            }
        case UPDATE_PHOTOGRAPHER:
            console.log(action.payload)
            return {
                ...state,
                userData: {
                    ...state.userData,
                    username: action.payload.username,
                    fullname: action.payload.fullname,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    city: action.payload.city,
                    photo: action.payload.photo
                }
            }
        case DELETE_PHOTO:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    gallery: state.userData['gallery'].filter(item => item.photo !== action.payload)
                }
            }
        case DELETE_SERVICE:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    services: state.userData['services'].filter(item => item._id !== action.payload)
                }
            }
        default:
            return state;
    }
};