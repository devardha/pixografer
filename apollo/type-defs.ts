import { gql } from '@apollo/client'

export const typeDefs = gql`
    type Transaction{
        userId: String
        photographerId: String
        value: Int
        success: Boolean
    }
    type FullTransaction{
        transactionId: String
        userName: String
        photographerName: String
        value: Int
        date: String
        success: Boolean
        serviceName: String
        description: String
        phone: String
    }
    type Reviews{
        userId: String
        photographerId: String
        rating: Int
        review: String
    }
    type Gallery{
        photo: String
        photoTitle: String
        verified: Boolean
    }
    type Services{
        _id: String!
        serviceName: String!
        servicePrice: Int!
    }
    type Photographer{
        _id: String!
        fullname: String!
        username: String!
        email: String!
        verifEmail: Boolean!
        gallery: [Gallery]
        verified: Boolean!
        available: Boolean!
        phone: String!
        reviews: [Reviews]
        city: String!
        password: String!
        photo: String
        bio: String
        transaction: [FullTransaction]
        services: [Services]
        categories: [String]
    }
    type PhotographerSafe{
        _id: String!
        fullname: String!
        username: String!
        email: String!
        verifEmail: Boolean!
        gallery: [Gallery]
        verified: Boolean!
        available: Boolean!
        phone: String!
        reviews: [Reviews]
        city: String!
        photo: String
        bio: String
        services: [Services]
        categories: [String]
    }

    type SocialLogin{
        socialProvider: String
        socialId: String
    }
    type User{
        _id: String!
        fullname: String!
        username: String!
        email: String!
        verifEmail: Boolean!
        password: String!
        photo: String
        social_login: SocialLogin
        transaction: [FullTransaction]
    }
    union Entity = User | Photographer
    type Query{
        users: [User]
        photographers: [PhotographerSafe]
        photographer(username: String): PhotographerSafe
        getMyJobs(photographerId: String): [FullTransaction]
        getMyPhotos(photographerId: String): [Gallery]
        whoami: Entity
    }
    type Mutation{
        visitPage(photographerId: String): Boolean
        updatePhotographerAvatar(imageUrl: String, photographerId: String): String
        updateUserAvatar(imageUrl: String, userId: String): String
        uploadPhoto(imageUrl: String, imageName: String, photographerId: String): Boolean
        createTransaction(userId: String, photographerId: String, userName: String, photographerName: String, serviceName: String, value: Int, description: String, date: String, phone: String): Boolean
        addService(serviceName: String, servicePrice: Int, photographerId: String): String
        registerUser(fullname: String!, username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Entity
        deletePhoto(url: String, photographerId: String): Boolean
        deleteService(serviceId: String, photographerId: String): Boolean
        registerPhotographer(fullname: String!, username: String!, email: String!, phone: String!, city: String!, password: String!): Photographer
        updatePhotographer(fullname: String!, username: String!, email: String!, phone: String!, city: String!, photo: String, photographerId: String, bio: String): Photographer
    }
`