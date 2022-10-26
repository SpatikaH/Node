/**
 * @file creates a MessageSchema for CRUD documents in the message collection
 */
 import mongoose, {Schema} from "mongoose";
 import Message from "../../models/Message";
 
 const MessageSchema = new mongoose.Schema<Message>({
     from: {type: Schema.Types.ObjectId, ref: "UserModel"},
     to: {type: Schema.Types.ObjectId, ref: "UserModel"},
     message: String,
     sentOn: Date
 }, {collection: "messages"});
 
 export default MessageSchema;