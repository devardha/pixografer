const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    photo: { 
        type: String,
    },
    photoTitle:{
        type: String,
    },
    verified: {
		type: Boolean,
		default: false
	},
})

const servicesSchema = new Schema({
    serviceName: {
        type: String
    },
    servicePrice: {
        type: Number
    }
})

const photographerSchema = new Schema({
    fullname: { 
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
	email: {
        type: String,
        required: true,
        unique: true
    },
    gallery: {
        type: [gallerySchema],
        sparse: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verifEmail: {
        type: Boolean,
        default: false
    },
    available:{
        type: Boolean,
        default: true
    },
    phone: {
		type: String,
		required: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Reviews'
        }
    ],
    city: {
		type: String,
		required: true
    },
    bio: {
        type: String,
        default: ""
    },
    visitor: {
        type: Number,
        default: 0
    },
	password: {
		type: String,
		required: true,
		minlength: 8
    },
    photo: {
        type: String,
        default: ''
    },
    categories: [{
        type: String
    }],
    transaction: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Transaction'
        }
    ],
    services: {
        type: [servicesSchema],
        sparse: true
    }
}, {
    timestamps: true,
})

function modelAreadyDeclared() {
    try {
        const Photographer = mongoose.model('Photographer')
        module.exports = Photographer// it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const Photographer = mongoose.model('Photographer', photographerSchema);
    module.exports = Photographer;
}