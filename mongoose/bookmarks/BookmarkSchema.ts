/**
 * @file Implements BookmarkSchema schema for CRUD operations in the bookmarks collection
 */
 import mongoose, {Schema} from "mongoose";
 import Bookmark from "../../models/Bookmark";
 
 const BookmarkSchema = new mongoose.Schema<Bookmark>({
     bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
     BookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
 }, {collection: "bookmarks"});
 export default BookmarkSchema;