const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likesSchema = new Schema({
    url: { type: String, required: true },
    title: { type: String, required: true },
    company_name: { type: String, required: true },
    job_type: String,
    candidate_required_location: String,
    description: String
});

module.exports = mongoose.model('Likes', likesSchema)