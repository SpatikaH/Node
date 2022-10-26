/**
 * @file represents interface for Message DAO that manages messages. 
 */
 import Message from "../../models/Message";

 /**
  * @interface MessagingDaoI defines Data Access Object managing data storage
  * of Messaging
  */
 export default interface MessageDaoI {
 
     /**
      * Uses MessagingModel to retrieve messages sent by the logged-in user
      * @param {string} from logged-in User's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
     findMessagesSent(from: string): Promise<Message[]>;
 
     /**
      * Uses MessagingModel to retrieve messages received by the logged-in user
      * @param {string} to logged-in User's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
     findMessagesReceived(to: string): Promise<Message[]>;
 
     /**
      * Inserts message instance into the database
      * @param {Messaging} messaging Instance to be inserted into the database
      * @returns Promise To be notified when message is inserted into the database
      */
     createMessage(uid1:string, uid2:string, messaging: Message): Promise<Message>;
 
     /**
      * Removes message from the database.
      * @param {string} mid Primary key of message to be removed
      * @returns Promise To be notified when message is removed from the database
      */
     deleteMessage(mid: string): Promise<any>;
 
     /**
      * Uses MessagingModel to retrieve messages received by the logged-in user from selected user
      * @param {string} to logged-in User's primary key
      * @param{string} from the primary key of selected user
      * @returns Promise To be notified when messages are retrieved from the database
      */
     checkMessagesReceivedFromUser(to: string, from: string): Promise<Message[]>;
 
     /**
      * Uses MessagingModel to retrieve messages sent by the logged-in user to a selected user
      * @param {string} from logged-in User's primary key
      * @param {string} to is the selected user's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
     checkMessagesSentByUser(from : string, to :string) : Promise<Message[]>;
 }