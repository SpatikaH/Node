/**
 * @file Implements BookmarkSchema model for CRUD operations in the bookmarks collection
 */
 import mongoose from "mongoose";
 import BookmarkSchema from "./BookmarkSchema";
 
 const BookmarkModel = mongoose.model("BookmarkModel", BookmarkSchema);
 
 export default BookmarkModel;