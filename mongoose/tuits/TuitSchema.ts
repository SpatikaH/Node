/**
 * @file creates a TuitSchema for tuits in the mongodb database 
 */
import mongoose from "mongoose";

const TuitSchema = new mongoose.Schema(
    {
        tuit: {type: String, required: true},
        postedOn: {type: Date, default: Date.now},
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        }
    },
    {collection: 'tuits'}
)

export default TuitSchema;