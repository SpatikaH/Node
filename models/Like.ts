/**
 * @file Declares Like data type representing a user-tuit relationship
 */
 import Tuit from "./Tuit";
 import User from "./User";
 
 /**
  * @typedef Like Representing a user-tuit relationship
  *  a user liking a tuit
  * @property {Tuit} tuit Tuit that is liked
  * @property {User} likedBy User who likes the tuit
  */
 
 export default interface Like {
     tuit: Tuit,
     likedBy: User
 };