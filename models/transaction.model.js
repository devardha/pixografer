const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    userId: { 
        type: String,
        required: true
    },
    photographerId: { 
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    photographerName: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    success: {
		type: Boolean,
		default: false
    },
    description: {
        type: String
    },
    date: {
        type: Date
    }
}, {
    timestamps: true,
})

function modelAreadyDeclared() {
    try {
        const Transaction = mongoose.model('Transaction')
        module.exports = Transaction// it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const Transaction = mongoose.model('Transaction', transactionSchema);
    module.exports = Transaction;
}