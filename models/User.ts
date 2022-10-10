import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

export default class User {
    private id: string;
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
    constructor(id: string, username: string, password: string, firstName: string, lastName: string) {
        this.id = id;
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
            id: this.id,
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
