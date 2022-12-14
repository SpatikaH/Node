/**
 * @file Controller RESTful Web service API for Follows resource
 */
 import {Express, Request, Response} from "express";
 import FollowControllerI from "../interfaces/follows/FollowControllerI";
 import FollowDao from "../daos/FollowDao";
 
 
 /**
  * @class FollowController Implements RESTful Web service API for follows resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>POST /users/:uid1/follows/:uid2 to create a follows instance where user with uid1 starts following user with uid2</li>
  *     <li>DELETE /users/:uid1/follows/:uid2 to delete a follow instance that was initially created where user with uid1 used to follow user with uid2</li>
  *     <li>GET /users/:uid/following to retrieve the list of accounts followed by the user </li>
  *     <li>GET /users/:uid/followers to retrieve list of accounts that follow the user </li>
  *     <li>GET /users/:uid1/following/:uid2 check if uid2 is present in the following list of uid1</li>
  *      <li>GET /users/:uid1/follower/:uid2 check if uid2 is present in the followers list of uid1</li>
  * </ul>
  * @property {FollowDao} followDao Singleton DAO implementing user CRUD operations
  * @property {FollowController} followController Singleton controller implementing
  * RESTful Web service API
  */
 export default class FollowController implements FollowControllerI {
     private static followDao: FollowDao = FollowDao.getInstance();
     private static followController: FollowController | null = null;
 
     /**
      * Creates singleton controller instance
      * @param {Express} app Express instance to declare the RESTful Web service
      * API
      * @returns FollowController
      */
     public static getInstance = (app: Express): FollowController => {
         if (FollowController.followController === null) {
             FollowController.followController = new FollowController();
             app.get("/users/:uid/following", FollowController.followController.findFollowing);
             app.get("/users/:uid/followers", FollowController.followController.findFollowers);
             app.post("/users/:uid1/follows/:uid2", FollowController.followController.userFollowsUser);
             app.delete("/users/:uid1/follows/:uid2", FollowController.followController.userUnfollowsUser);
             app.get("/users/:uid1/following/:uid2", FollowController.followController.checkIfUserPresentInFollowing);
             app.get("/users/:uid1/follower/:uid2", FollowController.followController.checkIfUserPresentInFollowers);
         }
         return FollowController.followController;
     }
 
     private constructor() {
     }
 
     /**
      * Retrieves all user accounts that follow the current logged-in user
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the follows objects
      */
     findFollowers = (req: Request, res: Response) =>
         FollowController.followDao.findFollowers(req.params.uid)
             .then(follows => res.json(follows));
 
     /**
      * Retrieves all user accounts that the current logged-in user follows
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the follows objects
      */
     findFollowing = (req: Request, res: Response) =>
         FollowController.followDao.findFollowing(req.params.uid)
             .then(follows => res.json(follows));
 
     /**
      * Creates a new follows instance where the logged-in user starts following another user account
      * @param {Request} req Represents request from client, including the url parameters like uid1 and uid2
      * where uid1 is the primary key of the logged-in user and uid2 is the primary key of the user
      * that they wish to follow
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON containing the new follows instance that was inserted in the
      * database
      */
     userFollowsUser = (req: Request, res: Response) =>
         FollowController.followDao.userFollowsUser(req.params.uid1, req.params.uid2)
             .then(follows => res.json(follows));
 
     /**
      * Removes a follows relationship instance from the database
      * @param {Request} req Represents request from client, including path
      * parameter uid1 which is the primary key of the logged-in user and uid2 which is the primary key of
      * the user account that the logged-in user wants to unfollow.
      * @param {Response} res Represents response to client, including status
      * on whether deleting a user was successful or not
      */
     userUnfollowsUser = (req: Request, res: Response) =>
         FollowController.followDao.userUnfollowsUser(req.params.uid1, req.params.uid2)
             .then(status => res.send(status));
 
     /**
      * Checks if a user is present in the following list of the current user
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the follows objects
      */
     checkIfUserPresentInFollowing = (req: Request, res: Response) =>
         FollowController.followDao.checkIfUserPresentInFollowing(req.params.uid1, req.params.uid2)
             .then(follows => res.json(follows));
 
     /**
      * Checks if a user is present in the followers list of the current user
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the follows objects
      */
     checkIfUserPresentInFollowers = (req: Request, res: Response) =>
         FollowController.followDao.checkIfUserPresentInFollowers(req.params.uid1, req.params.uid2)
             .then(follows => res.json(follows));
 }