/**
 * @file Implements UserSchema model for CRUD operations in the follows collection
 */
 import mongoose from "mongoose";
 import FollowSchema from "./FollowSchema";
 
 const FollowModel = mongoose.model("FollowModel", FollowSchema);
 
 export default FollowModel;