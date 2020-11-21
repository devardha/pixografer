import gql from 'graphql-tag'

export const PhotographerQuery = gql`
    query PhotographerQuery($username: String!) {
        photographer(username: $username){
            _id,
            fullname,
            username,
            email,
            categories,
            gallery{
                photo,
                verified,
                photoTitle,
            }
            verified,
            available,
            phone,
            rating{
                rating,
                userId
            }
            city,
            bio,
            photo,
            services{
                serviceName,
                servicePrice
            }
        }
    }
`