/**
 * @file Declares Bookmark data type representing a relationship between the users and Tuits
 */
 import Tuit from "./Tuit";
 import User from "./User";
 
 /**
  * @typedef Bookmark Represents relationship between the users bookmarking a tuit
  * as in a user bookmarks a tuit
  * @property {Tuit} bookmarkedTuit Tuit being bookmarked
  * @property {User} BookmarkedBy User who bookmarks a tuit
  */
 
 export default interface Bookmark {
     bookmarkedTuit: Tuit,
     BookmarkedBy: User
 };