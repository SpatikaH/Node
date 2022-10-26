/**
 * @file Implements TuitSchema model for CRUD operations in the tuits collection
 */
import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";

const TuitModel = mongoose.model("TuitModel", TuitSchema);

export default TuitModel;