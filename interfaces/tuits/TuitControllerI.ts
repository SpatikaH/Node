/**
 * @file Interface TuitControllerI for RESTful Web service API for likes resource
 */
import {Request, Response} from "express";
/**
 * @interface TuitControllerI defines RESTful Web service API for tuits resource.
 */
export default interface TuitControllerI {
    findAllTuits(req: Request, res: Response): void;
    findTuitById(req: Request, res: Response): void;
    findTuitsByUser(req: Request, res: Response): void;
    createTuit(req: Request, res: Response): void;
    updateTuit(req: Request, res: Response): void;
    deleteTuit(req: Request, res: Response): void;
}