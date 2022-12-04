/**
 * @file Controller RESTful Web service API for Authentication resource
 */
 import {Request, Response, Express} from "express";
 import UserDao from "../../daos/users/UserDao";
 const bcrypt = require('bcrypt');
 const saltRounds = 10;
 
/**
  * @class AuthenticationController Implements RESTful Web service API for authentication resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>POST /api/auth/login to allow the users to login</li>
  *     <li>POST /api/auth/register to allow the users to register</li>
  *     <li>POST /api/auth/profile to allow the users to view their profile</li>
  *     <li>POST /api/auth/logout to allow the users to logout</li>
  * </ul>
  * @property {UserDao} userDao Singleton DAO implementing user authentication CRUD operations
  * RESTful Web service API
  */
 const AuthenticationController = (app: Express) => {
 
     const userDao: UserDao = UserDao.getInstance();
 
      /**
      * Allows the users to Signup to the Tuiter application.
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, an error
      * message if the user who is an existing user tries to signup.
      */
     const signup = async (req: Request, res: Response) => {
         const newUser = req.body;
         const password = newUser.password;
         const hash = await bcrypt.hash(password, saltRounds);
         newUser.password = hash;
 
         const existingUser = await userDao.findUserByUsername(req.body.username);
         if (existingUser) {
             res.sendStatus(403);
             return;
         } else {
             const insertedUser = await userDao.createUser(newUser);
             // @ts-ignore
             insertedUser.password = '';
             // Uses the profile attribute to indicate currently logged-in user.
             // @ts-ignore
             req.session['profile'] = insertedUser;
             res.json(insertedUser);
         }
     }
 
     /**
      * Allows the users to login to the Tuiter application.
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, an error
      * message if the user who is not an existing user tries to login.
      */
     const login = async (req: Request, res: Response) => {
         const user = req.body;
         const username = user.username;
         const password = user.password;
         const existingUser = await userDao
             .findUserByUsername(username);
         if (!existingUser) {
             res.sendStatus(403);
             return;
         }
         const match = await bcrypt.compare(password, existingUser.password);
         if (match) {
             existingUser.password = '*****';
             // @ts-ignore
             req.session['profile'] = existingUser;
             res.json(existingUser);
         } else {
             res.sendStatus(403);
         }
     }
 
     /**
      * Allows the users to view their profile in the Tuiter application.
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client,including their profile
      * consisting of their tuits,likes and dislikes..
      */
     const profile = (req: Request, res: Response) => {
         // @ts-ignore
         const profile = req.session['profile'];
         if (profile) {
             profile.password = "";
             res.json(profile);
         } else {
             res.sendStatus(403);
         }
     }
 
     /**
      * Allows the users to logout of the the Tuiter application.
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client,including their their session to be destroyed.
      */
     const logout = (req: Request, res: Response) => {
         // @ts-ignore
         req.session.destroy();
         res.sendStatus(200);
     }
 
     app.post("/api/auth/login", login);
     app.post("/api/auth/profile", profile);
     app.post("/api/auth/logout", logout);
     app.post("/api/auth/signup", signup);
 
 }
 
 export default AuthenticationController;