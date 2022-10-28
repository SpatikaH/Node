/**
 * @file Controller RESTful Web service API for messages resource
 */
 import {Express, Request, Response} from "express";
 import MessageDao from "../daos/MessageDao";
 import MessageControllerI from "../interfaces/messages/MessageControllerI";
 import Message from "../models/Message";
 
 
 /**
  * @class MessagingController Implements RESTful Web service API for messages resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>GET /messages/sent/:from to retrieve all the messages sent by a user </li>
  *     <li>GET /messages/received/:to to retrieve messages received by a user </li>
  *     <li>POST /messages to record a message sent from one user to another user </li>
  *     <li>DELETE /message/:mid to delete a message sent from one user to another </li>
  *     <li>GET /messages/:to/received/:from checks messages received by the user from another user</li>
  *     <li>GET /messages/:from/sent/:to checks messages sent by the user to another user</li>
  * </ul>
  * @property {MessageDao} messageDao Singleton DAO implementing likes CRUD operations
  * @property {MessageController} messageController Singleton controller implementing
  * RESTful Web service API
  */
 export default class MessageController implements MessageControllerI {
     private static messagingDao: MessageDao = MessageDao.getInstance();
     private static messagingController: MessageController | null = null;
     public static getInstance = (app: Express): MessageController => {
         if (MessageController.messagingController === null) {
            MessageController.messagingController = new MessageController();
             app.get("/messages/sent/:from", MessageController.messagingController.findMessagesSent);
             app.get("/messages/received/:to", MessageController.messagingController.findMessagesReceived);
             app.post("/users/:uid1/sends/:uid2", MessageController.messagingController.createMessage);
             app.delete("/message/:mid", MessageController.messagingController.deleteMessage);
             app.get("/messages/:to/received/:from", MessageController.messagingController.checkMessagesReceivedFromUser);
             app.get("/messages/:from/sent/:to", MessageController.messagingController.checkMessagesSentByUser);
         }
         return MessageController.messagingController;
     }
 
     private constructor() {
     }
 
     /**
      * Retrieves all messages that were sent by the logged-in user
      * @param {Request} req Represents request from client, including the path
      * parameter "from" representing the primary key of the logged-in user
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the message objects
      */
     findMessagesSent = (req: Request, res: Response) =>
        MessageController.messagingDao.findMessagesSent(req.params.from)
             .then(messages => res.json(messages));
 
     /**
      * Retrieves all messages that were received by the logged-in user
      * @param {Request} req Represents request from client, including the path
      * parameter "to" representing the primary key of the logged-in user
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the message objects
      */
     findMessagesReceived = (req: Request, res: Response) =>
        MessageController.messagingDao.findMessagesReceived(req.params.to)
             .then(messages => res.json(messages));
 
     /**
      * Creates a message instance with a message string sent from one user to another
      * @param {Request} req Represents request from client, including the
      * request body, that would have the primary key of the sender user, receiver user, the message string
      * and the timestamp
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON containing the new messaging instance that was inserted in the
      * database
      */
     createMessage = (req: Request, res: Response) =>
        MessageController.messagingDao.createMessage(req.params.uid1,req.params.uid2,req.body)
             .then((message: Message) => res.json(message));
 
     /**
      * Deletes a message entry from the database
      * @param {Request} req Represents request from client, including the
      * path parameter mid that represents the message id that needs to be removed from the database
      * @param {Response} res Represents response to client, including status
      * on whether deleting the like was successful or not
      */
     deleteMessage = (req: Request, res: Response) =>
        MessageController.messagingDao.deleteMessage(req.params.mid)
             .then((status) => res.send(status));
 
     /**
      * Retrieves all messages that were received by the logged-in user from a selected user
      * @param {Request} req Represents request from client, including the path
      * parameter "to" representing the primary key of the logged-in user
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the message objects
      */
     checkMessagesReceivedFromUser = (req: Request, res: Response) =>
        MessageController.messagingDao.checkMessagesReceivedFromUser(req.params.to, req.params.from)
             .then(messages => res.json(messages))
 
     /**
      * Retrieves all messages that were sent by the logged-in user to a selected user
      * @param {Request} req Represents request from client, including the path
      * parameter "from" representing the primary key of the logged-in user
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the message objects
      */
     checkMessagesSentByUser = (req: Request, res: Response) =>
        MessageController.messagingDao.checkMessagesSentByUser(req.params.to, req.params.from)
             .then(messages => res.json(messages))
 };