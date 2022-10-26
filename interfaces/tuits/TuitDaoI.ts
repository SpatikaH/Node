/**
 * @file represents interface for Tuit DAO that manages tuits. 
 */
import Tuit from "../../models/Tuit";
/**
 * @interface representing API for Tuits related data access object methods
 */
export default interface TuitDaoI {
    /**
     * Uses TuitModel to retrieve all tuits from tuits collection
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    findAllTuits(): Promise<Tuit[]>;

    /**
     * Uses TuitModel to retrieve single tuit from tuits collection
     * @param {string} username User whose tuits posted are to be retrieved
     * @returns Promise To be notified when the tuits are retrieved from the database
     */
    findTuitsByUser(uid: string): Promise<Tuit[]>;
    
    /**
     * Uses TuitModel to retrieve single tuit from tuits collection
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when tuit is retrieved from the database
     */
    findTuitById(tid: string): Promise<any>;

    /**
     * Inserts tuit instance into the database
     * @param {Tuit} tuit Instance to be inserted into the database
     * @returns Promise To be notified when tuit is inserted into the database
     */
    createTuit(tuit: Tuit): Promise<Tuit>;

     /**
     * Updates Tuit with new values in database
     * @param {string} tid Primary key of tuit to be modified
     * @param {Tuit} tuit Tuit object containing properties and their new values
     * @returns Promise To be notified when tuit is updated in the database
     */
    updateTuit(tid: string, tuit: Tuit): Promise<any>;

     /**
     * Removes tuit from the database.
     * @param {string} tid Primary key of tuit to be removed
     * @returns Promise To be notified when tuit is removed from the database
     */
    deleteTuit(tid: string): Promise<any>;
}