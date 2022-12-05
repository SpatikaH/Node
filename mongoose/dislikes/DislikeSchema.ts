/**
  * @file Implements mongoose schema to CRUD for
  * documents in the dislikes collection
  */
 import mongoose, {Schema} from "mongoose";
 import Dislike from "../../models/dislikes/Dislike";

 /**
  * @typedef DislikeSchema Represents dislikes schema in mongoose
  * @property {Tuit} tuit Tuit being disliked
  * @property {User} likedBy User disliking the tuit
  */
  const DislikeSchema = new mongoose.Schema<Dislike>({
      tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
      dislikedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
  }, {collection: "dislikes"});
  export default DislikeSchema;