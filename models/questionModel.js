import mongoose from 'mongoose'

const questionModel = mongoose.Schema({
    que : {
        type: String,
        required: true
    },
    subject : {
        type: String,
        required: true
    },
    topic : {
        type: String,
        required: true
    },
    difficulty : {
        type: String,
        required: true
    },
    marks : {
        type: Number,
        required: true
    }
})

const Question = mongoose.model('Question', questionModel)

export default Question