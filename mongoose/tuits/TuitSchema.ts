/**
 * @file Implements mongoose schema for tuits
 */

import mongoose from "mongoose";

/**
 * @typedef Message Represents the tuits
 * @property {String} tuit The tuit in the form of a string
 * @property {User} postedBy The users who posts the tuit
 * @property {Date} postedOn The date when the tuit was posted
 */
const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedBy: {type: String, ref: "UserModel", required: true},
    postedOn: {type: Date, default: Date.now},
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0}
    } 
}, {collection: "tuits"});

export default TuitSchema;