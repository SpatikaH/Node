/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>messages</li>
 *     <li>tuits</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

import TuitController
 from "./controllers/TuitController";


import UserController from "./controllers/UserController";

import BookmarkController from "./controllers/BookmarkController";

import FollowController from "./controllers/FollowController";

import LikeController from "./controllers/LikeController";

import MessageController from "./controllers/MessageController";
import express, {Request, Response} from 'express';
import mongoose from "mongoose";


mongoose.connect('mongodb+srv://nodeuser:nodeuser123@cluster0.m3vm6ie.mongodb.net/fse?retryWrites=true&w=majority');

const app = express();
app.use(express.json());

function sayHello (req: Request, res: Response) {
    res.send('Welcome to Foundation of Software Engineering!');
}
 app.get('/', sayHello);
 app.get('/hello', sayHello);

 app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likeController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messagingController = MessageController.getInstance(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);