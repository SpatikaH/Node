/**
 * @file Represents Tuits mapped to Topic class
 */
import Tuit from "./Tuit";

/**
 * @typedef Tuit2Topic Represents a relationship between tuit posted by a user and topic 
 * @property {string} topic represents the topic string for a tuit
 * @property {Tuit} tuit is the message string in the user's tuit
 */
export default class Tuit2Topic {
    private topic: string = '';
    private tuit: Tuit | null = null;
};