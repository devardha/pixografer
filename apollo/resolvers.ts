import dbConnect from '../utils/dbConnect'
import User from '../models/user.model'
import Transaction from '../models/transaction.model'
import Photographer from '../models/photographer.model'
import { AuthenticationError } from 'apollo-server-micro'
import jwt from 'jsonwebtoken'
import Cookies from 'cookies'
import argon2 from 'argon2'

export const resolvers = {
    Query: {
        users: async (_parents, _args, _context) => {
            await dbConnect();

            try {
                const users = await User.find({})

                return users
            } catch (error) {
                throw error
            }
        },
        photographers: async (_parent, _args, _context) => {
            await dbConnect();

            try {
                const photographers = await Photographer.find({})

                return photographers
            } catch (error) {
                throw error
            }
        },
        photographer: async (_parent, { username }, _context) => {
            await dbConnect();

            try {
                const photographer = await Photographer.findOne({username})

                return photographer
            } catch (error) {
                throw error
            }
        },
        getMyJobs: async (_parent, { photographerId }, _context) => {
            await dbConnect();

            try {
                const photographer = await Photographer.findById(photographerId).populate('transaction')
                let transactionSchema = [];

                photographer.transaction.map(item => {
                    const transactionObject = {
                        transactionId: item._id,
                        userName: item.userName,
                        photographerName: item.photographerName,
                        value: item.value,
                        date: new Date(item.date).toISOString(),
                        success: item.success
                    }

                    transactionSchema.push(transactionObject)
                })
                
                return transactionSchema
            } catch (error) {
                throw error
            }
        },
        getMyPhotos: async (_parent, { photographerId }, _context) => {
            await dbConnect();

            try {
                const photographer = await Photographer.findById(photographerId).populate('gallery')
                
                return photographer.gallery
            } catch (error) {
                throw error
            }
        },
        whoami: async (_parent, _args, _context) => {
            const cookies = new Cookies(_context.req, _context.res)
            await dbConnect();

            try {
                const token = cookies.get('_usid')
                const decode = jwt.verify(token, process.env.SECRET_KEY);
                const id = decode.id

                if(!id){
                    return new AuthenticationError('User not authenticated')
                }

                const photographer = await Photographer.findById(id)
                if(!photographer){
                    const user = await User.findById(id)

                    if(!user){
                        return new AuthenticationError("User doesn't exist")
                    }
                    return user
                    
                }else{
                    return photographer
                }
                
            } catch (error) {
                throw error
            }
        },
    },
    Entity: {
        __resolveType(obj) {
            if (obj) {
                return 'Photographer';
            }else{
                return 'User';
            }
        }
    },
    Mutation: {
        login: async (_parent, { email, password }, _context) => {
            await dbConnect();
            
            const cookies = new Cookies(_context.req, _context.res)
            try {
                const photographer = await Photographer.findOne({email})

                // Find User
                if(!photographer){
                    const user = await User.findOne({email})

                    // If User Exist
                    if(user){
                        const hashedPassword = user.password;
                        const verify = await argon2.verify(hashedPassword, password);

                        if(verify){
                            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
                                expiresIn: 86400
                            });

                            // Set a cookie
                            cookies.set('_usid', token, {
                                httpOnly: true // true by default
                            })

                            return user
                        }
                    }else{
                        return new AuthenticationError("User doesn't exist")
                    }
                }else{
                    // If Photographer Exist
                    const hashedPassword = photographer.password;
                    const verify = await argon2.verify(hashedPassword, password);

                    if(verify){
                        const token = jwt.sign({ id: photographer._id }, process.env.SECRET_KEY, {
                            expiresIn: 86400
                        });

                        // Set a cookie
                        cookies.set('_usid', token, {
                            httpOnly: true // true by default
                        })

                        return photographer;
                    }
                }
            } catch (error) {
                throw error
            }

            
        },
        registerUser: async (_parents, { fullname, username, email, password }, _context) => {
            await dbConnect();

            try {
                const user = await User.findOne({username})

                if(user){
                    return new AuthenticationError('User has already exist')
                }

                const hashedPassword = await argon2.hash(password)

                const newUser = await User.create({
                    fullname: fullname,
                    username: username,
                    email: email,
                    password: hashedPassword,
                });
    
                return newUser;
            } catch (error) {
                return new AuthenticationError('Authentication failed. Please try to reload the page.')
            }
        },
        registerPhotographer: async(_parent, { fullname, email, username, password, phone, city }, _context) => {
            await dbConnect();

            try {
                const photographer = await Photographer.findOne({username})

                if(photographer){
                    return new AuthenticationError('User has already exist')
                }

                const hashedPassword = await argon2.hash(password)

                const newPhotographer = await Photographer.create({
                    fullname: fullname,
                    username: username,
                    email: email,
                    password: hashedPassword,
                    phone: phone,
                    city: city
                });

                return newPhotographer

            } catch (error) {
                return new AuthenticationError('Authentication failed. Please try to reload the page.')
            }
        },
        updatePhotographer: async(_parent, { fullname, email, username, photo, phone, city, photographerId }, _context) => {
            await dbConnect();

            try {
                const findPhotographer = await Photographer.findById(photographerId);

                if(!findPhotographer) return new AuthenticationError('Photographer does not exist')
                const newData = {
                    fullname: fullname,
                    username: username,
                    email: email,
                    photo: photo,
                    phone: phone,
                    city: city
                }

                const newUserData = await Photographer.findByIdAndUpdate(photographerId, newData, { new: true })

                return newUserData

            } catch (error) {
                return new AuthenticationError('Authentication failed. Please try to reload the page.')
            }
        },
        addService: async(_parent, { serviceName, servicePrice, photographerId }, _context) => {
            await dbConnect();

            try {
                const photographer = await Photographer.findById(photographerId)

                if(!photographer){
                    return new AuthenticationError("User doesn't exist")
                }

                const newService = {
                    serviceName: serviceName,
                    servicePrice: servicePrice
                }

                try {
                    await photographer.services.push(newService);
                    await photographer.save();

                    const getNewService = photographer.services.find(service => service.serviceName === serviceName)

                    return getNewService._id
                } catch (error) {
                    console.log(error)
                    return false
                }

            } catch (error) {
                return new AuthenticationError('Authentication failed. Please try to reload the page.')
            }
        },
        createTransaction: async(_parent, { userId, photographerId, userName, photographerName, serviceName, value, description, date, phone }, _context) => {
            await dbConnect();

            try {
                const newTransaction = await Transaction.create({
                    userId: userId,
                    photographerId: photographerId,
                    userName: userName,
                    photographerName: photographerName,
                    serviceName: serviceName,
                    value: value,
                    description: description,
                    date: date,
                    phone: phone
                })

                try {
                    const user = await User.findById(userId)
                    const photographer = await Photographer.findById(photographerId)

                    await user.transaction.push(newTransaction._id)
                    await user.save()

                    await photographer.transaction.push(newTransaction._id)
                    await photographer.save()

                    return true
                } catch (error) {
                    return false
                }

            } catch (error) {
                return new AuthenticationError('Authentication failed. Please try to reload the page.')
            }
        },
        uploadPhoto: async (_parent, { imageUrl, imageName, photographerId }, _context) => {
            await dbConnect();

            const newImage = {
                photo: imageUrl,
                photoTitle: imageName,
            }

            try {
                const photographer = await Photographer.findById(photographerId)

                await photographer.gallery.push(newImage)
                await photographer.save()

                return true
            } catch (error) {
                return false
            }
        },
        deletePhoto: async (_parent, { url, photographerId }, _context) => {
            await dbConnect();

            Photographer.updateOne(
                { _id: photographerId },
                { $pull: { gallery : { photo : url } } },
                { safe: true }).then(res => {
                    if(res){
                        return true
                    }
                }).catch(err => {
                    console.log(err)
                    return false
                })
        },
        deleteService: async (_parent, { serviceId, photographerId }, _context) => {
            await dbConnect();
            
            Photographer.updateOne(
                { _id: photographerId },
                { $pull: { services : { _id : serviceId } } },
                { safe: true }).then(res => {
                    if(res){
                        return true
                    }
                }).catch(err => {
                    console.log(err)
                    return false
                })
        },
    }
}