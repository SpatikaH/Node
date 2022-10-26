/**
 * @file Represents Tuits mapped to Tag class
 */
import Tuit from "./Tuit";

/**
 * @typedef Tuit2Tag Represents a relationship between tuit posted by a user and tags mapped
 * @property {string} tag represents the tagged string for a tuit
 * @property {Tuit} tuit is the message string in the user's tuit
 */
export default class Tuit2Tag {
    private tag: string = '';
    private tuit: Tuit | null = null;
};