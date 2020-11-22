const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    emailVerified: {
        type: Boolean,
        default: false
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
    social_login: {
        googleID: { type: String, default: '' },
    },
    transaction: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Transaction'
        }
    ]
}, {
    timestamps: true,
})

function modelAreadyDeclared() {
    try {
        const User = mongoose.model('User')
        module.exports = User// it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const User = mongoose.model('User', userSchema);
    module.exports = User;
}