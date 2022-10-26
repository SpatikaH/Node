/**
 * @file Creates a structured model for the Users entity
 */

import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

/**
 * @typedef User Represents a user that was added to the database
 * @property {string} username is the username of the user
 * @property {string} password is password of the user
 * @property {string} firstName is the firstName of the user
 * @property {string} lastName is the lastname of the user
 * @property {string} email is the email id of the user
 * @property {string} profilePhoto is the profile photo of the user
 * @property {string} headerImage is the headerImage of the user
 * @property {AccountType} accountType is the accountType of the user
 * @property {MaritalStatus} maritalStatus is the MaritalStatus of the user
 * @property {string} biography is the biography of the user
 * @property {Date} dateOfBirth is the dateOfBirth of the user
 * @property {Date} joined is the date of joining tuiter of the user
 * @property {Location} location is the location of the user
 */
export default class User {
    private username: string = '';
    private password: string = '';
    private firstName: string | null = null;
    private lastName: string | null = null;
    private email: string = '';
    private profilePhoto: string | null = null;
    private headerImage: string | null = null;
    private accountType: AccountType = AccountType.Personal;
    private maritalStatus: MaritalStatus = MaritalStatus.Single;
    private biography: string | null = null;
    private dateOfBirth: Date | null = null;
    private joined: Date = new Date();
    private location: Location | null = null;
    constructor(username: string, password: string, firstName: string, lastName: string) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get uName() { return this.username; }
    get pass() { return this.password; }
    get fName() { return this.firstName; }
    get lName() { return this.lastName; }
    get json() {
        return {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            profilePhoto: this.profilePhoto,
            headerImage: this.headerImage,
            accountType: this.accountType,
            maritalStatus: this.maritalStatus,
            biography: this.biography,
            dob: this.dateOfBirth,
            joined: this.joined,
            location: this.location
        }
    }
}
