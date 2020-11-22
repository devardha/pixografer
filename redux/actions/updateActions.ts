import { DELETE_PHOTO, UPDATE_GALLERY, DELETE_SERVICE, UPDATE_SERVICE, UPDATE_PHOTOGRAPHER } from './types'

// Update Photographer Gallery
export const updateGallery = (image) => (dispatch) => {
    dispatch({
        type: UPDATE_GALLERY,
        payload: image
    })
}

// Update Photographer Service
export const updateService = (service) => (dispatch) => {
    dispatch({
        type: UPDATE_SERVICE,
        payload: service
    })
}

// Update Photographer Profile
export const updatePhotographer = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_PHOTOGRAPHER,
        payload: data
    })
}

// Delete Photographer Photo
export const deletePhoto = (imageId) => (dispatch) => {
    dispatch({
        type: DELETE_PHOTO,
        payload: imageId
    })
}

// Delete Photographer Service
export const deleteService = (serviceId) => (dispatch) => {
    dispatch({
        type: DELETE_SERVICE,
        payload: serviceId
    })
}