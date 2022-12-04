import DislikeDaoI from "../../interfaces/dislikes/DislikeDaoI";
 import DislikeModel from "../../mongoose/dislikes/DislikeModel";
 import Dislike from "../../models/dislikes/Dislike";

 /**
  * @class DislikeDao Implements Data Access Object managing data storage
  * of Likes
  * @property {DislikeDao} likeDao Private single instance of LikeDao
  */
 export default class DislikeDao implements DislikeDaoI {
     private static dislikeDao: DislikeDao | null = null;

     /**
      * Creates singleton DAO instance
      * @returns LikeDao
      */
     public static getInstance = (): DislikeDao => {
         if (DislikeDao.dislikeDao === null) {
             DislikeDao.dislikeDao = new DislikeDao();
         }
         return DislikeDao.dislikeDao;
     }
/**
     * Uses DisikeModel to retrieve users who disliked a tuit from dislikes collection
     * @param {string} tid Tuit id whose tuits whose users who dislike the tuit is to be retrieved
     * @returns Promise To be notified with a collection of users who disliked the tuits are retrieved from the database
     */
findAllUsersThatDislikedTuit = async (tid: string): Promise<Dislike[]> =>
     DislikeModel
         .find({tuit: tid})
         .populate("dislikedBy")
         .exec();

/**
     * Uses DisikeModel to retrieve tuits disliked by a user from dislikes collection
     * @param {string} uid User whose tuits disliked are to be retrieved
     * @returns Promise To be notified with the collection of tuits  when the tuits are retrieved from the database
*/
findAllTuitsDislikedByUser = async (uid: string): Promise<Dislike[]> =>
     DislikeModel.find({dislikedBy: uid})
         .populate({
             path: "tuit",
             populate: {
                 path: "postedBy"
             }
         })
         .exec();

/**
    * @param {Request} req Represents request from client, including the
    * path parameters uid and tid representing the user that is disliking the tuit
    * and the tuit being disliked
    * @param {Response} res Represents response to client, including the
    * body formatted as JSON containing the new likes that was inserted in the
    * database
 */
 userDislikesTuit = async (uid: string, tid: string): Promise<any> =>
     DislikeModel.create({tuit: tid, dislikedBy: uid});

/**
     * Uses DislikeModel to retrieve users who disliked a tuit from dislikes collection
     * @param {string} tid Tuit id whose tuits whose users who dislike the tuit is to be retrieved
     * @returns Promise To be notified with a collection of users who disliked the tuits are retrieved from the database
*/
 findUserDislikesTuit = async (uid: string, tid: string): Promise<any> =>
     DislikeModel.findOne({tuit: tid, dislikedBy: uid});

/**
    * @param {Request} req Represents request from client, including the
    * path parameters uid and tid representing the user that is undisliking
    * the tuit and the tuit being undisliked
    * @param {Response} res Represents response to client, including status
    * on whether deleting the like was successful or not
*/
 userUndislikesTuit = async (uid: string, tid: string): Promise<any> =>
     DislikeModel.deleteOne({tuit: tid, dislikedBy: uid});
     
/**
    * Uses DislikeModel to retrieve users who disliked a tuit from dislikes collection
    * @param {string} tid Tuit id whose tuits whose users who dislike the tuit is to be retrieved
    * @returns count of number of dislikes obtained so far
    */
countHowManyDislikedTuit = async (tid: string): Promise<any> =>
     DislikeModel.count({tuit: tid});
}