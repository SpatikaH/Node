/**
 * @file Declares Message representing messages sent by one user to another
 */
 import User from "./User";

 /**
  * @typedef Message Represents messages sent by one user to another
  * @property {string} message is the message string sent by user
  * @property {User} to is the receiver
  * @property {User} from is the sender
  * @property {Date} sentOn is the timestamp at which the message was sent
  */
 
 export default class Message {
     private message: string='';
     private to: User | null=null;
     private from: User | null = null;
     private sentOn: Date = new Date();
 };