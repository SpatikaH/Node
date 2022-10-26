/**
 * @file Interface UserControllerI for RESTful Web service API for likes resource
 */
import {Request, Response} from "express";
/**
 * @interface UserControllerI representing the user controller.
 */
export default interface UserControllerI {
    findAllUsers(req: Request, res: Response): void;
    findUserById(req: Request, res: Response): void;
    createUser(req: Request, res: Response): void;
    deleteUser(req: Request, res: Response): void;
    updateUser(req: Request, res: Response): void;
}