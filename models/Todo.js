const {Schema} = require('mongoose')
const {model} = require('mongoose')

const schema = new Schema(
    {
    title:
        {
        type: String,
        required: true
        },
    completed:
        {
        type: Boolean,
        default: false
        }
    })

module.exports = model('Todo', schema)