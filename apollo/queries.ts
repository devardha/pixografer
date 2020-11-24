import gql from 'graphql-tag'

// QUERIES
export const PhotographerQuery = gql`
    query PhotographerQuery($username: String!) {
        photographer(username: $username){
            _id,
            fullname,
            username,
            email,
            verifEmail,
            categories,
            gallery{
                photo,
                verified,
                photoTitle,
            }
            verified,
            available,
            phone,
            reviews{
                rating,
                review,
                userId,
                photographerId
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

export const WhoamiQuery = gql`
query WhoamiQuery{
    whoami{
        __typename
        ... on User{
            _id,
            fullname,
            username,
            email,
            verifEmail,
            photo,
            social_login{
                socialProvider,
                socialId
            },
            transaction{
                success,
                value,
                photographerId,
                userId,
            }
        }
        ... on Photographer{
            _id,
            fullname,
            username,
            email,
            verifEmail,
            gallery{
                photo,
                verified,
                photoTitle,
            }
            verified,
            available,
            phone,
            reviews{
                rating,
                review,
                userId,
                photographerId
            }
            city,
            bio,
            photo,
            transaction{
                userId,
                photographerId,
                value,
                success
            }
            services{
                _id,
                serviceName,
                servicePrice
            }
            categories
        }
    }
}
`

// MUTATIONS
export const JoinMutation = gql`
mutation JoinMutation($fullname: String!, $password: String!, $email: String!, $phone: String!, $city: String!, $username: String!){
    registerPhotographer(
        fullname: $fullname,
        username: $username,
        email: $email,
        password: $password,
        phone: $phone,
        city: $city
        ){
        fullname,
        username,
        email,
        verifEmail,
        gallery{
            photo,
            verified,
            photoTitle,
        }
        verified,
        available,
        phone,
        reviews{
            rating,
            review,
            userId,
            photographerId
        }
        city,
        photo,
        services{
            serviceName,
            servicePrice
        }
    }
}
`

export const LoginMutation = gql`
mutation LoginMutation($email: String!, $password: String!){
    login(email: $email, password: $password){
        __typename
        ... on User{
            _id,
            fullname,
            username,
            email,
            verifEmail,
            photo,
            social_login{
                socialProvider,
                socialId
            },
            transaction{
                success,
                value,
                photographerId,
                userId,
            }
        }
        ... on Photographer{
            fullname,
            username,
            email,
            verifEmail,
            gallery{
                photo,
                verified,
                photoTitle,
            }
            verified,
            available,
            phone,
            reviews{
                rating,
                review,
                userId,
                photographerId
            }
            city,
            photo,
            transaction{
                userId,
                photographerId,
                value,
                success
            }
            services{
                serviceName,
                servicePrice
            }
        }
    }
}
`

export const UpdateMutation = gql`
    mutation UpdateMutation(
        $fullname: String!,
        $username: String!,
        $email: String!,
        $phone: String!,
        $city: String!,
        $bio: String!,
        $photo: String!,
        $photographerId: String!
        ){
        updatePhotographer(
            fullname: $fullname,
            username: $username,
            email: $email,
            phone: $phone,
            city: $city,
            bio: $bio,
            photo: $photo,
            photographerId: $photographerId
            ){
                fullname,
                username,
                email,
                phone,
                city,
                photo,
                bio
            }
    }
`