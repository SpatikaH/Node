/**
  * @file Implements mongoose model to CRUD
  * documents in the dislikes collection
  */
 import mongoose from "mongoose";
 import DislikeSchema from "./DislikeSchema";

 /**
  * @typedef DislikeModel Represents the Like model in mongoose
  */
 const DislikeModel = mongoose.model("DislikeModel", DislikeSchema);
 export default DislikeModel