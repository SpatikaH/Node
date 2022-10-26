/**
 * @file Declares Follow data type representing a relationship between the users
 */
 import User from "./User";

 /**
  * @typedef Follow Represents representing a relationship between the users one user
  * can follow another user
  * @property {User} userFollowed User being followed
  * @property {User} userFollowing User that starts following
  */
 export default interface Follow {
     userFollowed: User,
     userFollowing: User
 };