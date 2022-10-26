/**
 * @file Implements MessageSchema model for CRUD operations in the message collection
 */
 import mongoose from "mongoose";
 import MessageSchema from "./MessageSchema";
 
 const MessageModel = mongoose.model("MessageModel", MessageSchema);
 
 export default MessageModel;