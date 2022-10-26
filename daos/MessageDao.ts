/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
 import Message from "../models/Message";
 import MessageModel from "../mongoose/messages/MessageModel";
 import MessageDaoI from "../interfaces/messages/MessageDaoI";
 
 
/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 * @property {MessageDao} messageDao Private single instance of UserDao
 */
 export default class MessageDao implements MessageDaoI {
     private static messageDao: MessageDao | null = null;
 
    /**
     * Creates singleton DAO instance
     * @returns MessageDao
    */
     public static getInstance = (): MessageDao => {
         if(MessageDao.messageDao === null) {
             MessageDao.messageDao = new MessageDao();
         }
         return MessageDao.messageDao;
     }
     private constructor() {}
 
     /**
      * Inserts message instance into the database
      * @param {Message} message Instance to be inserted into the database
      * @returns Promise To be notified when message is inserted into the database
      */
     createMessage = async (uid1:string, uid2:string,message: Message): Promise<Message> =>
         MessageModel.create({...message, to: uid2, from: uid1});
 
     /**
      * Removes message from the database.
      * @param {string} mid Primary key of message to be removed
      * @returns Promise To be notified when message is removed from the database
      */
     deleteMessage = async (mid: string): Promise<any> =>
         MessageModel.deleteOne({_id: mid});
 
     /**
      * Uses MessageModel to retrieve messages sent by the logged-in user
      * @param {string} from logged-in User's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
     findMessagesSent = async (from: string): Promise<Message[]> =>
         MessageModel
             .find({from: from})
             .populate("message")
             .exec();
 
     /**
      * Uses MessageModel to retrieve messages received by the logged-in user
      * @param {string} to logged-in User's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
     findMessagesReceived = async (to: string): Promise<Message[]> =>
         MessageModel
             .find({to: to})
             .populate("message")
             .exec();
 
     /**
      * Uses MessageModel to retrieve messages received by the logged-in user from selected user
      * @param {string} to logged-in User's primary key
      * @param{string} from the primary key of selected user
      * @returns Promise To be notified when messages are retrieved from the database
      */
     checkMessagesReceivedFromUser = async (to: string, from: string): Promise<Message[]> =>
         MessageModel.find({to: to, from: from});
 
     /**
      * Uses MessageModel to retrieve messages sent by the logged-in user to a selected user
      * @param {string} from logged-in User's primary key
      * @param {string} to is the selected user's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
     checkMessagesSentByUser = async (from: string, to: string): Promise<Message[]> =>
         MessageModel.find({to: to, from: from});
 
 }