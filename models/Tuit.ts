/**
 * @file Represents Tuit representing the tuits posted by a user
 */
import User from "./User";

/**
 * @typedef Tuit Represents a tuit posted by a user
 * @property {string} tuit is the message string in the user's tuit
 * @property {Date} postedOn is the date at which the tuit was posted
 * @property {User} postedBy is the user posting the tuit
 */
export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User | null = null;

    constructor(id: string, tuit: string, postedOn: Date) {
        this.tuit = tuit;
        this.postedOn = postedOn;
        this.postedBy = null;
    }
    public set author(user: User | null) { this.postedBy = user; }
    public get author(): User | null { return this.postedBy; }
    public get post(): string { return this.tuit; }
};
