const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: { 
        type: String,
        required: true
    },
    photographerId: { 
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        default: ""
    }
}, {
    timestamps: true,
})

function modelAreadyDeclared() {
    try {
        const Review = mongoose.model('Review')
        module.exports = Review
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const Review = mongoose.model('Review', reviewSchema);
    module.exports = Review;
}