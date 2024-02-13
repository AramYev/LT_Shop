import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    isEmailVerified: {
        type: Boolean,
        default: false,
    },

    createdAt: {
        type: Date,
    },

    updatedAt: {
        type: Date,
    },

    deletedAt: {
        type: Date,
    },
});

export const User = mongoose.model('User', userSchema);
