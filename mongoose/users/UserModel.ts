/**
 * @file Implements UserSchema model for user CRUD operations 
 */
import mongoose from "mongoose";
import UserSchema from "./UserSchema";

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;