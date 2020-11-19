import { AUTHENTICATE_DESTROY, AUTHENTICATE_USER } from './types'

// Login A User
export const loadUser = (user) => (dispatch) => {
    dispatch({
        type: AUTHENTICATE_USER,
        payload: user
    })
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: AUTHENTICATE_DESTROY,
        payload: ''
    })
}