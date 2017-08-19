import {Model as MongoModel, Connection, createConnection} from "mongoose";
import * as mongoose from "mongoose";
import {Stats} from "./player/stats/stats.model";
import {Search} from "./player/search/search.model";

export interface Model {
  stats: MongoModel<Stats>;
  search: MongoModel<Search>;
}

const MONGODB_CONNECTION: string = "mongodb://localhost:27017";
(mongoose as any).Promise = Promise; // Needed since typings delcare it wrong
export const mongoConnection: Connection = createConnection(MONGODB_CONNECTION);