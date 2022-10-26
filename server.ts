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

const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());


const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 autoIndex: false,
 maxPoolSize: 10,
 serverSelectionTimeoutMS: 5000,
 socketTimeoutMS: 45000,
 family: 4
}

mongoose.connect('mongodb+srv://nodeuser:nodeuser123@cluster0.m3vm6ie.mongodb.net/fse?authSource=admin', options);

function sayHello (req: Request, res: Response) {
    res.send('Welcome to Foundation of Software Engineering!');
}

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likeController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messagingController = MessageController.getInstance(app);

 app.get('/', sayHello);
 app.get('/hello', sayHello);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);