import {Model as MongoModel, Connection, createConnection} from "mongoose";
import {Stats} from "./player/stats/stats.model";

export interface Model {
  stats: MongoModel<Stats>;
}

const MONGODB_CONNECTION: string = "mongodb://localhost:27017";
export const mongoConnection: Connection = createConnection(MONGODB_CONNECTION);