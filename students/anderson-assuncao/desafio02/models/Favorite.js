const mongoose = require('mongoose')

const Favorite = mongoose.model('Favorite', {
    name: String,
    url: String,
})

module.exports = Favorite