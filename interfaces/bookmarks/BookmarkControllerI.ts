/**
 * @file Interface BookmarkControllerI for RESTful Web service API for bookmarks resource
 */
 import {Request, Response} from "express";

/**
 * @interface BookmarkControllerI consisting of RESTful Web service API for bookmark resource.
 */
 export default interface BookmarkControllerI {
 
     /**
      * Retrieves all tuits bookmarked by a user from the database and returns an array of bookmarks.
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the bookmark objects
      */
     findAllTuitsBookmarkedByUser (req: Request, res: Response): void;
 
     /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is bookmarking the tuit
     * and the tuit being liked
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new bookmark that was inserted in the
     * database
     */
     userBookmarksTuit (req: Request, res: Response): void;
 
     /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is unbookmarking
     * the tuit and the tuit being unliked
     * @param {Response} res Represents response to client, including status
     * on whether deleting the like was successful or not
     */
     userUnBookmarksTuit (req: Request, res: Response): void;
 
     /**
      * Checks if a tuit is bookmarked by the user or not.
      * @param {Request} req Represents request from client
      * @param {Response} res Represents response to client, including boolean result
      */
     checkIfATuitIsBookmarkedByUser (req: Request, res: Response): void;
 
     /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid  representing the user that is unbookmarking
     * all the tuits and the tuits being bookmarked
     * @param {Response} res Represents response to client, including status
     * on whether deleting the bookmarks was successful or not
     */
     deleteAllBookmarksForUser (req: Request, res: Response): void;
 }